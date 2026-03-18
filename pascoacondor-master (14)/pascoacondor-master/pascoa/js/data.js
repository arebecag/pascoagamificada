// ============================================================
//  DASHBOARD PÁSCOA — DATA.JS
//  Atualizado com base na planilha PascoaCamp.xlsx
// ============================================================

const PALETA = {
  lilac: '#e8a020',
  lilacBg: 'rgba(232,160,32,0.20)',
  pink: '#d35400',
  pinkBg: 'rgba(211,84,0,0.15)',
  orange: '#e67e22',
  orangeBg: 'rgba(230,126,34,0.15)',
  caramel: '#e8a020',
  caramelBg: 'rgba(232,160,32,0.18)',
  mint: '#27ae60',
  mintBg: 'rgba(39,174,96,0.15)',
  choco: '#7b3f1a',
  chocoBg: 'rgba(123,63,26,0.12)',
  cream: '#f5ead8',
};

const TOTAIS = {
  clientesDentro: 4162,
  cuponsDentro: 4489,
  itensDentro: 6616,
  lojasDentro: 67,
  participacao: 11.0483,
  clientesTotalBase: 37671,
  clientesForaBase: 33509,
  overlap: 0,
  produtosCampanha: 19,
  produtosDentro: 13
};

const EVOLUCAO_DIARIA_CAMPANHA = [
  {
    data: '13/03',
    Dentro: { qtd: 758, tickets: 318, clientes: 295 },
    Fora:   { qtd: 14610, tickets: 8298, clientes: 7684 },
    Total:  { qtd: 15368, tickets: 8616, clientes: 7979 }
  },
  {
    data: '14/03',
    Dentro: { qtd: 1789, tickets: 1228, clientes: 1155 },
    Fora:   { qtd: 19367, tickets: 11289, clientes: 10590 },
    Total:  { qtd: 21156, tickets: 12517, clientes: 11745 }
  },
  {
    data: '15/03',
    Dentro: { qtd: 1347, tickets: 996, clientes: 911 },
    Fora:   { qtd: 9739, tickets: 6988, clientes: 6497 },
    Total:  { qtd: 11086, tickets: 7984, clientes: 7408 }
  },
  {
    data: '16/03',
    Dentro: { qtd: 1046, tickets: 744, clientes: 687 },
    Fora:   { qtd: 5650, tickets: 4350, clientes: 4018 },
    Total:  { qtd: 6696, tickets: 5094, clientes: 4705 }
  },
  {
    data: '17/03',
    Dentro: { qtd: 1676, tickets: 1203, clientes: 1114 },
    Fora:   { qtd: 7500, tickets: 5217, clientes: 4879 },
    Total:  { qtd: 9176, tickets: 6420, clientes: 5993 }
  }
];

