// Catálogo da LS Imports. Carregado pelo site e pelo painel.
// price = valor no Pix. compare = preço "de". card = valor no cartão quando for diferente.
// Para adicionar uma peça nova, copie uma linha e troque os dados e a foto.
window.PRODUCTS = [
    {id:"lacoste-jaqueta", name:"Jaqueta Lacoste preta", brand:"Lacoste", cat:"moletons", price:159.90, compare:199.00, card:199.00, img:"img/lacoste.jpg", light:true},
    {id:"tommy-qz-preto", name:"Quarter zip Tommy preto", brand:"Tommy Hilfiger", cat:"moletons", price:159.90, compare:199.00, card:199.00, img:"img/tommy-preto.jpg", light:true},
    {id:"tommy-qz-off", name:"Quarter zip Tommy off white", brand:"Tommy Hilfiger", cat:"moletons", price:159.90, compare:199.00, card:199.00, img:"img/tommy-off.jpg", light:true},
    {id:"xo-preta", name:"Calça jeans XO preta", brand:"XO", cat:"calcas", price:199.90, img:"img/jeans-preto.jpg", light:true},
    {id:"xo-cinza", name:"Calça jeans XO cinza marmorizada", brand:"XO", cat:"calcas", price:199.90, img:"img/jeans-cinza.jpg", light:true},
    {id:"xo-grafite", name:"Calça jeans XO grafite estonada", brand:"XO", cat:"calcas", price:199.90, img:"img/jeans-grafite.jpg", light:true},
    {id:"listrada-preta", name:"Camiseta listrada preta e branca", brand:"LS Seleção", cat:"camisetas", price:89.90, img:"img/listrada-preta.jpg", light:true},
    {id:"listrada-azul", name:"Camiseta listrada branca com azul claro", brand:"Celani", cat:"camisetas", price:79.90, compare:89.90, img:"img/listrada-azul.jpg", light:true, pre:true},
    {id:"listrada-vermelha", name:"Camiseta listrada branca com vermelho", brand:"Celani", cat:"camisetas", price:79.90, compare:89.90, img:"img/listrada-vermelha.jpg", light:true, pre:true, natal:true},
    {id:"lisa-vermelha", name:"Camiseta vermelha lisa", brand:"Celani", cat:"camisetas", price:79.90, compare:89.90, img:"img/lisa-vermelha.jpg", light:true, pre:true, natal:true},
    {id:"listrada-royal", name:"Camiseta listrada branca com azul royal", brand:"Celani", cat:"camisetas", price:79.90, compare:89.90, img:"img/listrada-royal.jpg", light:true, pre:true},
    {id:"listrada-marinho", name:"Camiseta listrada branca e azul marinho", brand:"Celani", cat:"camisetas", price:79.90, compare:89.90, img:"img/listrada-marinho.jpg", light:true, pre:true},
    {id:"basica-branca", name:"Camiseta básica branca", brand:"LS Seleção", cat:"camisetas", price:89.90, img:"img/basica-branca.jpg", light:true},
    {id:"basica-preta", name:"Camiseta básica preta", brand:"LS Seleção", cat:"camisetas", price:89.90, img:"img/basica-preta.jpg", light:true},

    // Tênis Court Borough. Vêm por lote de 6 pares (lote:true).
    {id:"cb-branco", name:"Court Borough branco", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-branco.jpg", light:true, lote:true},
    {id:"cb-preto", name:"Court Borough preto", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-preto.jpg", light:true, lote:true},
    {id:"cb-cinza-marinho", name:"Court Borough cinza e marinho", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-cinza-marinho.jpg", light:true, lote:true},
    {id:"cb-azul-bebe", name:"Court Borough branco e azul bebê", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-azul-bebe.jpg", light:true, lote:true},
    {id:"cb-marinho", name:"Court Borough branco e marinho", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-marinho.jpg", light:true, lote:true},
    {id:"cb-royal", name:"Court Borough azul royal", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-royal.jpg", light:true, lote:true},
    {id:"cb-vermelho", name:"Court Borough vermelho", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-vermelho.jpg", light:true, lote:true},

    // Tênis Grand Court. Categoria própria dentro da aba de tênis, fora do lote de 6.
    {id:"gc-preto", name:"Grand Court preto", brand:"Grand Court", cat:"tenis", price:199.90, card:206.90, img:"img/tenis-gc-preto.jpg", light:true},
    {id:"gc-royal", name:"Grand Court branco e azul royal", brand:"Grand Court", cat:"tenis", price:199.90, card:206.90, img:"img/tenis-gc-royal.jpg", light:true},
    {id:"gc-marinho", name:"Grand Court azul marinho", brand:"Grand Court", cat:"tenis", price:199.90, card:206.90, img:"img/tenis-gc-marinho.jpg", light:true},
    {id:"gc-azul-bebe", name:"Grand Court azul bebê", brand:"Grand Court", cat:"tenis", price:199.90, card:206.90, img:"img/tenis-gc-azul-bebe.jpg", light:true},
    {id:"gc-branco-listras", name:"Grand Court branco com listras azuis", brand:"Grand Court", cat:"tenis", price:199.90, card:206.90, img:"img/tenis-gc-branco-listras.jpg", light:true},

    // Tênis Court Vision. Categoria própria dentro da aba de tênis, fora do lote de 6.
    // Preço normal: R$229,90 no Pix / R$237,90 no cartão em 3x. Na Black, trocar price e pôr compare:229.90.
    {id:"cv-branco", name:"Court Vision branco", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-branco.jpg", light:true},
    {id:"cv-preto", name:"Court Vision preto", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-preto.jpg", light:true},
    {id:"cv-branco-preto", name:"Court Vision branco com preto", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-branco-preto.jpg", light:true},
    {id:"cv-marinho", name:"Court Vision azul marinho", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-marinho.jpg", light:true},
    {id:"cv-vinho", name:"Court Vision vinho", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-vinho.jpg", light:true},
    {id:"cv-creme", name:"Court Vision creme com marinho", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-creme.jpg", light:true},
    {id:"cv-azul-bebe", name:"Court Vision azul bebê", brand:"Court Vision", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cv-azul-bebe.jpg", light:true},

    // Tênis Court Vision Mid (cano alto, com velcro). Categoria própria dentro da aba de tênis.
    // Preço normal: R$229,90 no Pix / R$237,90 no cartão em 3x.
    // Na Black: trocar price pra 199.90, card pra 206.90 e pôr compare:229.90 em todos os 5.
    {id:"cvm-preto-vermelho", name:"Court Vision Mid preto e vermelho", brand:"Court Vision Mid", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cvm-preto-vermelho.jpg", light:true},
    {id:"cvm-branco-royal", name:"Court Vision Mid branco e azul royal", brand:"Court Vision Mid", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cvm-branco-royal.jpg", light:true},
    {id:"cvm-branco-preto-vermelho", name:"Court Vision Mid branco, preto e vermelho", brand:"Court Vision Mid", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cvm-branco-preto-vermelho.jpg", light:true},
    {id:"cvm-royal-preto", name:"Court Vision Mid azul royal e preto", brand:"Court Vision Mid", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cvm-royal-preto.jpg", light:true},
    {id:"cvm-cinza", name:"Court Vision Mid cinza e grafite", brand:"Court Vision Mid", cat:"tenis", price:229.90, card:237.90, img:"img/tenis-cvm-cinza.jpg", light:true},

    // Tênis Balmain (linha importada premium). Categoria própria dentro da aba de tênis.
    // Custo: R$150 no atacado de 6 pares + R$9,17 de frete rateado = R$159,17 por par.
    // Preço normal: R$249,90 no Pix (lucro R$90,73) / R$257,90 no cartão em 3x.
    // Na Black: trocar price pra 219.90, card pra 226.90 e pôr compare:249.90 nos 5 (lucro cai pra R$60,73).
    {id:"balmain-preto-branco", name:"Balmain preto com solado branco", brand:"Balmain", cat:"tenis", price:249.90, card:257.90, img:"img/tenis-balmain-preto-branco.jpg", light:true},
    {id:"balmain-dourado", name:"Balmain preto com B dourado", brand:"Balmain", cat:"tenis", price:249.90, card:257.90, img:"img/tenis-balmain-dourado.jpg", light:true},
    {id:"balmain-verde", name:"Balmain preto com verde limão", brand:"Balmain", cat:"tenis", price:249.90, card:257.90, img:"img/tenis-balmain-verde.jpg", light:true},
    {id:"balmain-nobuck", name:"Balmain nobuck preto monograma", brand:"Balmain", cat:"tenis", price:249.90, card:257.90, img:"img/tenis-balmain-nobuck.jpg", light:true},
    {id:"balmain-all-black", name:"Balmain couro todo preto", brand:"Balmain", cat:"tenis", price:249.90, card:257.90, img:"img/tenis-balmain-all-black.jpg", light:true}
];

// Quantos pares já estão reservados no lote atual (0 a 6). O painel atualiza.
window.LOTE = {reservados: 0, total: 6};
