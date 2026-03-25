// ============================================================
//  DASHBOARD PÁSCOA — APP.JS
//  Versão TV: leitura executiva de participantes, vendas app e vendas totais
// ============================================================

const hasNativeChart = typeof window !== 'undefined' && typeof window.Chart !== 'undefined';

if (!hasNativeChart) {
  const FakeChart = function FakeChart() {
    return { destroy() {} };
  };
  FakeChart.defaults = { font: {}, color: '#888' };
  globalThis.Chart = FakeChart;
}

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#888';

let chartInstances = {};
let rankMetric = 'itens';
let currentSection = 'visao-geral';
let selectedStore = '';

function fmt(n) {
  if (typeof n !== 'number') return n;
  return n.toLocaleString('pt-BR');
}

function fmtR(n, d = 2) {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  });
}

function fmtPct(n, d = 1) {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: d,
    maximumFractionDigits: d
  }) + '%';
}


function getDonutCenterPlugin(text) {
  return {
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;
      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 2;
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#7b3f1a';
      ctx.font = '700 22px Inter';
      ctx.fillText(text, x, y);
      ctx.restore();
    }
  };
}

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

function hydrateCountersFromDataCount() {
  document.querySelectorAll('.kpi-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    el.textContent = fmt(target);
  });
}

function animateCounters() {
  document.querySelectorAll('.kpi-value[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;

    const duration = 900;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = fmt(current);
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}


function initMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const button = document.getElementById('mobileMenuBtn');
  const overlay = document.getElementById('sidebarOverlay');
  if (!sidebar || !button || !overlay) return;

  const closeMenu = () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
  };

  button.addEventListener('click', () => {
    const open = sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('active', open);
  });

  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 800) closeMenu();
    });
  });
}

function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      const sectionId = item.dataset.section;
      currentSection = sectionId;

      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
      const target = document.getElementById(sectionId);
      if (target) {
        target.classList.add('active');
        renderSection(sectionId);
      }
    });
  });
}

function renderSection(id) {
  try {
    switch (id) {
      case 'visao-geral':
        renderVisaoGeral();
        break;
      case 'visao-operacional':
        renderVisaoOperacional();
        break;
      case 'ranking':
        renderRanking();
        break;
      case 'produtos-campanha':
        renderProdutosCampanha();
        break;
      case 'etapas-gamificacao':
        renderEtapasGamificacao();
        break;
    }
  } finally {
    setTimeout(animateCounters, 100);
  }
}

/**
 * Série completa 01/03 a 24/03
 * - Antes de 13/03: participantes app = 0 e demais clientes = total do dia
 * - 13/03 em diante: participantes app e não participantes conforme planilha
 */
function getFullCampaignSeries() {
  const campaignMap = Object.fromEntries(
    EVOLUCAO_DIARIA_CAMPANHA.map(d => [d.data, d])
  );

  const labels = EVOLUCAO_DIARIA_GERAL.map(d => d.data);

  return {
    labels,

    appVendas: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.qtd ?? 0),
    appCupons: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.tickets ?? 0),
    clientesApp: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.clientes ?? 0),

    clientesNaoParticipantes: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.clientes ?? d.clientes),

    totalVendas: EVOLUCAO_DIARIA_GERAL.map(d => d.qtd),
    totalTickets: EVOLUCAO_DIARIA_GERAL.map(d => d.cupons),
    totalClientes: EVOLUCAO_DIARIA_GERAL.map(d => d.clientes)
  };
}

// ═══════════════════════════════════════════════════════════════
//  VISÃO GERAL
// ═══════════════════════════════════════════════════════════════
function renderVisaoGeral() {
  buildPodio();
  buildStorePodio();
  buildChartEvolucaoGeral();
  buildDonutCampanha();
}