const EVOLUCAO_DIARIA_GERAL = [
  { data: '01/03', qtd: 15499, cupons: 11942, clientes: 11256 },
  { data: '02/03', qtd: 12916, cupons: 9714, clientes: 9193 },
  { data: '03/03', qtd: 14409, cupons: 10690, clientes: 10142 },
  { data: '04/03', qtd: 15064, cupons: 10335, clientes: 9809 },
  { data: '05/03', qtd: 12155, cupons: 8364, clientes: 7908 },
  { data: '06/03', qtd: 14079, cupons: 9774, clientes: 9139 },
  { data: '07/03', qtd: 23400, cupons: 16614, clientes: 15846 },
  { data: '08/03', qtd: 16062, cupons: 11993, clientes: 11061 },
  { data: '09/03', qtd: 7377, cupons: 5470, clientes: 5017 },
  { data: '10/03', qtd: 10531, cupons: 6954, clientes: 6502 },
  { data: '11/03', qtd: 12318, cupons: 7552, clientes: 7023 },
  { data: '12/03', qtd: 12075, cupons: 7295, clientes: 6764 },
  { data: '13/03', qtd: 15368, cupons: 8616, clientes: 7979 },
  { data: '14/03', qtd: 21156, cupons: 12517, clientes: 11745 },
  { data: '15/03', qtd: 11086, cupons: 7984, clientes: 7408 },
  { data: '16/03', qtd: 6696, cupons: 5094, clientes: 4705 },
  { data: '17/03', qtd: 9176, cupons: 6420, clientes: 5993 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '33. São José - Rua Joinville', qtd: 360, tickets: 256, clientes: 243 },
  { loja: '21. Nilo Peçanha', qtd: 328, tickets: 197, clientes: 180 },
  { loja: '06. Pinheirinho', qtd: 316, tickets: 161, clientes: 152 },
  { loja: '63. Maringá Av Kakogawa', qtd: 304, tickets: 50, clientes: 47 },
  { loja: '82. Condor CIC JK', qtd: 294, tickets: 182, clientes: 164 },
  { loja: '29. Água Verde', qtd: 290, tickets: 203, clientes: 194 },
  { loja: '20. Maringá Av Paraná', qtd: 239, tickets: 186, clientes: 171 },
  { loja: '14. São José dos Pinhais', qtd: 228, tickets: 142, clientes: 132 },
  { loja: '04. Lapa', qtd: 209, tickets: 140, clientes: 131 },
  { loja: '37. Cajuru', qtd: 198, tickets: 149, clientes: 144 },
  { loja: '22. Champagnat', qtd: 184, tickets: 125, clientes: 116 },
  { loja: '43. Almirante Tamandaré', qtd: 181, tickets: 120, clientes: 111 },
  { loja: '91. Zonta (Franquia)', qtd: 177, tickets: 106, clientes: 100 },
  { loja: '49. Boa Vista', qtd: 170, tickets: 135, clientes: 126 },
  { loja: '27. Novo Mundo', qtd: 150, tickets: 105, clientes: 101 },
  { loja: '11. São Braz', qtd: 147, tickets: 106, clientes: 101 },
  { loja: '40. Maringá Av Colombo', qtd: 132, tickets: 109, clientes: 96 },
  { loja: '56. Piraquara', qtd: 130, tickets: 80, clientes: 69 },
  { loja: '58. Pilarzinho', qtd: 130, tickets: 97, clientes: 93 },
  { loja: '54. Francisco Derosso', qtd: 122, tickets: 95, clientes: 91 },
  { loja: '24. Santa Cândida', qtd: 122, tickets: 101, clientes: 94 },
  { loja: '07. Marechal', qtd: 118, tickets: 83, clientes: 79 },
  { loja: '09. Londrina', qtd: 113, tickets: 89, clientes: 71 },
  { loja: '28. Cristo Rei', qtd: 112, tickets: 78, clientes: 70 },
  { loja: '83. Condor Mercês', qtd: 109, tickets: 89, clientes: 83 },
  { loja: '25. Paranaguá-Raia', qtd: 106, tickets: 83, clientes: 75 },
  { loja: '34. Brasília', qtd: 103, tickets: 85, clientes: 78 },
  { loja: '50. Santa Quitéria', qtd: 97, tickets: 75, clientes: 68 },
  { loja: '05. Wenceslau Braz', qtd: 94, tickets: 62, clientes: 58 },
  { loja: '36. Castro', qtd: 88, tickets: 63, clientes: 55 },
  { loja: '03. Santa Felicidade', qtd: 84, tickets: 60, clientes: 55 },
  { loja: '61. Jardim das Américas', qtd: 79, tickets: 61, clientes: 58 },
  { loja: '13. Sítio Cercado', qtd: 79, tickets: 64, clientes: 57 },
  { loja: '38. Colombo', qtd: 78, tickets: 63, clientes: 58 },
  { loja: '17. Ahu', qtd: 65, tickets: 41, clientes: 38 },
  { loja: '66. Barreirinha', qtd: 65, tickets: 53, clientes: 46 },
  { loja: '08. Paranaguá Centro', qtd: 61, tickets: 46, clientes: 39 },
  { loja: '19. Ponta Grossa Nova Rússia', qtd: 59, tickets: 36, clientes: 34 },
  { loja: '60. Maringá Av Dr Luiz Teixeira', qtd: 54, tickets: 48, clientes: 46 },
  { loja: '45. Araucária Costeira', qtd: 52, tickets: 35, clientes: 35 },
  { loja: '26. Torres', qtd: 51, tickets: 34, clientes: 33 },
  { loja: '39. Pinhais', qtd: 49, tickets: 41, clientes: 39 },
  { loja: '71. Araucária Capela Velha', qtd: 48, tickets: 35, clientes: 31 },
  { loja: '23. Araucária BR', qtd: 40, tickets: 24, clientes: 23 },
  { loja: '47. Pinhais Av. Iraí', qtd: 36, tickets: 30, clientes: 30 },
  { loja: '51. Joinville América', qtd: 31, tickets: 20, clientes: 19 },
  { loja: '52. Mafra Centro II', qtd: 28, tickets: 24, clientes: 24 },
  { loja: '53. João Bettega', qtd: 28, tickets: 12, clientes: 11 },
  { loja: '30. Fazenda Rio Grande', qtd: 25, tickets: 11, clientes: 11 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 24, tickets: 20, clientes: 20 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 24, tickets: 19, clientes: 17 },
  { loja: '41. Campo Mourão', qtd: 21, tickets: 17, clientes: 16 },
  { loja: '32. Uvaranas', qtd: 21, tickets: 19, clientes: 18 },
  { loja: '18. Ponta Grossa (Centro)', qtd: 19, tickets: 15, clientes: 11 },
  { loja: '48. Joinville Itaum', qtd: 18, tickets: 12, clientes: 11 },
  { loja: '79. São Bento do Sul Centro', qtd: 17, tickets: 12, clientes: 10 },
  { loja: '31. Campo Largo', qtd: 16, tickets: 13, clientes: 13 },
  { loja: '15. Apucarana', qtd: 15, tickets: 9, clientes: 9 },
  { loja: '57. Joinville - Boa Vista', qtd: 15, tickets: 11, clientes: 9 },
  { loja: '10. Campo Comprido', qtd: 14, tickets: 12, clientes: 11 },
  { loja: '65. Rio Negro', qtd: 12, tickets: 9, clientes: 9 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 8, tickets: 7, clientes: 6 },
  { loja: '55. Jaraguá do Sul', qtd: 7, tickets: 6, clientes: 6 },
  { loja: '78. Rio Negrinho', qtd: 7, tickets: 6, clientes: 5 },
  { loja: '64. Gralha Azul', qtd: 6, tickets: 4, clientes: 4 },
  { loja: '80. São Bento do Sul - Serra', qtd: 5, tickets: 4, clientes: 3 },
  { loja: '46. Campo Largo São José', qtd: 4, tickets: 4, clientes: 4 }
];

