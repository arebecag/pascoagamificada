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
  clientesParticipantes: 14854,
  cuponsApp: 15977,
  vendasApp: 23068,
  lojasParticipantes: 67,
  cuponsVendasCampanha: 81851,
  participacaoApp: 20,
  clientesTotalBase: 76474,
  clientesNaoParticipantes: 61620,
  clientesCompraramCampanha: 76474,
  clientesComAppInstalado: 14854,
  clientesSemAppInstalado: 61620,
  viewsCampanha: 76474,
  scanSuccess: 6717,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 673,
  gamificacaoEscaneou: 639,
  gamificacaoCompletou: 36,
  overlap: 0,
  produtosCampanha: 19,
  produtosApp: 17
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
  },
  {
    data: '19/03',
    Dentro: { qtd: 1879, tickets: 1317, clientes: 1221 },
    Fora:   { qtd: 7967, tickets: 5736, clientes: 5362 },
    Total:  { qtd: 9846, tickets: 7053, clientes: 6583 }
  },
  {
    data: '20/03',
    Dentro: { qtd: 2363, tickets: 1591, clientes: 1477 },
    Fora:   { qtd: 9174, tickets: 6693, clientes: 6253 },
    Total:  { qtd: 11537, tickets: 8284, clientes: 7730 }
  },
  {
    data: '21/03',
    Dentro: { qtd: 5696, tickets: 3961, clientes: 3727 },
    Fora:   { qtd: 8521, tickets: 6501, clientes: 6209 },
    Total:  { qtd: 14217, tickets: 10462, clientes: 9936 }
  },
  {
    data: '22/03',
    Dentro: { qtd: 4322, tickets: 3182, clientes: 2933 },
    Fora:   { qtd: 6307, tickets: 4954, clientes: 4630 },
    Total:  { qtd: 10629, tickets: 8136, clientes: 7563 }
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
  { data: '18/03', qtd: 10663, cupons: 7285, clientes: 6832 },
  { data: '19/03', qtd: 9846, cupons: 7053, clientes: 6583 },
  { data: '20/03', qtd: 11537, cupons: 8284, clientes: 7730 },
  { data: '21/03', qtd: 14217, cupons: 10462, clientes: 9936 },
  { data: '22/03', qtd: 10629, cupons: 8136, clientes: 7563 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 5368, tickets: 3063, clientes: 2934 },
  { loja: '22. Champagnat', qtd: 5032, tickets: 2516, clientes: 2339 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 3916, tickets: 2991, clientes: 2865 },
  { loja: '21. Nilo Pecanha', qtd: 3905, tickets: 2597, clientes: 2478 },
  { loja: '26. Torres', qtd: 3552, tickets: 2000, clientes: 1936 },
  { loja: '52. Mafra Centro Ii', qtd: 2782, tickets: 1582, clientes: 1528 },
  { loja: '82. Condor Cic Jk', qtd: 2726, tickets: 1755, clientes: 1616 },
  { loja: '06. Pinheirinho', qtd: 2647, tickets: 1909, clientes: 1810 },
  { loja: '20. Maringa Av Parana', qtd: 2534, tickets: 1910, clientes: 1760 },
  { loja: '25. Paranagua-Raia', qtd: 2489, tickets: 1755, clientes: 1566 },
  { loja: '27. Novo Mundo', qtd: 2470, tickets: 1883, clientes: 1796 },
  { loja: '23. Araucaria Br', qtd: 2274, tickets: 1609, clientes: 1568 },
  { loja: '24. Santa Candida', qtd: 2272, tickets: 1681, clientes: 1614 },
  { loja: '04. Lapa', qtd: 2257, tickets: 1522, clientes: 1438 },
  { loja: '37. Cajuru', qtd: 2190, tickets: 1724, clientes: 1667 },
  { loja: '50. Santa Quiteria', qtd: 2142, tickets: 1111, clientes: 1043 },
  { loja: '45. Araucaria Costeira', qtd: 2128, tickets: 1696, clientes: 1598 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 2126, tickets: 1520, clientes: 1423 },
  { loja: '08. Paranagua Centro', qtd: 2043, tickets: 932, clientes: 738 },
  { loja: '56. Piraquara', qtd: 2018, tickets: 1452, clientes: 1367 },
  { loja: '49. Boa Vista', qtd: 1982, tickets: 1576, clientes: 1529 },
  { loja: '32. Uvaranas', qtd: 1968, tickets: 1267, clientes: 1196 },
  { loja: '28. Cristo Rei', qtd: 1942, tickets: 1446, clientes: 1344 },
  { loja: '91. Zonta (Franquia)', qtd: 1907, tickets: 1401, clientes: 1328 },
  { loja: '83. Condor Merces', qtd: 1899, tickets: 1399, clientes: 1319 },
  { loja: '11. Sao Braz', qtd: 1897, tickets: 1411, clientes: 1350 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 1882, tickets: 1258, clientes: 1179 },
  { loja: '39. Pinhais', qtd: 1806, tickets: 1271, clientes: 1202 },
  { loja: '54. Francisco Derosso', qtd: 1795, tickets: 1291, clientes: 1218 },
  { loja: '66. Barreirinha', qtd: 1793, tickets: 887, clientes: 808 },
  { loja: '57. Joinville - Boa Vista', qtd: 1699, tickets: 1207, clientes: 1068 },
  { loja: '43. Almirante Tamandare', qtd: 1697, tickets: 1231, clientes: 1176 },
  { loja: '58. Pilarzinho', qtd: 1656, tickets: 1273, clientes: 1224 },
  { loja: '07. Marechal', qtd: 1642, tickets: 1054, clientes: 978 },
  { loja: '30. Fazenda Rio Grande', qtd: 1627, tickets: 1193, clientes: 1112 },
  { loja: '71. Araucaria Capela Velha', qtd: 1617, tickets: 1276, clientes: 1163 },
  { loja: '05. Wenceslau Braz', qtd: 1555, tickets: 847, clientes: 786 },
  { loja: '47. Pinhais Av.Irai', qtd: 1542, tickets: 1005, clientes: 947 },
  { loja: '36. Castro', qtd: 1501, tickets: 918, clientes: 819 },
  { loja: '51. Joinville America', qtd: 1345, tickets: 836, clientes: 764 },
  { loja: '38. Colombo', qtd: 1340, tickets: 998, clientes: 957 },
  { loja: '13. Sitio Cercado', qtd: 1331, tickets: 1080, clientes: 1008 },
  { loja: '41. Campo Mourao', qtd: 1327, tickets: 957, clientes: 916 },
  { loja: '10. Campo Comprido', qtd: 1325, tickets: 1085, clientes: 995 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 1285, tickets: 982, clientes: 924 },
  { loja: '63. Maringa Av Kakogawa', qtd: 1257, tickets: 745, clientes: 706 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 1244, tickets: 826, clientes: 767 },
  { loja: '55. Jaragua Do Sul', qtd: 1240, tickets: 688, clientes: 618 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 1229, tickets: 826, clientes: 755 },
  { loja: '40. Maringa Av Colombo', qtd: 1212, tickets: 982, clientes: 868 },
  { loja: '46. Campo Largo Sao Jose', qtd: 1141, tickets: 874, clientes: 827 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 1128, tickets: 804, clientes: 759 },
  { loja: '31. Campo Largo', qtd: 1115, tickets: 788, clientes: 728 },
  { loja: '03. Santa Felicidade', qtd: 1111, tickets: 868, clientes: 798 },
  { loja: '48. Joinville Itaum', qtd: 1100, tickets: 799, clientes: 686 },
  { loja: '15. Apucarana', qtd: 1064, tickets: 682, clientes: 634 },
  { loja: '61. Jardim Das Americas', qtd: 1056, tickets: 715, clientes: 680 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 1049, tickets: 743, clientes: 647 },
  { loja: '64. Gralha Azul', qtd: 998, tickets: 815, clientes: 755 },
  { loja: '65. Rio Negro', qtd: 966, tickets: 596, clientes: 564 },
  { loja: '09. Londrina', qtd: 880, tickets: 690, clientes: 594 },
  { loja: '53. Joao Bettega', qtd: 835, tickets: 567, clientes: 533 },
  { loja: '34. Brasilia', qtd: 801, tickets: 636, clientes: 585 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 755, tickets: 551, clientes: 465 },
  { loja: '17. Ahu', qtd: 685, tickets: 487, clientes: 463 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 639, tickets: 484, clientes: 378 },
  { loja: '78. Rio Negrinho', qtd: 638, tickets: 328, clientes: 270 }
];