function buildPodio() {
  const grid = document.getElementById('podioGrid');
  if (!grid) return;

  const medals = ['🥇', '🥈', '🥉'];
  const bars = ['podio-bar-1', 'podio-bar-2', 'podio-bar-3'];

  grid.innerHTML = PODIO_TOP3.map((item, i) => `
    <div class="podio-item podio-${i + 1}">
      <div class="podio-img-wrap ${i === 0 ? 'podio-img-crown' : ''}">
        ${i === 0 ? '<div class="crown-icon">👑</div>' : ''}
        ${
          item.img
            ? `<img src="${item.img}" alt="${item.nome}" class="podio-product-img" onerror="this.style.display='none'" />`
            : `<div class="product-img-placeholder">🍫</div>`
        }
      </div>
      <div class="podio-medal">${medals[i]}</div>
      <div class="podio-bar ${bars[i]}"></div>
      <div class="podio-info">
        <strong>${item.nome}</strong>
        <span class="podio-qty">${fmt(item.itens)} vendas app</span>
        <span class="podio-clients">${fmt(item.clientes)} compraram pelo app</span>
      </div>
    </div>
  `).join('');
}


function buildStorePodio() {
  const grid = document.getElementById('storePodiumGrid');
  if (!grid) return;

  const medals = ['🥇', '🥈', '🥉'];
  const bars = ['podio-bar-1', 'podio-bar-2', 'podio-bar-3'];

  grid.innerHTML = PODIO_TOP3_LOJAS.map((item, i) => `
    <div class="podio-item podio-${i + 1} store-podium-item">
      <div class="podio-img-wrap store-badge-wrap ${i === 0 ? 'podio-img-crown' : ''}">
        ${i === 0 ? '<div class="crown-icon">👑</div>' : ''}
        <div class="store-podium-badge">${i + 1}º</div>
      </div>
      <div class="podio-medal">${medals[i]}</div>
      <div class="podio-bar ${bars[i]}"></div>
      <div class="podio-info">
        <strong>${item.loja}</strong>
        <span class="podio-qty">${fmt(item.cuponsVendas)} cupons vendas</span>
        <span class="podio-clients">${fmt(item.clientesCampanha)} clientes da campanha</span>
      </div>
    </div>
  `).join('');
}

function buildChartEvolucaoGeral() {
  destroyChart('chartEvolucaoDiaria');
  const ctx = document.getElementById('chartEvolucaoDiaria');
  if (!ctx) return;

  const series = getFullCampaignSeries();

  chartInstances.chartEvolucaoDiaria = new Chart(ctx, {
    type: 'line',
    data: {
      labels: series.labels,
      datasets: [
        {
          label: 'Compraram',
          data: series.totalClientes,
          borderColor: PALETA.lilac,
          backgroundColor: PALETA.lilacBg,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: PALETA.lilac,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          fill: false
        },
        {
          label: 'Compraram pelo app',
          data: series.clientesApp,
          borderColor: PALETA.pink,
          backgroundColor: PALETA.pinkBg,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: PALETA.pink,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          fill: false
        },
        {
          label: 'Vendas totais',
          data: series.totalVendas,
          borderColor: PALETA.choco,
          backgroundColor: PALETA.chocoBg,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: PALETA.choco,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          borderDash: [6, 4],
          fill: false
        },
        {
          label: 'Cupons na campanha',
          data: series.appCupons,
          borderColor: PALETA.orange,
          backgroundColor: PALETA.orangeBg,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: PALETA.orange,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          borderDash: [6, 4],
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 14,
            font: { size: 11, weight: '600' }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          titleColor: '#fff',
          bodyColor: '#f5ead8',
          padding: 10,
          cornerRadius: 10
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
          ticks: { font: { size: 11, weight: '600' } }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
          beginAtZero: true,
          grace: '8%',
          ticks: { callback: value => fmt(value) }
        }
      }
    }
  });
}

function buildDonutCampanha() {
  destroyChart('chartDonutClientes');
  const ctx = document.getElementById('chartDonutClientes');
  if (!ctx) return;

  chartInstances.chartDonutClientes = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Abriu o jogo', 'Abriu scan', 'Escaneou'],
      datasets: [{
        label: 'Clientes',
        data: [
          TOTAIS.gamificacaoAbriuJogo,
          TOTAIS.gamificacaoAbriuScan,
          TOTAIS.gamificacaoEscaneou
        ],
        backgroundColor: [PALETA.lilacBg, PALETA.caramelBg, PALETA.orangeBg],
        borderColor: [PALETA.lilac, PALETA.caramel, PALETA.orange],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          callbacks: {
            label: ctx => ` ${fmt(ctx.parsed.x)} clientes`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { callback: value => fmt(value) }
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 11, weight: '600' } }
        }
      }
    }
  });
}

