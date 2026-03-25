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
  clientesParticipantes: 19766,
  cuponsApp: 21296,
  vendasApp: 31110,
  lojasParticipantes: 68,
  cuponsVendasCampanha: 94907,
  participacaoApp: 22,
  clientesTotalBase: 88656,
  clientesNaoParticipantes: 68890,
  clientesCompraramCampanha: 88656,
  clientesComAppInstalado: 41584,
  clientesSemAppInstalado: 47072,
  viewsCampanha: 88656,
  scanSuccess: 6717,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 859,
  gamificacaoEscaneou: 820,
  gamificacaoCompletou: 81,
  overlap: 0,
  produtosCampanha: 19,
  produtosApp: 18
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
  },
  {
    data: '24/03',
    Dentro: { qtd: 4495, tickets: 2990, clientes: 2763 },
    Fora:   { qtd: 6169, tickets: 4465, clientes: 4211 },
    Total:  { qtd: 10664, tickets: 7455, clientes: 6974 }
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
  { data: '23/03', qtd: 8027, cupons: 5601, clientes: 5208 },
  { data: '24/03', qtd: 10664, cupons: 7455, clientes: 6974 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 5939, tickets: 3465, clientes: 3316 },
  { loja: '22. Champagnat', qtd: 5560, tickets: 2842, clientes: 2645 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 4829, tickets: 3495, clientes: 3344 },
  { loja: '21. Nilo Pecanha', qtd: 4514, tickets: 3016, clientes: 2880 },
  { loja: '26. Torres', qtd: 3816, tickets: 2193, clientes: 2125 },
  { loja: '52. Mafra Centro Ii', qtd: 3226, tickets: 1850, clientes: 1790 },
  { loja: '25. Paranagua-Raia', qtd: 3214, tickets: 2151, clientes: 1910 },
  { loja: '06. Pinheirinho', qtd: 3183, tickets: 2220, clientes: 2095 },
  { loja: '82. Condor Cic Jk', qtd: 3010, tickets: 1960, clientes: 1802 },
  { loja: '27. Novo Mundo', qtd: 2898, tickets: 2201, clientes: 2093 },
  { loja: '20. Maringa Av Parana', qtd: 2806, tickets: 2121, clientes: 1952 },
  { loja: '23. Araucaria Br', qtd: 2672, tickets: 1901, clientes: 1847 },
  { loja: '24. Santa Candida', qtd: 2627, tickets: 1969, clientes: 1892 },
  { loja: '04. Lapa', qtd: 2622, tickets: 1745, clientes: 1643 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 2565, tickets: 1805, clientes: 1691 },
  { loja: '37. Cajuru', qtd: 2561, tickets: 1999, clientes: 1928 },
  { loja: '45. Araucaria Costeira', qtd: 2482, tickets: 1959, clientes: 1851 },
  { loja: '49. Boa Vista', qtd: 2379, tickets: 1849, clientes: 1790 },
  { loja: '50. Santa Quiteria', qtd: 2379, tickets: 1290, clientes: 1216 },
  { loja: '56. Piraquara', qtd: 2326, tickets: 1685, clientes: 1589 },
  { loja: '08. Paranagua Centro', qtd: 2297, tickets: 1086, clientes: 860 },
  { loja: '28. Cristo Rei', qtd: 2250, tickets: 1674, clientes: 1555 },
  { loja: '32. Uvaranas', qtd: 2248, tickets: 1461, clientes: 1382 },
  { loja: '83. Condor Merces', qtd: 2221, tickets: 1616, clientes: 1525 },
  { loja: '11. Sao Braz', qtd: 2221, tickets: 1652, clientes: 1580 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 2211, tickets: 1494, clientes: 1393 },
  { loja: '91. Zonta (Franquia)', qtd: 2185, tickets: 1594, clientes: 1514 },
  { loja: '54. Francisco Derosso', qtd: 2123, tickets: 1531, clientes: 1452 },
  { loja: '39. Pinhais', qtd: 2046, tickets: 1438, clientes: 1366 },
  { loja: '30. Fazenda Rio Grande', qtd: 2034, tickets: 1454, clientes: 1359 },
  { loja: '58. Pilarzinho', qtd: 1960, tickets: 1513, clientes: 1455 },
  { loja: '43. Almirante Tamandare', qtd: 1946, tickets: 1420, clientes: 1357 },
  { loja: '71. Araucaria Capela Velha', qtd: 1914, tickets: 1514, clientes: 1384 },
  { loja: '57. Joinville - Boa Vista', qtd: 1911, tickets: 1383, clientes: 1219 },
  { loja: '07. Marechal', qtd: 1902, tickets: 1225, clientes: 1138 },
  { loja: '66. Barreirinha', qtd: 1899, tickets: 974, clientes: 892 },
  { loja: '47. Pinhais Av.Irai', qtd: 1759, tickets: 1169, clientes: 1105 },
  { loja: '05. Wenceslau Braz', qtd: 1708, tickets: 967, clientes: 897 },
  { loja: '36. Castro', qtd: 1683, tickets: 1050, clientes: 934 },
  { loja: '41. Campo Mourao', qtd: 1602, tickets: 1145, clientes: 1099 },
  { loja: '10. Campo Comprido', qtd: 1581, tickets: 1275, clientes: 1175 },
  { loja: '13. Sitio Cercado', qtd: 1564, tickets: 1251, clientes: 1166 },
  { loja: '38. Colombo', qtd: 1550, tickets: 1168, clientes: 1120 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 1536, tickets: 1167, clientes: 1103 },
  { loja: '51. Joinville America', qtd: 1487, tickets: 940, clientes: 858 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 1442, tickets: 983, clientes: 915 },
  { loja: '03. Santa Felicidade', qtd: 1387, tickets: 1032, clientes: 959 },
  { loja: '31. Campo Largo', qtd: 1377, tickets: 948, clientes: 875 },
  { loja: '40. Maringa Av Colombo', qtd: 1369, tickets: 1114, clientes: 985 },
  { loja: '63. Maringa Av Kakogawa', qtd: 1350, tickets: 821, clientes: 774 },
  { loja: '48. Joinville Itaum', qtd: 1328, tickets: 930, clientes: 800 },
  { loja: '55. Jaragua Do Sul', qtd: 1328, tickets: 759, clientes: 679 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 1324, tickets: 908, clientes: 830 },
  { loja: '46. Campo Largo Sao Jose', qtd: 1316, tickets: 1013, clientes: 958 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 1283, tickets: 928, clientes: 876 },
  { loja: '15. Apucarana', qtd: 1231, tickets: 820, clientes: 761 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 1176, tickets: 819, clientes: 712 },
  { loja: '61. Jardim Das Americas', qtd: 1157, tickets: 792, clientes: 748 },
  { loja: '64. Gralha Azul', qtd: 1142, tickets: 943, clientes: 873 },
  { loja: '65. Rio Negro', qtd: 1123, tickets: 686, clientes: 647 },
  { loja: '09. Londrina', qtd: 1057, tickets: 829, clientes: 707 },
  { loja: '34. Brasilia', qtd: 962, tickets: 754, clientes: 686 },
  { loja: '53. Joao Bettega', qtd: 957, tickets: 648, clientes: 609 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 853, tickets: 622, clientes: 524 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 785, tickets: 596, clientes: 466 },
  { loja: '17. Ahu', qtd: 755, tickets: 547, clientes: 521 },
  { loja: '78. Rio Negrinho', qtd: 677, tickets: 360, clientes: 295 },
  { loja: '86. Condor S.J.Pinhais Rui Barbosa', qtd: 240, tickets: 178, clientes: 169 }
];



