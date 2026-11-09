import { put, list } from "@vercel/blob";

const ARQ = "estoque.json";

// Lê o estado atual direto do Blob. Devolve {} enquanto ninguém salvou nada.
async function ler() {
  try {
    const { blobs } = await list({ prefix: ARQ, limit: 1 });
    if (!blobs.length) return {};
    const r = await fetch(blobs[0].url + "?v=" + Date.now(), { cache: "no-store" });
    if (!r.ok) return {};
    const j = await r.json();
    return j && typeof j === "object" ? j : {};
  } catch {
    return {};
  }
}

// Só deixa passar o que o site entende, com os tipos certos.
const TAMANHOS = ["P", "M", "G", "GG"];
function limpar(entrada) {
  const saida = {};
  if (!entrada || typeof entrada !== "object") return saida;
  for (const [id, v] of Object.entries(entrada)) {
    if (typeof id !== "string" || id.length > 60 || !v || typeof v !== "object") continue;
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

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method === "GET") {
    return res.status(200).json(await ler());
  }

  if (req.method === "POST") {
    const pin = process.env.PAINEL_PIN;
    if (!pin) return res.status(500).json({ erro: "PIN não configurado" });

    const enviado = String(req.headers["x-painel-pin"] || "");
    // comparação de tempo constante, pra não dar pra adivinhar o PIN pelo tempo de resposta
    let dif = enviado.length === pin.length ? 0 : 1;
    for (let i = 0; i < Math.max(enviado.length, pin.length); i++) {
      dif |= (enviado.charCodeAt(i) || 0) ^ (pin.charCodeAt(i) || 0);
    }
    if (dif !== 0) {
      await new Promise(r => setTimeout(r, 700));
      return res.status(401).json({ erro: "PIN incorreto" });
    }

    let corpo = req.body;
    if (typeof corpo === "string") { try { corpo = JSON.parse(corpo); } catch { corpo = null; } }
    const dados = limpar(corpo);

    await put(ARQ, JSON.stringify(dados), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 0
    });

    return res.status(200).json({ ok: true, itens: Object.keys(dados).length });
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ erro: "Método não permitido" });
}
