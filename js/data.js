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
  mint: '#9c5a1a',
  mintBg: 'rgba(156,90,26,0.14)',
  choco: '#7b3f1a',
  chocoBg: 'rgba(123,63,26,0.12)',
  cream: '#f5ead8',
};

const TOTAIS = {
  clientesParticipantes: 5496,
  cuponsApp: 5926,
  vendasApp: 8808,
  lojasParticipantes: 67,
  cuponsVendasCampanha: 74145,
  participacaoApp: 12,
  clientesTotalBase: 45800,
  clientesNaoParticipantes: 40304,
  clientesCompraramCampanha: 44662,
  clientesComAppInstalado: 34097,
  clientesSemAppInstalado: 10565,
  viewsCampanha: 44662,
  scanSuccess: 5496,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 329,
  gamificacaoEscaneou: 313,
  gamificacaoCompletou: 18,
  overlap: 0,
  produtosCampanha: 19,
  produtosApp: 13
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
  },
  {
    data: '18/03',
    Dentro: { qtd: 2192, tickets: 1437, clientes: 1334 },
    Fora:   { qtd: 8471, tickets: 5848, clientes: 5498 },
    Total:  { qtd: 10663, tickets: 7285, clientes: 6832 }
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
  { data: '17/03', qtd: 9176, cupons: 6420, clientes: 5993 },
  { data: '18/03', qtd: 10663, cupons: 7285, clientes: 6832 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '33. Sao Jose-Rua Joinville', qtd: 465, tickets: 331, clientes: 315 },
  { loja: '21. Nilo Pecanha', qtd: 430, tickets: 255, clientes: 232 },
  { loja: '29. Agua Verde', qtd: 370, tickets: 247, clientes: 235 },
  { loja: '82. Condor Cic Jk', qtd: 351, tickets: 209, clientes: 189 },
  { loja: '06. Pinheirinho', qtd: 345, tickets: 179, clientes: 170 },
  { loja: '63. Maringa Av Kakogawa', qtd: 325, tickets: 65, clientes: 62 },
  { loja: '20. Maringa Av Parana', qtd: 282, tickets: 220, clientes: 202 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 272, tickets: 176, clientes: 165 },
  { loja: '22. Champagnat', qtd: 271, tickets: 171, clientes: 159 },
  { loja: '04. Lapa', qtd: 234, tickets: 163, clientes: 152 },
  { loja: '37. Cajuru', qtd: 220, tickets: 168, clientes: 163 },
  { loja: '91. Zonta (Franquia)', qtd: 205, tickets: 127, clientes: 116 },
  { loja: '11. Sao Braz', qtd: 201, tickets: 137, clientes: 129 },
  { loja: '49. Boa Vista', qtd: 201, tickets: 158, clientes: 149 },
  { loja: '43. Almirante Tamandare', qtd: 200, tickets: 136, clientes: 126 },
  { loja: '56. Piraquara', qtd: 192, tickets: 107, clientes: 95 },
  { loja: '27. Novo Mundo', qtd: 190, tickets: 133, clientes: 127 },
  { loja: '58. Pilarzinho', qtd: 179, tickets: 127, clientes: 121 },
  { loja: '23. Araucaria Br', qtd: 173, tickets: 79, clientes: 77 },
  { loja: '54. Francisco Derosso', qtd: 170, tickets: 120, clientes: 114 },
  { loja: '40. Maringa Av Colombo', qtd: 161, tickets: 129, clientes: 116 },
  { loja: '36. Castro', qtd: 153, tickets: 83, clientes: 71 },
  { loja: '09. Londrina', qtd: 152, tickets: 117, clientes: 97 },
  { loja: '83. Condor Merces', qtd: 143, tickets: 112, clientes: 102 },
  { loja: '24. Santa Candida', qtd: 143, tickets: 117, clientes: 109 },
  { loja: '07. Marechal', qtd: 142, tickets: 105, clientes: 101 },
  { loja: '34. Brasilia', qtd: 142, tickets: 116, clientes: 108 },
  { loja: '25. Paranagua-Raia', qtd: 131, tickets: 105, clientes: 97 },
  { loja: '28. Cristo Rei', qtd: 124, tickets: 89, clientes: 79 },
  { loja: '50. Santa Quiteria', qtd: 114, tickets: 91, clientes: 84 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 113, tickets: 66, clientes: 62 },
  { loja: '05. Wenceslau Braz', qtd: 111, tickets: 78, clientes: 74 },
  { loja: '13. Sitio Cercado', qtd: 109, tickets: 89, clientes: 80 },
  { loja: '03. Santa Felicidade', qtd: 101, tickets: 73, clientes: 67 },
  { loja: '45. Araucaria Costeira', qtd: 97, tickets: 68, clientes: 66 },
  { loja: '38. Colombo', qtd: 95, tickets: 74, clientes: 69 },
  { loja: '61. Jardim Das Americas', qtd: 95, tickets: 75, clientes: 72 },
  { loja: '52. Mafra Centro Ii', qtd: 91, tickets: 54, clientes: 52 },
  { loja: '26. Torres', qtd: 90, tickets: 69, clientes: 67 },
  { loja: '71. Araucaria Capela Velha', qtd: 88, tickets: 70, clientes: 62 },
  { loja: '39. Pinhais', qtd: 83, tickets: 62, clientes: 59 },
  { loja: '08. Paranagua Centro', qtd: 80, tickets: 60, clientes: 52 },
  { loja: '66. Barreirinha', qtd: 73, tickets: 60, clientes: 53 },
  { loja: '17. Ahu', qtd: 71, tickets: 46, clientes: 43 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 64, tickets: 58, clientes: 55 },
  { loja: '47. Pinhais Av.Irai', qtd: 59, tickets: 50, clientes: 49 },
  { loja: '51. Joinvile America', qtd: 52, tickets: 36, clientes: 32 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 52, tickets: 26, clientes: 22 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 50, tickets: 36, clientes: 33 },
  { loja: '32. Uvaranas', qtd: 49, tickets: 40, clientes: 39 },
  { loja: '31. Campo Largo', qtd: 49, tickets: 34, clientes: 28 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 49, tickets: 33, clientes: 32 },
  { loja: '57. Joinville - Boa Vista', qtd: 47, tickets: 31, clientes: 26 },
  { loja: '30. Fazenda Rio Grande', qtd: 44, tickets: 29, clientes: 27 },
  { loja: '10. Campo Comprido', qtd: 42, tickets: 39, clientes: 35 },
  { loja: '41. Campo Mourao', qtd: 42, tickets: 32, clientes: 29 },
  { loja: '53. Joao Bettega', qtd: 39, tickets: 20, clientes: 18 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 37, tickets: 31, clientes: 24 },
  { loja: '15. Apucarana', qtd: 30, tickets: 16, clientes: 16 },
  { loja: '48. Joinville Itaum', qtd: 27, tickets: 18, clientes: 17 },
  { loja: '65. Rio Negro', qtd: 18, tickets: 12, clientes: 12 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 17, tickets: 13, clientes: 10 },
  { loja: '64. Gralha Azul', qtd: 14, tickets: 12, clientes: 10 },
  { loja: '46. Campo Largo Sao Jose', qtd: 13, tickets: 12, clientes: 12 },
  { loja: '78. Rio Negrinho', qtd: 13, tickets: 11, clientes: 10 },
  { loja: '55. Jaragua Do Sul', qtd: 12, tickets: 11, clientes: 11 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 11, tickets: 10, clientes: 9 }
];

