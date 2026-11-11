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
    {id:"cb-vermelho", name:"Court Borough vermelho", brand:"Court Borough", cat:"tenis", price:159.90, card:164.90, img:"img/tenis-cb-vermelho.jpg", light:true, lote:true}
];

// Quantos pares já estão reservados no lote atual (0 a 6). O painel atualiza.
window.LOTE = {reservados: 0, total: 6};