// ═══════════════════════════════════════════════════════════════
//  VISÃO OPERACIONAL
// ═══════════════════════════════════════════════════════════════

function getOperationalPeriodTotals() {
  return EVOLUCAO_DIARIA_CAMPANHA.reduce((acc, day) => ({
    vendasApp: acc.vendasApp + day.Dentro.qtd,
    appCupons: acc.appCupons + day.Dentro.tickets,
    clientesParticipantes: acc.clientesParticipantes + day.Dentro.clientes,
    vendasTotais: acc.vendasTotais + day.Total.qtd,
    cuponsTotais: acc.cuponsTotais + day.Total.tickets,
    clientesTotais: acc.clientesTotais + day.Total.clientes,
    clientesSemApp: acc.clientesSemApp + day.Fora.clientes
  }), {
    vendasApp: 0,
    appCupons: 0,
    clientesParticipantes: 0,
    vendasTotais: 0,
    cuponsTotais: 0,
    clientesTotais: 0,
    clientesSemApp: 0
  });
}

function renderVisaoOperacional() {
  buildOperationalTotalizers();
  buildChartOperacional();
  buildDonutParticipacao();
  initStoreFilter();
  buildDailyCampaignTable();
  buildStoresTable();
}


function buildOperationalTotalizers() {
  const container = document.getElementById('operationalTotalizers');
  if (!container) return;

  const cards = [
    {
      cls: 'kpi-purple',
      icon: 'fa-users',
      label: 'Clientes compraram produtos da campanha',
      value: fmt(TOTAIS.clientesCompraramCampanha),
      sub: 'total de clientes da campanha'
    },
    {
      cls: 'kpi-green',
      icon: 'fa-mobile-screen-button',
      label: 'Clientes com app',
      value: fmt(TOTAIS.clientesComAppInstalado),
      sub: 'base com app identificado'
    },
    {
      cls: 'kpi-orange',
      icon: 'fa-receipt',
      label: 'CUPONS VENDAS',
      value: fmt(TOTAIS.cuponsVendasCampanha),
      sub: 'volume total de vendas da campanha'
    },
    {
      cls: 'kpi-pink',
      icon: 'fa-store',
      label: 'Total de lojas ativas na campanha',
      value: fmt(TOTAIS.lojasParticipantes),
      sub: 'lojas ativas no período'
    }
  ];

  container.innerHTML = cards.map(card => `
    <div class="kpi-card ${card.cls}">
      <div class="kpi-icon"><i class="fas ${card.icon}"></i></div>
      <div class="kpi-info">
        <span class="kpi-label">${card.label}</span>
        <span class="kpi-value">${card.value}</span>
        <span class="kpi-sub">${card.sub}</span>
      </div>
    </div>
  `).join('');
}

function buildChartOperacional() {
  destroyChart('chartOpDiario');
  const ctx = document.getElementById('chartOpDiario');
  if (!ctx) return;

  const series = getFullCampaignSeries();

  chartInstances.chartOpDiario = new Chart(ctx, {
    type: 'line',
    data: {
      labels: series.labels,
      datasets: [
        {
          label: 'Compraram',
          data: series.totalClientes,
          borderColor: PALETA.lilac,
          backgroundColor: PALETA.lilacBg,
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: PALETA.lilac,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          fill: false
        },
        {
          label: 'Compraram pelo app',
          data: series.clientesApp,
          borderColor: PALETA.pink,
          backgroundColor: PALETA.pinkBg,
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: PALETA.pink,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          fill: false
        },
        {
          label: 'Vendas totais',
          data: series.totalVendas,
          borderColor: PALETA.choco,
          backgroundColor: PALETA.chocoBg,
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: PALETA.choco,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          borderDash: [6, 4],
          fill: false
        },
        {
          label: 'Cupons na campanha',
          data: series.appCupons,
          borderColor: PALETA.orange,
          backgroundColor: PALETA.orangeBg,
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: PALETA.orange,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          borderDash: [6, 4],
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 14,
            font: { size: 12 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          titleColor: '#fff',
          bodyColor: '#f5ead8',
          padding: 10,
          cornerRadius: 10
        }
      },
      scales: {
        x: { grid: { color: 'rgba(0,0,0,0.04)' } },
        y: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: value => fmt(value) } }
      }
    }
  });
}