const SALES_DENTRO_MAP = {
  1991454: { itens: 20, tickets: 11, clientes: 11 },
  2077535: { itens: 3150, tickets: 1849, clientes: 1698 },
  2077543: { itens: 3125, tickets: 2156, clientes: 2010 },
  2077576: { itens: 1, tickets: 1, clientes: 1 },
  2077584: { itens: 2456, tickets: 1864, clientes: 1731 },
  2128411: { itens: 3, tickets: 2, clientes: 2 },
  2207371: { itens: 3, tickets: 3, clientes: 3 },
  2207389: { itens: 4, tickets: 4, clientes: 4 },
  2207397: { itens: 2, tickets: 2, clientes: 2 },
  2207405: { itens: 7, tickets: 7, clientes: 7 },
  2207413: { itens: 14, tickets: 10, clientes: 10 },
  2207421: { itens: 21, tickets: 15, clientes: 15 },
  2207439: { itens: 2, tickets: 2, clientes: 2 }
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


const PARTICIPATION_RATE = TOTAIS.clientesParticipantes / TOTAIS.clientesTotalBase;

const LOJAS_OPERACIONAL = (() => {
  const totalNaoParticipantes = TOTAIS.clientesNaoParticipantes;
  const totalClientesApp = RANKING_LOJAS_DENTRO.reduce((sum, row) => sum + row.clientes, 0);

  let allocated = 0;

  return RANKING_LOJAS_DENTRO.map((row, index, arr) => {
    const estimatedTotalClientes = Math.round(row.clientes / PARTICIPATION_RATE);
    let naoParticipantes = Math.max(0, estimatedTotalClientes - row.clientes);

    if (index < arr.length - 1) {
      allocated += naoParticipantes;
    } else {
      naoParticipantes = Math.max(0, totalNaoParticipantes - allocated);
    }

    const vendasTotais = row.qtd + naoParticipantes;

    return {
      ...row,
      vendasApp: row.qtd,
      vendasTotais,
      clientesSemApp: naoParticipantes,
      shareClientesApp: totalClientesApp > 0 ? row.clientes / totalClientesApp : 0
    };
  });
})();

const PODIO_TOP3_LOJAS = LOJAS_OPERACIONAL.slice(0, 3);