const SALES_DENTRO_MAP = {
  1991454: { itens: 73, tickets: 42, clientes: 42 },
  2077535: { itens: 6532, tickets: 3955, clientes: 3656 },
  2077543: { itens: 6272, tickets: 4383, clientes: 4088 },
  2077568: { itens: 500, tickets: 391, clientes: 360 },
  2077576: { itens: 583, tickets: 440, clientes: 417 },
  2077584: { itens: 5145, tickets: 3881, clientes: 3602 },
  2077592: { itens: 636, tickets: 426, clientes: 408 },
  2128411: { itens: 2094, tickets: 1498, clientes: 1394 },
  2207371: { itens: 40, tickets: 35, clientes: 24 },
  2207389: { itens: 43, tickets: 33, clientes: 30 },
  2207397: { itens: 36, tickets: 32, clientes: 28 },
  2207405: { itens: 110, tickets: 81, clientes: 72 },
  2207413: { itens: 93, tickets: 64, clientes: 59 },
  2207421: { itens: 21, tickets: 15, clientes: 15 },
  2207439: { itens: 38, tickets: 29, clientes: 26 },
  2236370: { itens: 277, tickets: 223, clientes: 213 },
  2236388: { itens: 575, tickets: 449, clientes: 420 }
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
  const totalShareBase = RANKING_LOJAS_DENTRO.reduce((sum, row) => sum + row.clientes, 0);
  let allocatedClientesCampanha = 0;
  let allocatedClientesComApp = 0;
  let allocatedCuponsVendas = 0;

  return RANKING_LOJAS_DENTRO.map((row, index, arr) => {
    const share = totalShareBase > 0 ? row.clientes / totalShareBase : 0;

    let clientesCampanha;
    let clientesComApp;
    let cuponsVendas;

    if (index < arr.length - 1) {
      clientesCampanha = Math.round(TOTAIS.clientesCompraramCampanha * share);
      clientesComApp = Math.round(TOTAIS.clientesComAppInstalado * share);
      cuponsVendas = Math.round(TOTAIS.cuponsVendasCampanha * share);

      allocatedClientesCampanha += clientesCampanha;
      allocatedClientesComApp += clientesComApp;
      allocatedCuponsVendas += cuponsVendas;
    } else {
      clientesCampanha = TOTAIS.clientesCompraramCampanha - allocatedClientesCampanha;
      clientesComApp = TOTAIS.clientesComAppInstalado - allocatedClientesComApp;
      cuponsVendas = TOTAIS.cuponsVendasCampanha - allocatedCuponsVendas;
    }

    const clientesSemApp = Math.max(0, clientesCampanha - clientesComApp);

    return {
      ...row,
      vendasApp: row.qtd,
      vendasTotais: cuponsVendas,
      clientesSemApp,
      clientesCampanha,
      clientesComApp,
      cuponsVendas,
      shareClientesApp: share
    };
  });
})();

const PODIO_TOP3_LOJAS = LOJAS_OPERACIONAL.slice(0, 3);