function buildDonutParticipacao() {
  destroyChart('chartOpParticipacao');
  const ctx = document.getElementById('chartOpParticipacao');
  const legend = document.getElementById('operacionalLegend');
  if (!ctx || !legend) return;

  const periodTotals = getOperationalPeriodTotals();
  const value = selectedStore
    ? LOJAS_OPERACIONAL.filter(row => row.loja === selectedStore).reduce((sum, row) => sum + row.clientesComApp, 0)
    : TOTAIS.clientesComAppInstalado;
  const remainder = selectedStore
    ? LOJAS_OPERACIONAL.filter(row => row.loja === selectedStore).reduce((sum, row) => sum + row.clientesSemApp, 0)
    : (TOTAIS.clientesCompraramCampanha - TOTAIS.clientesComAppInstalado);
  const total = value + remainder;
  const pct = total > 0 ? (value / total) * 100 : 0;

  chartInstances.chartOpParticipacao = new Chart(ctx, {
    type: 'doughnut',
    plugins: [getDonutCenterPlugin(fmtPct(pct, 1))],
    data: {
      labels: ['Compraram pelo app', 'Clientes sem app'],
      datasets: [{
        data: [value, remainder],
        backgroundColor: [PALETA.cream, PALETA.lilac],
        borderColor: ['#fff', '#fff'],
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          callbacks: {
            label: ctx => ` ${fmt(ctx.parsed)} clientes (${fmtPct((ctx.parsed / total) * 100, 1)})`
          }
        }
      }
    }
  });

  legend.innerHTML = `
    <span class="dot dot-purple"></span><span>Compraram pelo app <strong>${fmt(value)}</strong></span>
    <span class="dot dot-cream"></span><span>Clientes sem app <strong>${fmt(remainder)}</strong></span>
  `;
}

function buildDailyCampaignTable() {
  const tbody = document.getElementById('dailyCampaignTableBody');
  if (!tbody) return;

  const totalTickets = EVOLUCAO_DIARIA_CAMPANHA.reduce((sum, d) => sum + d.Total.tickets, 0);
  const totalClientes = EVOLUCAO_DIARIA_CAMPANHA.reduce((sum, d) => sum + d.Total.clientes, 0);

  tbody.innerHTML = EVOLUCAO_DIARIA_CAMPANHA.map(d => `
    <tr>
      <td><strong>${d.data}</strong></td>
      <td>${fmt(d.Total.tickets)}</td>
      <td>${fmt(d.Total.clientes)}</td>
    </tr>
  `).join('') + `
    <tr class="table-total-row">
      <td><strong>Total</strong></td>
      <td><strong>${fmt(totalTickets)}</strong></td>
      <td><strong>${fmt(totalClientes)}</strong></td>
    </tr>
  `;
}

function initStoreFilter() {
  const select = document.getElementById('storeFilter');
  const clearButton = document.getElementById('clearStoreFilter');
  if (!select) return;

  const options = ['<option value="">Todas as lojas</option>']
    .concat(LOJAS_OPERACIONAL.map(row => `<option value="${row.loja}">${row.loja}</option>`));

  select.innerHTML = options.join('');
  select.value = selectedStore;
  select.onchange = () => {
    selectedStore = select.value;
    buildOperationalTotalizers();
    buildDonutParticipacao();
    buildStoresTable();
  };

  if (clearButton) {
    clearButton.onclick = () => {
      selectedStore = '';
      select.value = '';
      buildOperationalTotalizers();
      buildDonutParticipacao();
      buildStoresTable();
    };
  }
}

