// ============================================================
//  DASHBOARD PÁSCOA — APP.JS
//  Versão TV: Dentro e Fora no mesmo gráfico, sem botões
// ============================================================

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#888';

let chartInstances = {};
let rankMetric = 'itens';
let currentSection = 'visao-geral';

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

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
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
    case 'operacional-crm':
      renderCRM();
      break;
  }

  setTimeout(animateCounters, 100);
}

/**
 * Série completa 01/03 a 17/03
 * - Antes de 13/03: Dentro = 0, Fora = Total do dia
 * - 13/03 em diante: Dentro e Fora conforme planilha
 */
function getFullCampaignSeries() {
  const campaignMap = Object.fromEntries(
    EVOLUCAO_DIARIA_CAMPANHA.map(d => [d.data, d])
  );

  const labels = EVOLUCAO_DIARIA_GERAL.map(d => d.data);

  return {
    labels,

    dentroQtd: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.qtd ?? 0),
    dentroTickets: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.tickets ?? 0),
    dentroClientes: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Dentro.clientes ?? 0),

    foraQtd: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.qtd ?? d.qtd),
    foraTickets: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.tickets ?? d.cupons),
    foraClientes: EVOLUCAO_DIARIA_GERAL.map(d => campaignMap[d.data]?.Fora.clientes ?? d.clientes),

    totalQtd: EVOLUCAO_DIARIA_GERAL.map(d => d.qtd),
    totalTickets: EVOLUCAO_DIARIA_GERAL.map(d => d.cupons),
    totalClientes: EVOLUCAO_DIARIA_GERAL.map(d => d.clientes)
  };
}

// ═══════════════════════════════════════════════════════════════
//  VISÃO GERAL
// ═══════════════════════════════════════════════════════════════
function renderVisaoGeral() {
  buildPodio();
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
        <span class="podio-qty">${fmt(item.itens)} itens</span>
        <span class="podio-clients">${fmt(item.clientes)} clientes</span>
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
          label: 'Clientes — Dentro',
          data: series.dentroClientes,
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
          label: 'Clientes — Fora',
          data: series.foraClientes,
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
          label: 'Qtd — Dentro',
          data: series.dentroQtd,
          borderColor: PALETA.mint,
          backgroundColor: PALETA.mintBg,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: PALETA.mint,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          borderDash: [6, 4],
          fill: false
        },
        {
          label: 'Qtd — Fora',
          data: series.foraQtd,
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
    type: 'doughnut',
    data: {
      labels: [
        `Dentro (${fmt(TOTAIS.clientesDentro)})`,
        `Fora (${fmt(TOTAIS.clientesForaBase)})`
      ],
      datasets: [{
        data: [TOTAIS.clientesDentro, TOTAIS.clientesForaBase],
        backgroundColor: [PALETA.lilac, '#f5ead8'],
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
            label: ctx => {
              const total = TOTAIS.clientesDentro + TOTAIS.clientesForaBase;
              const pct = (ctx.parsed / total) * 100;
              return ` ${fmt(ctx.parsed)} clientes (${fmtPct(pct, 1)})`;
            }
          }
        }
      }
    }
  });
}

// ═══════════════════════════════════════════════════════════════
//  VISÃO OPERACIONAL
// ═══════════════════════════════════════════════════════════════
function renderVisaoOperacional() {
  buildChartOperacional();
  buildDonutParticipacao();
  buildDailyCampaignTable();
  buildStoresTable();
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
          label: 'Clientes — Dentro',
          data: series.dentroClientes,
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
          label: 'Clientes — Fora',
          data: series.foraClientes,
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
          label: 'Qtd — Dentro',
          data: series.dentroQtd,
          borderColor: PALETA.mint,
          backgroundColor: PALETA.mintBg,
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: PALETA.mint,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          borderDash: [6, 4],
          fill: false
        },
        {
          label: 'Qtd — Fora',
          data: series.foraQtd,
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

  const value = TOTAIS.clientesDentro;
  const remainder = TOTAIS.clientesForaBase;
  const pct = (value / TOTAIS.clientesTotalBase) * 100;

  chartInstances.chartOpParticipacao = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Dentro', 'Fora'],
      datasets: [{
        data: [value, remainder],
        backgroundColor: [PALETA.lilac, '#f5ead8'],
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
            label: ctx => ` ${fmt(ctx.parsed)} clientes`
          }
        }
      }
    }
  });

  legend.innerHTML = `
    <span class="dot dot-purple"></span><span>Dentro <strong>${fmtPct(pct, 1)}</strong></span>
    <span class="dot dot-cream"></span><span>Fora <strong>${fmtPct(100 - pct, 1)}</strong></span>
  `;
}