const RESULTADO_GAMIFICACAO_LOJA = [
  { loja: '65 - Rio Negro', total: 61, produtos: [
    { nome: 'Amandita Lacta Choc.200g', qtd: 61 }
  ]},
  { loja: '52 - Mafra - Centro', total: 47, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 10 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 9 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 8 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 4 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 3 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 3 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 3 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 2 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 2 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 }
  ]},
  { loja: '46 - Campo Largo - Sao Jose', total: 32, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 12 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 7 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 5 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 5 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 2 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '6 - Pinheirinho', total: 24, produtos: [
    { nome: 'Choc.Lacta Shot 80g', qtd: 6 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 4 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 4 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 3 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 }
  ]},
  { loja: '32 - Ponta Grossa - Uvaranas', total: 21, produtos: [
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 10 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 3 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 3 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 2 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '21 - Nilo Pecanha', total: 14, produtos: [
    { nome: 'Amandita Lacta Choc.200g', qtd: 4 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 2 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 2 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 2 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 1 }
  ]},
  { loja: '25 - Paranagua - Raia', total: 13, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 4 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '8 - Paranagua - Centro', total: 13, produtos: [
    { nome: 'Choc.Lacta Shot 145g', qtd: 6 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 4 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 }
  ]},
  { loja: '48 - Joinville - Itaum', total: 12, produtos: [
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 3 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 3 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '56 - Piraquara', total: 11, produtos: [
    { nome: 'Choc.Lacta Shot 145g', qtd: 2 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 }
  ]},
  { loja: '42 - Ponta Grossa - Jardim Carvalho', total: 10, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 5 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 3 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '33 - Sao Jose - Rua Joinville', total: 8, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 3 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 2 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 }
  ]},
  { loja: '63 - Maringa - Av Kakogawa', total: 7, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 4 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '30 - Fazenda Rio Grande', total: 6, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '20 - Maringa - Av Parana', total: 6, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 4 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '82 - Condor Cic Jk', total: 6, produtos: [
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 6 }
  ]},
  { loja: '43 - Almirante Tamandare', total: 6, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 4 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 2 }
  ]},
  { loja: '27 - Novo Mundo', total: 6, produtos: [
    { nome: 'Choc.Lacta Laka 145g', qtd: 3 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '29 - Agua Verde', total: 4, produtos: [
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 2 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '24 - Santa Candida', total: 4, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 2 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 }
  ]},
  { loja: '4 - Lapa', total: 4, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 3 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 }
  ]},
  { loja: '67 - Ponta Grossa - Ernesto Vilela', total: 3, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 }
  ]},
  { loja: '83 - Condor Merces', total: 3, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '23 - Araucaria BR', total: 3, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 }
  ]},
  { loja: '37 - Cajuru', total: 2, produtos: [
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '14 - Sao Jose Dos Pinhais', total: 2, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 2 }
  ]},
  { loja: '28 - Cristo Rei', total: 2, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 }
  ]},
  { loja: '7 - Marechal', total: 2, produtos: [
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '17 - Ahu', total: 1, produtos: [
    { nome: 'Amandita Lacta Choc.200g', qtd: 1 }
  ]},
  { loja: '22 - Champagnat', total: 1, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 }
  ]},
  { loja: '66 - Barreirinha', total: 1, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '71 - Araucaria Capela Velha', total: 1, produtos: [
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 }
  ]},
  { loja: '54 - Francisco Derosso', total: 1, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 }
  ]},
  { loja: '60 - Maringa - Av Dr Luiz Teixeira', total: 1, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 }
  ]},
  { loja: '13 - Sitio Cercado', total: 1, produtos: [
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '45 - Araucaria Costeira', total: 1, produtos: [
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 }
  ]},
  { loja: '10 - Campo Comprido', total: 1, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '64 - Gralha Azul', total: 1, produtos: [
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 }
  ]},
  { loja: '11 - Sao Braz', total: 1, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]}
];