function buildStoresTable() {
  const tbody = document.getElementById('storesTableBody');
  if (!tbody) return;

  const filteredRows = selectedStore
    ? LOJAS_OPERACIONAL.filter(row => row.loja === selectedStore)
    : LOJAS_OPERACIONAL;

  const totals = filteredRows.reduce((acc, row) => ({
    clientesCampanha: acc.clientesCampanha + row.clientesCampanha,
    clientesComApp: acc.clientesComApp + row.clientesComApp,
    cuponsVendas: acc.cuponsVendas + row.cuponsVendas
  }), {
    clientesCampanha: 0,
    clientesComApp: 0,
    cuponsVendas: 0
  });

  tbody.innerHTML = filteredRows.map((row, i) => `
    <tr>
      <td class="rank-num">${i + 1}</td>
      <td><strong>${row.loja}</strong></td>
      <td>${fmt(row.clientesCampanha)}</td>
      <td>${fmt(row.clientesComApp)}</td>
      <td>${fmt(row.cuponsVendas)}</td>
    </tr>
  `).join('') + `
    <tr class="table-total-row">
      <td colspan="2"><strong>${selectedStore ? 'Total da filial' : 'Total consolidado'}</strong></td>
      <td><strong>${fmt(totals.clientesCampanha)}</strong></td>
      <td><strong>${fmt(totals.clientesComApp)}</strong></td>
      <td><strong>${fmt(totals.cuponsVendas)}</strong></td>
    </tr>
  `;
}

// ═══════════════════════════════════════════════════════════════
//  RANKING
// ═══════════════════════════════════════════════════════════════
function renderRanking() {
  safeCall('gráfico de ranking', () => buildRankingChart(rankMetric));
  safeCall('tabela de ranking', () => buildRankingTable(rankMetric));

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      rankMetric = btn.dataset.metric;
      safeCall('gráfico de ranking', () => buildRankingChart(rankMetric));
      safeCall('tabela de ranking', () => buildRankingTable(rankMetric));
    };
  });
}

function buildRankingChart(metric) {
  destroyChart('chartRankingBar');
  const ctx = document.getElementById('chartRankingBar');
  if (!ctx) return;

  const sorted = [...RANKING_DENTRO].sort((a, b) => b[metric] - a[metric]);
  const labels = sorted.map(d => d.shortName);
  const values = sorted.map(d => d[metric]);

  const colors = [
    PALETA.lilac, PALETA.pink, PALETA.orange, PALETA.caramel,
    PALETA.orange, PALETA.choco,
    'rgba(232,160,32,0.6)', 'rgba(211,84,0,0.6)', 'rgba(230,126,34,0.6)',
    'rgba(156,90,26,0.35)', 'rgba(123,63,26,0.5)', 'rgba(232,160,32,0.4)',
    'rgba(211,84,0,0.4)'
  ];

  chartInstances.chartRankingBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: metric === 'itens' ? 'Vendas app' : 'Compraram pelo app',
        data: values,
        backgroundColor: colors.slice(0, values.length),
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          callbacks: { label: ctx => ` ${fmt(ctx.parsed.x)}` }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { callback: value => fmt(value) }
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 12 } }
        }
      }
    }
  });
}