const SALES_DENTRO_MAP = {
  1991454: { itens: 12, tickets: 7, clientes: 7 },
  2077535: { itens: 2430, tickets: 1394, clientes: 1282 },
  2077543: { itens: 2304, tickets: 1633, clientes: 1522 },
  2077576: { itens: 1, tickets: 1, clientes: 1 },
  2077584: { itens: 1824, tickets: 1419, clientes: 1315 },
  2128411: { itens: 3, tickets: 2, clientes: 2 },
  2207371: { itens: 1, tickets: 1, clientes: 1 },
  2207389: { itens: 2, tickets: 2, clientes: 2 },
  2207397: { itens: 1, tickets: 1, clientes: 1 },
  2207405: { itens: 4, tickets: 4, clientes: 4 },
  2207413: { itens: 12, tickets: 9, clientes: 9 },
  2207421: { itens: 21, tickets: 15, clientes: 15 },
  2207439: { itens: 1, tickets: 1, clientes: 1 }
};

const PRODUTOS_CAMPANHA_BASE = [
  {
    id: 118311,
    name: 'Amandita Lacta Choc. 200g',
    shortName: 'Amandita 200g',
    priceOriginal: 15.99,
    priceOffer: 14.99,
    discount: 6,
    img: 'https://sspark.genspark.ai/cfimages?u1=kwsBi5DR4re47I5Qd0zjw%2F%2BwypOZ4S9NWy8VYSWaGCocfZ32asUF714TZn9FVtjfmxkaAAzsg2EPVtnJaeFAjITh2iUK7rEpC7qqiKWmDR8RKnh2bq%2FQHjvDJ1mnEQ4%3D&u2=S2dFR3Iz7TRmbqI0&width=2560'
  },
  {
    id: 1991454,
    name: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g',
    shortName: 'Bombom Sortidos 220g',
    priceOriginal: 13.49,
    priceOffer: 10.99,
    discount: 19,
    img: 'https://sspark.genspark.ai/cfimages?u1=prmCEuVNUiJjNc4qxwAI8%2Bv9dT8Brmg4uIbTmhWDF8Zet3joOM2%2Fup0mMAymFFz8xWZDtKrR2ncu6i9pgAfTyQ1B3g%3D%3D&u2=oGX0TPyUQrZpMQdZ&width=2560'
  },
  {
    id: 2077535,
    name: 'Choc. Lacta Ao Leite 80g',
    shortName: 'Ao Leite 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2077543,
    name: 'Choc. Lacta Laka 80g',
    shortName: 'Laka 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'assets/img/laka-branco.svg'
  },
  {
    id: 2077568,
    name: 'Choc. Lacta Diamante Negro/Laka 80g',
    shortName: 'DN/Laka 80g',
    priceOriginal: 6.99,
    priceOffer: 6.89,
    discount: 1,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2077576,
    name: 'Choc. Lacta Diamante Negro 80g',
    shortName: 'Diamante Negro 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2077584,
    name: 'Choc. Lacta Shot 80g',
    shortName: 'Shot 80g',
    priceOriginal: 7.99,
    priceOffer: 6.99,
    discount: 13,
    img: 'assets/img/shot-amarelo.svg'
  },
  {
    id: 2077592,
    name: 'Choc. Lacta Amaro 80g',
    shortName: 'Amaro 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: null
  },
  {
    id: 2128403,
    name: 'Choc. Lacta 80g (var.)',
    shortName: 'Lacta 80g (var.)',
    priceOriginal: 7.99,
    priceOffer: 6.99,
    discount: 13,
    img: null
  },
  {
    id: 2128411,
    name: 'Choc. Lacta Ouro Bco 98g',
    shortName: 'Ouro Branco 98g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=YVuPStAWLZPuCLB3qpNXOHsFRpjHE%2FRmLBhHTBvaB8WdXZa63b6pIzGJZ40n4tlBPh11U0oy2tzMP9jBeJIs69s80k%2Bm5ypO0ySKtxmdJFGN5Npp5Q%3D%3D&u2=xAcjax1r8rzWHIBp&width=2560'
  },
  {
    id: 2207371,
    name: 'Choc. Lacta Diamante Negro/Laka 145g',
    shortName: 'DN/Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=g3gTP5eZl7cDin%2BuYFuKszluChpoeuz9V8MGoxA8XksdfaoVEAcpeCs919ot1vE5RwNk3kvQuUUhnkZQscqUgY7mTdOgrnv1BG%2B8dAysi%2Bft8U11NiE%3D&u2=2LqOTSJczrvpLKcj&width=2560'
  },
  {
    id: 2207389,
    name: 'Choc. Lacta Laka/Oreo 145g',
    shortName: 'Laka Oreo 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=4WdPTLPZh316JW5aIZpGQJNgOsx55l%2FuQ7J7U89Rf8%2Fo71a37I0aR7SS3MQEX3kf4oqT0dWkLRY7pGYj3KZWPSCy4g%3D%3D&u2=VsQs0eIePhKZdmXj&width=2560'
  },
  {
    id: 2207397,
    name: 'Choc. Lacta Diamante Negro 145g',
    shortName: 'Diam. Negro 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2207405,
    name: 'Choc. Lacta Ao Leite 145g',
    shortName: 'Ao Leite 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2207413,
    name: 'Choc. Lacta Shot 145g',
    shortName: 'Shot 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'assets/img/shot-amarelo.svg'
  },
  {
    id: 2207421,
    name: 'Choc. Lacta Laka 145g',
    shortName: 'Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.90,
    discount: 8,
    img: 'assets/img/laka-branco.svg'
  },
  {
    id: 2207439,
    name: 'Choc. Lacta Amaro 145g',
    shortName: 'Amaro 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: null
  },
  {
    id: 2236370,
    name: 'Choc. Lacta Ao Leite Rech. Caramelo 104g',
    shortName: 'Rech. Caramelo 104g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2236388,
    name: 'Choc. Lacta Laka Rech. Caramelo 104g',
    shortName: 'Laka Rech. Caramelo 104g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'assets/img/laka-branco.svg'
  }
];

const PRODUTOS_CAMPANHA = PRODUTOS_CAMPANHA_BASE.map(p => {
  const venda = SALES_DENTRO_MAP[p.id];
  return {
    ...p,
    soldDentro: !!venda,
    itens: venda?.itens ?? 0,
    cupons: venda?.tickets ?? 0,
    clientes: venda?.clientes ?? 0
  };
});

const RANKING_DENTRO = PRODUTOS_CAMPANHA
  .filter(p => p.soldDentro)
  .map(p => ({
    id: p.id,
    nome: p.name,
    shortName: p.shortName,
    itens: p.itens,
    clientes: p.clientes,
    cupons: p.cupons,
    img: p.img
  }))
  .sort((a, b) => b.itens - a.itens);

const PODIO_TOP3 = RANKING_DENTRO.slice(0, 3);