const RANKING_PRODUTOS_GAMIFICACAO = [
  { produto: 'Amandita Lacta Choc.200g', qtd: 76 },
  { produto: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 42 },
  { produto: 'Choc.Lacta Ao Leite 145g', qtd: 31 },
  { produto: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 26 },
  { produto: 'Choc.Lacta Laka 80g', qtd: 26 },
  { produto: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 24 },
  { produto: 'Choc.Lacta Shot 145g', qtd: 23 },
  { produto: 'Choc.Lacta Ouro Bco 98g', qtd: 20 },
  { produto: 'Choc.Lacta Laka 145g', qtd: 15 },
  { produto: 'Choc.Lacta Shot 80g', qtd: 13 },
  { produto: 'Choc.Lacta Ao Leite 80g', qtd: 10 },
  { produto: 'Choc.Lacta Laka/Oreo 145g', qtd: 10 },
  { produto: 'Choc.Lacta Diamante Negro 145g', qtd: 10 },
  { produto: 'Choc.Lacta Amaro 145g', qtd: 7 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 6 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 4 }
];


const RANKING_PRODUTOS_GAMIFICACAO = [
  { produto: 'Amandita Lacta Choc.200g', qtd: 76 },
  { produto: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 42 },
  { produto: 'Choc.Lacta Ao Leite 145g', qtd: 31 },
  { produto: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 26 },
  { produto: 'Choc.Lacta Laka 80g', qtd: 26 },
  { produto: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 24 },
  { produto: 'Choc.Lacta Shot 145g', qtd: 23 },
  { produto: 'Choc.Lacta Ouro Bco 98g', qtd: 20 },
  { produto: 'Choc.Lacta Laka 145g', qtd: 15 },
  { produto: 'Choc.Lacta Shot 80g', qtd: 13 },
  { produto: 'Choc.Lacta Ao Leite 80g', qtd: 10 },
  { produto: 'Choc.Lacta Laka/Oreo 145g', qtd: 10 },
  { produto: 'Choc.Lacta Diamante Negro 145g', qtd: 10 },
  { produto: 'Choc.Lacta Amaro 145g', qtd: 7 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 6 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 4 }
];