function buildRankingTable(metric) {
  const tbody = document.getElementById('rankTableBody');
  if (!tbody) return;

  const sorted = [...RANKING_DENTRO].sort((a, b) => b[metric] - a[metric]);
  const totalItens = RANKING_DENTRO.reduce((s, d) => s + d.itens, 0);
  const medals = ['🥇', '🥈', '🥉'];

  tbody.innerHTML = sorted.map((row, i) => {
    const pct = totalItens > 0 ? (row.itens / totalItens) * 100 : 0;

    return `
      <tr>
        <td class="rank-num">${medals[i] || (i + 1)}</td>
        <td><strong>${row.nome}</strong><br><small style="color:#bbb">ID: ${row.id}</small></td>
        <td>${fmt(row.itens)}</td>
        <td>${fmt(row.clientes)}</td>
        <td>${fmt(row.cupons)}</td>
        <td>
          <div class="share-bar-wrap">
            <div class="share-bar-bg">
              <div class="share-bar-fill" style="width:${Math.min(pct * 3.5, 100)}%"></div>
            </div>
            <span class="share-pct">${fmtPct(pct, 1)}</span>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
//  PRODUTOS CAMPANHA
// ═══════════════════════════════════════════════════════════════
function renderProdutosCampanha() {
  safeCall('grid de produtos', () => buildProductsGrid(PRODUTOS_CAMPANHA));
  safeCall('tabela de produtos', () => buildProdTable(PRODUTOS_CAMPANHA));

  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.oninput = () => {
      const q = searchInput.value.toLowerCase().trim();
      const filtered = PRODUTOS_CAMPANHA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        String(p.id).includes(q)
      );

      safeCall('grid de produtos filtrado', () => buildProductsGrid(filtered));
      safeCall('tabela de produtos filtrada', () => buildProdTable(filtered));
    };
  }
}

function buildProductsGrid(data) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = data.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        ${
          p.img
            ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=&quot;product-img-placeholder&quot;>🍫</div>'" />`
            : `<div class="product-img-placeholder">🍫</div>`
        }
      </div>

      <span class="pc-id">ID: ${p.id}</span>
      <span class="pc-name">${p.name}</span>

      <div class="pc-prices">
        <span class="pc-original">R$ ${fmtR(p.priceOriginal)}</span>
        <span class="pc-offer">R$ ${fmtR(p.priceOffer)}</span>
        <span class="pc-discount">-${p.discount}%</span>
      </div>

      <span class="pc-status ${p.soldDentro ? 'active' : 'inactive'}">
        ${p.soldDentro ? `✓ ${fmt(p.itens)} vendas app` : 'Sem vendas app'}
      </span>
    </div>
  `).join('');
}

function buildProdTable(data) {
  const tbody = document.getElementById('prodTableBody');
  if (!tbody) return;

  tbody.innerHTML = data.map(p => `
    <tr>
      <td><code style="font-size:0.78rem;color:var(--choco-light)">${p.id}</code></td>
      <td><strong>${p.name}</strong></td>
      <td>R$ ${fmtR(p.priceOriginal)}</td>
      <td style="color:var(--orange);font-weight:700">R$ ${fmtR(p.priceOffer)}</td>
      <td>
        <span style="background:var(--pink-light);color:var(--pink);padding:2px 8px;border-radius:10px;font-weight:700;font-size:0.78rem">
          -${p.discount}%
        </span>
      </td>
      <td>
        <span class="${p.soldDentro ? 'badge-within' : 'badge-outside'}">
          ${p.soldDentro ? `✓ ${fmt(p.itens)} vendas app` : 'Sem vendas app'}
        </span>
      </td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  ETAPAS GAMIFICAÇÃO
// ═══════════════════════════════════════════════════════════════
function renderEtapasGamificacao() {
  safeCall('gráfico de etapas da gamificação', buildEtapasGamificacaoLine);
  safeCall('donut de sucesso da etapa', buildEtapasGamificacaoFunnel);
  safeCall('tabela de etapas da gamificação', buildEtapasGamificacaoDayTable);
  safeCall('ranking de produtos da gamificação', buildGamificacaoProdutoRankingTable);
  safeCall('resultado da gamificação por loja', buildGamificacaoLojaTable);
  safeCall('insights da gamificação', buildEtapasGamificacaoInsights);
}

function buildEtapasGamificacaoLine() {
  destroyChart('chartGamificacaoDiario');
  const ctx = document.getElementById('chartGamificacaoDiario');
  if (!ctx) return;

  chartInstances.chartCRMDiario = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Abriu o jogo', 'Abriu scan', 'Escaneou'],
      datasets: [{
        label: 'Clientes',
        data: [
          TOTAIS.gamificacaoAbriuJogo,
          TOTAIS.gamificacaoAbriuScan,
          TOTAIS.gamificacaoEscaneou
        ],
        backgroundColor: [PALETA.lilacBg, PALETA.caramelBg, PALETA.orangeBg],
        borderColor: [PALETA.lilac, PALETA.caramel, PALETA.orange],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          callbacks: { label: ctx => ` ${fmt(ctx.parsed.y)} clientes` }
        }
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
          beginAtZero: true,
          ticks: { callback: value => fmt(value) }
        }
      }
    }
  });
}

