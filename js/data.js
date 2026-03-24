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
  clientesParticipantes: 17003,
  cuponsApp: 18306,
  vendasApp: 26615,
  lojasParticipantes: 67,
  cuponsVendasCampanha: 87452,
  participacaoApp: 21,
  clientesTotalBase: 81682,
  clientesNaoParticipantes: 64679,
  clientesCompraramCampanha: 81682,
  clientesComAppInstalado: 40447,
  clientesSemAppInstalado: 41235,
  viewsCampanha: 81682,
  scanSuccess: 6717,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 763,
  gamificacaoEscaneou: 726,
  gamificacaoCompletou: 66,
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
  },
  {
    data: '23/03',
    Dentro: { qtd: 3547, tickets: 2329, clientes: 2149 },
    Fora:   { qtd: 4480, tickets: 3272, clientes: 3059 },
    Total:  { qtd: 8027, tickets: 5601, clientes: 5208 }
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
  { data: '22/03', qtd: 10629, cupons: 8136, clientes: 7563 },
  { data: '23/03', qtd: 8027, cupons: 5601, clientes: 5208 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 5589, tickets: 3208, clientes: 3067 },
  { loja: '22. Champagnat', qtd: 5199, tickets: 2622, clientes: 2438 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 4419, tickets: 3193, clientes: 3059 },
  { loja: '21. Nilo Pecanha', qtd: 4161, tickets: 2778, clientes: 2652 },
  { loja: '26. Torres', qtd: 3653, tickets: 2077, clientes: 2011 },
  { loja: '52. Mafra Centro Ii', qtd: 3012, tickets: 1714, clientes: 1657 },
  { loja: '06. Pinheirinho', qtd: 2903, tickets: 2045, clientes: 1939 },
  { loja: '82. Condor Cic Jk', qtd: 2858, tickets: 1841, clientes: 1693 },
  { loja: '25. Paranagua-Raia', qtd: 2709, tickets: 1906, clientes: 1704 },
  { loja: '27. Novo Mundo', qtd: 2659, tickets: 2020, clientes: 1920 },
  { loja: '20. Maringa Av Parana', qtd: 2627, tickets: 1993, clientes: 1834 },
  { loja: '23. Araucaria Br', qtd: 2474, tickets: 1751, clientes: 1700 },
  { loja: '24. Santa Candida', qtd: 2423, tickets: 1801, clientes: 1731 },
  { loja: '04. Lapa', qtd: 2392, tickets: 1609, clientes: 1519 },
  { loja: '37. Cajuru', qtd: 2345, tickets: 1838, clientes: 1773 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 2319, tickets: 1641, clientes: 1531 },
  { loja: '45. Araucaria Costeira', qtd: 2243, tickets: 1800, clientes: 1697 },
  { loja: '50. Santa Quiteria', qtd: 2241, tickets: 1185, clientes: 1116 },
  { loja: '08. Paranagua Centro', qtd: 2148, tickets: 1005, clientes: 794 },
  { loja: '56. Piraquara', qtd: 2134, tickets: 1552, clientes: 1463 },
  { loja: '49. Boa Vista', qtd: 2121, tickets: 1692, clientes: 1635 },
  { loja: '32. Uvaranas', qtd: 2106, tickets: 1355, clientes: 1279 },
  { loja: '28. Cristo Rei', qtd: 2061, tickets: 1541, clientes: 1429 },
  { loja: '83. Condor Merces', qtd: 2055, tickets: 1489, clientes: 1405 },
  { loja: '91. Zonta (Franquia)', qtd: 2055, tickets: 1507, clientes: 1434 },
  { loja: '11. Sao Braz', qtd: 2028, tickets: 1524, clientes: 1459 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 2028, tickets: 1355, clientes: 1262 },
  { loja: '54. Francisco Derosso', qtd: 1963, tickets: 1407, clientes: 1332 },
  { loja: '39. Pinhais', qtd: 1908, tickets: 1344, clientes: 1274 },
  { loja: '66. Barreirinha', qtd: 1833, tickets: 922, clientes: 842 },
  { loja: '30. Fazenda Rio Grande', qtd: 1833, tickets: 1323, clientes: 1234 },
  { loja: '58. Pilarzinho', qtd: 1814, tickets: 1394, clientes: 1339 },
  { loja: '57. Joinville - Boa Vista', qtd: 1803, tickets: 1294, clientes: 1136 },
  { loja: '43. Almirante Tamandare', qtd: 1788, tickets: 1304, clientes: 1247 },
  { loja: '71. Araucaria Capela Velha', qtd: 1765, tickets: 1392, clientes: 1274 },
  { loja: '07. Marechal', qtd: 1738, tickets: 1129, clientes: 1047 },
  { loja: '47. Pinhais Av.Irai', qtd: 1633, tickets: 1079, clientes: 1018 },
  { loja: '05. Wenceslau Braz', qtd: 1621, tickets: 901, clientes: 835 },
  { loja: '36. Castro', qtd: 1589, tickets: 980, clientes: 876 },
  { loja: '13. Sitio Cercado', qtd: 1461, tickets: 1171, clientes: 1095 },
  { loja: '10. Campo Comprido', qtd: 1461, tickets: 1180, clientes: 1084 },
  { loja: '38. Colombo', qtd: 1457, tickets: 1085, clientes: 1040 },
  { loja: '51. Joinville America', qtd: 1435, tickets: 904, clientes: 826 },
  { loja: '41. Campo Mourao', qtd: 1430, tickets: 1032, clientes: 989 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 1399, tickets: 1065, clientes: 1006 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 1307, tickets: 880, clientes: 817 },
  { loja: '55. Jaragua Do Sul', qtd: 1287, tickets: 726, clientes: 652 },
  { loja: '63. Maringa Av Kakogawa', qtd: 1285, tickets: 772, clientes: 729 },
  { loja: '40. Maringa Av Colombo', qtd: 1270, tickets: 1033, clientes: 911 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 1257, tickets: 853, clientes: 780 },
  { loja: '46. Campo Largo Sao Jose', qtd: 1227, tickets: 945, clientes: 892 },
  { loja: '31. Campo Largo', qtd: 1226, tickets: 863, clientes: 797 },
  { loja: '03. Santa Felicidade', qtd: 1219, tickets: 939, clientes: 869 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 1198, tickets: 860, clientes: 815 },
  { loja: '48. Joinville Itaum', qtd: 1184, tickets: 853, clientes: 735 },
  { loja: '15. Apucarana', qtd: 1124, tickets: 734, clientes: 683 },
  { loja: '61. Jardim Das Americas', qtd: 1107, tickets: 751, clientes: 711 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 1103, tickets: 776, clientes: 675 },
  { loja: '65. Rio Negro', qtd: 1059, tickets: 644, clientes: 610 },
  { loja: '64. Gralha Azul', qtd: 1056, tickets: 867, clientes: 804 },
  { loja: '09. Londrina', qtd: 952, tickets: 745, clientes: 636 },
  { loja: '53. Joao Bettega', qtd: 893, tickets: 603, clientes: 568 },
  { loja: '34. Brasilia', qtd: 870, tickets: 684, clientes: 625 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 800, tickets: 581, clientes: 490 },
  { loja: '17. Ahu', qtd: 715, tickets: 512, clientes: 486 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 713, tickets: 540, clientes: 421 },
  { loja: '78. Rio Negrinho', qtd: 656, tickets: 343, clientes: 281 }
];

const SALES_DENTRO_MAP = {
  1991454: { itens: 78, tickets: 46, clientes: 46 },
  2077535: { itens: 7180, tickets: 4320, clientes: 3994 },
  2077543: { itens: 6941, tickets: 4781, clientes: 4465 },
  2077568: { itens: 672, tickets: 523, clientes: 480 },
  2077576: { itens: 778, tickets: 583, clientes: 544 },
  2077584: { itens: 5647, tickets: 4222, clientes: 3915 },
  2077592: { itens: 903, tickets: 536, clientes: 512 },
  2128411: { itens: 2759, tickets: 2006, clientes: 1863 },
  2207371: { itens: 56, tickets: 49, clientes: 35 },
  2207389: { itens: 59, tickets: 48, clientes: 44 },
  2207397: { itens: 54, tickets: 44, clientes: 39 },
  2207405: { itens: 141, tickets: 106, clientes: 94 },
  2207413: { itens: 125, tickets: 90, clientes: 84 },
  2207421: { itens: 21, tickets: 15, clientes: 15 },
  2207439: { itens: 52, tickets: 40, clientes: 36 },
  2236370: { itens: 371, tickets: 301, clientes: 282 },
  2236388: { itens: 778, tickets: 596, clientes: 555 }
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