const RESULTADO_GAMIFICACAO_LOJA = [
  { loja: '65 - Rio Negro', total: 61, produtos: [
    { nome: 'Amandita Lacta Choc.200g', qtd: 61 }
  ]},
  { loja: '52 - Mafra - Centro', total: 47, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 10 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 9 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 8 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 4 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 3 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 3 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 3 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 2 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 2 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 }
  ]},
  { loja: '46 - Campo Largo - Sao Jose', total: 32, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 12 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 7 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 5 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 5 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 2 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '6 - Pinheirinho', total: 24, produtos: [
    { nome: 'Choc.Lacta Shot 80g', qtd: 6 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 4 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 4 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 3 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 }
  ]},
  { loja: '32 - Ponta Grossa - Uvaranas', total: 21, produtos: [
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 10 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 3 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 3 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 2 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '21 - Nilo Pecanha', total: 14, produtos: [
    { nome: 'Amandita Lacta Choc.200g', qtd: 4 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 2 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 2 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 2 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 1 }
  ]},
  { loja: '25 - Paranagua - Raia', total: 13, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 4 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '8 - Paranagua - Centro', total: 13, produtos: [
    { nome: 'Choc.Lacta Shot 145g', qtd: 6 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 4 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 }
  ]},
  { loja: '48 - Joinville - Itaum', total: 12, produtos: [
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 3 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 3 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '56 - Piraquara', total: 11, produtos: [
    { nome: 'Choc.Lacta Shot 145g', qtd: 2 },
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 }
  ]},
  { loja: '42 - Ponta Grossa - Jardim Carvalho', total: 10, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 5 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 3 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '33 - Sao Jose - Rua Joinville', total: 8, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 3 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 2 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 }
  ]},
  { loja: '63 - Maringa - Av Kakogawa', total: 7, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 4 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 2 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '30 - Fazenda Rio Grande', total: 6, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka/Oreo 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '20 - Maringa - Av Parana', total: 6, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 4 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '82 - Condor Cic Jk', total: 6, produtos: [
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 6 }
  ]},
  { loja: '43 - Almirante Tamandare', total: 6, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 4 },
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 2 }
  ]},
  { loja: '27 - Novo Mundo', total: 6, produtos: [
    { nome: 'Choc.Lacta Laka 145g', qtd: 3 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 },
    { nome: 'Choc.Lacta Amaro 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '29 - Agua Verde', total: 4, produtos: [
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 2 },
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '24 - Santa Candida', total: 4, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 2 },
    { nome: 'Amandita Lacta Choc.200g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 80g', qtd: 1 }
  ]},
  { loja: '4 - Lapa', total: 4, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 3 },
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 }
  ]},
  { loja: '67 - Ponta Grossa - Ernesto Vilela', total: 3, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 },
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 },
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 }
  ]},
  { loja: '83 - Condor Merces', total: 3, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '23 - Araucaria BR', total: 3, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 },
    { nome: 'Choc.Lacta Laka 145g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro 145g', qtd: 1 }
  ]},
  { loja: '37 - Cajuru', total: 2, produtos: [
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 },
    { nome: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 1 }
  ]},
  { loja: '14 - Sao Jose Dos Pinhais', total: 2, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 2 }
  ]},
  { loja: '28 - Cristo Rei', total: 2, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 2 }
  ]},
  { loja: '7 - Marechal', total: 2, produtos: [
    { nome: 'Choc.Lacta Shot 145g', qtd: 1 },
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '17 - Ahu', total: 1, produtos: [
    { nome: 'Amandita Lacta Choc.200g', qtd: 1 }
  ]},
  { loja: '22 - Champagnat', total: 1, produtos: [
    { nome: 'Choc.Lacta Laka 80g', qtd: 1 }
  ]},
  { loja: '66 - Barreirinha', total: 1, produtos: [
    { nome: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '71 - Araucaria Capela Velha', total: 1, produtos: [
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 }
  ]},
  { loja: '54 - Francisco Derosso', total: 1, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 }
  ]},
  { loja: '60 - Maringa - Av Dr Luiz Teixeira', total: 1, produtos: [
    { nome: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 1 }
  ]},
  { loja: '13 - Sitio Cercado', total: 1, produtos: [
    { nome: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 1 }
  ]},
  { loja: '45 - Araucaria Costeira', total: 1, produtos: [
    { nome: 'Choc.Lacta Ouro Bco 98g', qtd: 1 }
  ]},
  { loja: '10 - Campo Comprido', total: 1, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]},
  { loja: '64 - Gralha Azul', total: 1, produtos: [
    { nome: 'Choc.Lacta Shot 80g', qtd: 1 }
  ]},
  { loja: '11 - Sao Braz', total: 1, produtos: [
    { nome: 'Choc.Lacta Ao Leite 145g', qtd: 1 }
  ]}
];
const SALES_DENTRO_MAP = {
  118311: { itens: 1, tickets: 1, clientes: 1 },
  1991454: { itens: 80, tickets: 48, clientes: 48 },
  2077535: { itens: 8083, tickets: 4781, clientes: 4427 },
  2077543: { itens: 7607, tickets: 5239, clientes: 4885 },
  2077568: { itens: 872, tickets: 663, clientes: 614 },
  2077576: { itens: 1017, tickets: 769, clientes: 713 },
  2077584: { itens: 6300, tickets: 4677, clientes: 4334 },
  2077592: { itens: 1122, tickets: 664, clientes: 634 },
  2128411: { itens: 3646, tickets: 2641, clientes: 2453 },
  2207371: { itens: 75, tickets: 66, clientes: 50 },
  2207389: { itens: 89, tickets: 65, clientes: 58 },
  2207397: { itens: 87, tickets: 62, clientes: 53 },
  2207405: { itens: 227, tickets: 153, clientes: 137 },
  2207413: { itens: 175, tickets: 120, clientes: 108 },
  2207421: { itens: 67, tickets: 51, clientes: 51 },
  2207439: { itens: 79, tickets: 56, clientes: 48 },
  2236370: { itens: 536, tickets: 431, clientes: 401 },
  2236388: { itens: 1047, tickets: 809, clientes: 751 }
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