function buildEtapasGamificacaoFunnel() {
  destroyChart('chartGamificacaoFunil');
  const ctx = document.getElementById('chartGamificacaoFunil');
  if (!ctx) return;

  const value = TOTAIS.gamificacaoEscaneou;
  const remainder = TOTAIS.gamificacaoAbriuScan - TOTAIS.gamificacaoEscaneou;
  const total = TOTAIS.gamificacaoAbriuScan;
  const pct = total > 0 ? (value / total) * 100 : 0;

  chartInstances.chartCRMFunil = new Chart(ctx, {
    type: 'doughnut',
    plugins: [getDonutCenterPlugin(fmtPct(pct, 1))],
    data: {
      labels: ['Escaneou', 'Não escaneou'],
      datasets: [{
        data: [value, remainder],
        backgroundColor: [PALETA.cream, PALETA.lilac],
        borderColor: ['#fff', '#fff'],
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(61,26,0,0.9)',
          callbacks: {
            label: ctx => ` ${fmt(ctx.parsed)} clientes (${fmtPct((ctx.parsed / total) * 100, 1)})`
          }
        }
      }
    }
  });
}

function buildEtapasGamificacaoDayTable() {
  const tbody = document.getElementById('gamificacaoDayTableBody');
  if (!tbody) return;

  const rows = [
    {
      etapa: 'Abriu scan',
      clientes: TOTAIS.gamificacaoAbriuScan,
      pctEtapa: 100,
      pctBase: 100
    },
    {
      etapa: 'Escaneou',
      clientes: TOTAIS.gamificacaoEscaneou,
      pctEtapa: (TOTAIS.gamificacaoEscaneou / TOTAIS.gamificacaoAbriuScan) * 100,
      pctBase: (TOTAIS.gamificacaoEscaneou / TOTAIS.gamificacaoAbriuScan) * 100
    },
    {
      etapa: 'CPFs que compraram',
      clientes: TOTAIS.gamificacaoCompletou,
      pctEtapa: (TOTAIS.gamificacaoCompletou / TOTAIS.gamificacaoEscaneou) * 100,
      pctBase: (TOTAIS.gamificacaoCompletou / TOTAIS.gamificacaoAbriuScan) * 100
    },
  ];

  tbody.innerHTML = rows.map(row => `
    <tr>
      <td><strong>${row.etapa}</strong></td>
      <td>${fmt(row.clientes)}</td>
      <td>${fmtPct(row.pctEtapa, 1)}</td>
      <td>${fmtPct(row.pctBase, 1)}</td>
    </tr>
  `).join('');
}

function buildEtapasGamificacaoInsights() {

  const pctAbriuScan = (TOTAIS.gamificacaoAbriuScan / TOTAIS.gamificacaoAbriuJogo) * 100;
  const pctEscaneou = (TOTAIS.gamificacaoEscaneou / TOTAIS.gamificacaoAbriuScan) * 100;
  const pctCompraram = (TOTAIS.gamificacaoCompletou / TOTAIS.gamificacaoEscaneou) * 100;

  const insights = [
    {
      icon: 'fas fa-mobile-screen-button',
      type: 'info',
      title: 'Volume de abertura de scan',
      text: `${fmt(TOTAIS.gamificacaoAbriuScan)} clientes chegaram até a tela de scan no CRM (${fmtPct(pctAbriuScan, 2)} de quem abriu o jogo).`
    },
    {
      icon: 'fas fa-qrcode',
      type: 'good',
      title: 'Scan success muito alto',
      text: `${fmtPct(pctEscaneou, 2)} de quem abriu scan conseguiu escanear.`
    },
    {
      icon: 'fas fa-cart-shopping',
      type: 'warn',
      title: 'Conversão em compra após scan',
      text: `${fmtPct(pctCompraram, 2)} de quem escaneou avançou até CPFs que compraram.`
    },
  ];

  container.innerHTML = insights.map(card => `
    <div class="insight-card ${card.type}">
      <div class="insight-icon"><i class="${card.icon}"></i></div>
      <div>
        <h4>${card.title}</h4>
        <p>${card.text}</p>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNav();
  renderVisaoGeral();
  animateCounters();
});