function buildDailyCampaignTable() {
  const tbody = document.getElementById('dailyCampaignTableBody');
  if (!tbody) return;

  tbody.innerHTML = EVOLUCAO_DIARIA_CAMPANHA.map(d => `
    <tr>
      <td><strong>${d.data}</strong></td>
      <td>${fmt(d.Dentro.qtd)}</td>
      <td>${fmt(d.Dentro.tickets)}</td>
      <td>${fmt(d.Dentro.clientes)}</td>
      <td>${fmt(d.Fora.qtd)}</td>
      <td>${fmt(d.Fora.tickets)}</td>
      <td>${fmt(d.Fora.clientes)}</td>
      <td><strong>${fmt(d.Total.qtd)}</strong></td>
      <td><strong>${fmt(d.Total.tickets)}</strong></td>
      <td><strong>${fmt(d.Total.clientes)}</strong></td>
    </tr>
  `).join('');
}

function buildStoresTable() {
  const tbody = document.getElementById('storesTableBody');
  if (!tbody) return;

  tbody.innerHTML = RANKING_LOJAS_DENTRO.map((row, i) => `
    <tr>
      <td class="rank-num">${i + 1}</td>
      <td><strong>${row.loja}</strong></td>
      <td>${fmt(row.qtd)}</td>
      <td>${fmt(row.tickets)}</td>
      <td>${fmt(row.clientes)}</td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  RANKING
// ═══════════════════════════════════════════════════════════════
function renderRanking() {
  buildRankingChart(rankMetric);
  buildRankingTable(rankMetric);

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      rankMetric = btn.dataset.metric;
      buildRankingChart(rankMetric);
      buildRankingTable(rankMetric);
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
    PALETA.mint, PALETA.choco,
    'rgba(232,160,32,0.6)', 'rgba(211,84,0,0.6)', 'rgba(230,126,34,0.6)',
    'rgba(39,174,96,0.5)', 'rgba(123,63,26,0.5)', 'rgba(232,160,32,0.4)',
    'rgba(211,84,0,0.4)'
  ];

  chartInstances.chartRankingBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: metric === 'itens' ? 'Quantidade Vendida' : 'Clientes Únicos',
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
  buildProductsGrid(PRODUTOS_CAMPANHA);
  buildProdTable(PRODUTOS_CAMPANHA);

  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.oninput = () => {
      const q = searchInput.value.toLowerCase().trim();
      const filtered = PRODUTOS_CAMPANHA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        String(p.id).includes(q)
      );

      buildProductsGrid(filtered);
      buildProdTable(filtered);
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
        ${p.soldDentro ? `✓ ${fmt(p.itens)} itens na campanha` : 'Sem venda dentro'}
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
      <td style="color:var(--mint);font-weight:700">R$ ${fmtR(p.priceOffer)}</td>
      <td>
        <span style="background:var(--pink-light);color:var(--pink);padding:2px 8px;border-radius:10px;font-weight:700;font-size:0.78rem">
          -${p.discount}%
        </span>
      </td>
      <td>
        <span class="${p.soldDentro ? 'badge-within' : 'badge-outside'}">
          ${p.soldDentro ? `✓ ${fmt(p.itens)} itens` : 'Sem venda dentro'}
        </span>
      </td>
    </tr>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  OPERACIONAL CRM
// ═══════════════════════════════════════════════════════════════
function renderCRM() {
  buildCRMLine();
  buildCRMFunnel();
  buildCRMDayTable();
  buildCRMInsights();
}

function buildCRMLine() {
  destroyChart('chartCRMDiario');
  const ctx = document.getElementById('chartCRMDiario');
  if (!ctx) return;

  chartInstances.chartCRMDiario = new Chart(ctx, {
    type: 'line',
    data: {
      labels: EVOLUCAO_DIARIA_GERAL.map(d => d.data),
      datasets: [
        {
          label: 'Clientes Totais',
          data: EVOLUCAO_DIARIA_GERAL.map(d => d.clientes),
          borderColor: PALETA.lilac,
          backgroundColor: PALETA.lilacBg,
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: PALETA.lilac,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          fill: true
        },
        {
          label: 'Cupons Totais',
          data: EVOLUCAO_DIARIA_GERAL.map(d => d.cupons),
          borderColor: PALETA.caramel,
          backgroundColor: PALETA.caramelBg,
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: PALETA.caramel,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          cubicInterpolationMode: 'monotone',
          tension: 0.45,
          fill: false,
          borderDash: [6, 4]
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
        x: { grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false } },
        y: {
          grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false },
          ticks: { callback: value => fmt(value) }
        }
      }
    }
  });
}

function buildCRMFunnel() {
  destroyChart('chartCRMFunil');
  const ctx = document.getElementById('chartCRMFunil');
  if (!ctx) return;

  chartInstances.chartCRMFunil = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Base Total', 'Fora', 'Dentro'],
      datasets: [{
        label: 'Clientes',
        data: [
          TOTAIS.clientesTotalBase,
          TOTAIS.clientesForaBase,
          TOTAIS.clientesDentro
        ],
        backgroundColor: [PALETA.caramelBg, '#f5ead8', PALETA.lilac],
        borderColor: [PALETA.caramel, '#d9cdbd', PALETA.lilac],
        borderWidth: 2,
        borderRadius: 8,
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
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: {
            callback: value => value >= 1000 ? `${Math.round(value / 1000)}k` : value
          }
        }
      }
    }
  });
}

function buildCRMDayTable() {
  const tbody = document.getElementById('crmDayTableBody');
  if (!tbody) return;

  const dailyMap = Object.fromEntries(
    EVOLUCAO_DIARIA_CAMPANHA.map(d => [d.data, d])
  );

  tbody.innerHTML = EVOLUCAO_DIARIA_GERAL.map(d => {
    const campanha = dailyMap[d.data];
    const dentro = campanha ? campanha.Dentro.clientes : 0;
    const fora = campanha ? campanha.Fora.clientes : d.clientes;
    const pct = d.clientes > 0 ? (dentro / d.clientes) * 100 : 0;

    return `
      <tr>
        <td><strong>${d.data}</strong></td>
        <td>${fmt(d.clientes)}</td>
        <td style="color:var(--caramel);font-weight:700">${fmt(dentro)}</td>
        <td>${fmt(fora)}</td>
        <td>
          ${
            dentro > 0
              ? `<span style="background:var(--lilac);color:#fff;padding:2px 8px;border-radius:10px;font-size:0.76rem;font-weight:700">${fmtPct(pct, 1)}</span>`
              : '<span style="color:#ccc;font-size:0.76rem">0,0%</span>'
          }
        </td>
      </tr>
    `;
  }).join('');
}

function buildCRMInsights() {
  const container = document.getElementById('crmInsights');
  if (!container) return;

  const growth =
    ((EVOLUCAO_DIARIA_CAMPANHA[1].Dentro.clientes - EVOLUCAO_DIARIA_CAMPANHA[0].Dentro.clientes) /
      EVOLUCAO_DIARIA_CAMPANHA[0].Dentro.clientes) * 100;

  const topStore = RANKING_LOJAS_DENTRO[0];
  const topProduct = RANKING_DENTRO[0];

  const insights = [
    {
      icon: 'fas fa-arrow-trend-up',
      type: 'good',
      title: 'Crescimento forte entre 13/03 e 14/03',
      text: `Clientes Dentro cresceram ${fmtPct(growth, 1)} no comparativo diário.`
    },
    {
      icon: 'fas fa-percent',
      type: 'info',
      title: 'Participação atual da campanha',
      text: `A campanha representa ${fmtPct(TOTAIS.participacao, 2)} da base estimada de clientes.`
    },
    {
      icon: 'fas fa-store',
      type: 'good',
      title: 'Loja líder na campanha',
      text: `${topStore.loja} lidera com ${fmt(topStore.qtd)} itens, ${fmt(topStore.tickets)} tickets e ${fmt(topStore.clientes)} clientes.`
    },
    {
      icon: 'fas fa-egg',
      type: 'warn',
      title: 'Produto com maior tração',
      text: `${topProduct.nome} lidera com ${fmt(topProduct.itens)} itens e ${fmt(topProduct.clientes)} clientes.`
    },
    {
      icon: 'fas fa-box-open',
      type: 'info',
      title: 'Cobertura de itens da campanha',
      text: `${fmt(TOTAIS.produtosDentro)} dos ${fmt(TOTAIS.produtosCampanha)} produtos já tiveram venda com status Dentro.`
    },
    {
      icon: 'fas fa-users-slash',
      type: 'alert',
      title: 'Clientes fora da campanha',
      text: `Ainda existem ${fmt(TOTAIS.clientesForaBase)} clientes fora, o que mostra espaço para ampliar adesão.`
    }
  ];

  container.innerHTML = insights.map(ins => `
    <div class="insight-card">
      <div class="insight-icon ${ins.type}"><i class="${ins.icon}"></i></div>
      <div class="insight-text">
        <strong>${ins.title}</strong>
        <p>${ins.text}</p>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderVisaoGeral();
  animateCounters();
});
