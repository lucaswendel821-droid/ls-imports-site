import { put, list, del } from "@vercel/blob";

const PREFIXO = "estoque-";

// Cada salvamento grava um arquivo com nome novo. Assim o CDN nunca devolve
// versão velha: a URL muda a cada save. Os antigos são apagados em seguida.
async function maisNovo() {
  const { blobs } = await list({ prefix: PREFIXO });
  if (!blobs.length) return null;
  return blobs.slice().sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
}

async function ler() {
  try {
    const ordenados = await maisNovo();
    if (!ordenados) return {};
    const r = await fetch(ordenados[0].url, { cache: "no-store" });
    if (!r.ok) return {};
    const j = await r.json();
    return j && typeof j === "object" ? j : {};
  } catch {
    return {};
  }
}

const TAMANHOS = ["P", "M", "G", "GG"];
function limpar(entrada) {
  const saida = {};
  if (!entrada || typeof entrada !== "object") return saida;
  for (const [id, v] of Object.entries(entrada)) {
    if (typeof id !== "string" || id.length > 60 || !v || typeof v !== "object") continue;
    // placar do lote de tênis: { reservados: 0..12 }
    if (id === "_lote") {
      const n = Number(v.reservados);
      if (isFinite(n) && n >= 0 && n <= 12) saida._lote = { reservados: Math.round(n) };
      continue;
    }
    const o = {};
    if (v.soldout === true) o.soldout = true;
    if (v.pre === true) o.pre = true;
    if (v.pre === false) o.pre = false;
    if (typeof v.price === "number" && isFinite(v.price) && v.price > 0 && v.price < 100000) {
      o.price = Math.round(v.price * 100) / 100;
    }
    if (Array.isArray(v.semTamanho)) {
      const t = v.semTamanho.filter(x => TAMANHOS.includes(x));
      if (t.length) o.semTamanho = [...new Set(t)];
    }
    if (Object.keys(o).length) saida[id] = o;
  }
  return saida;
}

function pinConfere(enviado, pin) {
  let dif = enviado.length === pin.length ? 0 : 1;
  const n = Math.max(enviado.length, pin.length);
  for (let i = 0; i < n; i++) {
    dif |= (enviado.charCodeAt(i) || 0) ^ (pin.charCodeAt(i) || 0);
  }
  return dif === 0;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method === "GET") {
    return res.status(200).json(await ler());
  }

  if (req.method === "POST") {
    const pin = process.env.PAINEL_PIN;
    if (!pin) return res.status(500).json({ erro: "PIN não configurado" });

    if (!pinConfere(String(req.headers["x-painel-pin"] || ""), pin)) {
      await new Promise(r => setTimeout(r, 700));
      return res.status(401).json({ erro: "PIN incorreto" });
    }

    // o painel usa isto só pra conferir o PIN na entrada, sem gravar nada
    if (req.headers["x-painel-verificar"] === "1") {
      return res.status(200).json({ ok: true });
    }

    let corpo = req.body;
    if (typeof corpo === "string") { try { corpo = JSON.parse(corpo); } catch { corpo = null; } }
    const dados = limpar(corpo);

    const antigos = (await maisNovo()) || [];
    await put(`${PREFIXO}${Date.now()}.json`, JSON.stringify(dados), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: true
    });

    // limpa as versões anteriores, sem derrubar o salvamento se falhar
    try { if (antigos.length) await del(antigos.map(b => b.url)); } catch {}

    return res.status(200).json({ ok: true, itens: Object.keys(dados).length });
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ erro: "Método não permitido" });
}
