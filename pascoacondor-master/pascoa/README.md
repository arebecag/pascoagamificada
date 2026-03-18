# 🐰 Dashboard Páscoa — Caça aos Coelhos | Condor

Dashboard operacional da campanha de Páscoa do Condor (Caça aos Coelhos), construído com HTML5 semântico, CSS moderno (custom properties, Grid, Flexbox) e JavaScript modular.

---

## ✅ Funcionalidades Implementadas

### Seções do menu
| Seção | Descrição |
|---|---|
| **Visão Geral** | Hero banner, KPIs animados, gráfico de linha (clientes + itens/dia na campanha), donut Dentro x Fora, Pódio Top 3 por quantidade |
| **Visão Operacional** | KPIs operacionais, gráfico de linha diário + donut participação, resumo por dia separado por loja (dias 12, 13 e 14/03) |
| **Ranking Produtos** | Toggle Quantidade/Clientes, gráfico horizontal, tabela com share% e barra visual, melhor produto por dia |
| **Produtos Campanha** | Grid de cards com fotos dos produtos (buscadas externamente), busca em tempo real, tabela de-para (ID → produto → preço → oferta → desconto → status vendas) |
| **Operacional CRM** | KPIs de cobertura (base total, atingidos, gap, overlap), gráfico linha evolução diária geral, funil de clientes, tabela por dia, insights automáticos |

### Estilo / Visual
- **Tema 100% Páscoa**: chocolate escuro, caramelo, lilás, menta, rosa pastel, amarelo-ovo
- **Calda de chocolate SVG** no topo da página (drip bar animado)
- **Artes da campanha** incorporadas localmente (5 PNGs/JPG sem fundo preto):
  - `assets/img/lockup-pascoa.png` → sidebar (mix-blend-mode: screen)
  - `assets/img/badge-maior-pascoa.png` → sidebar + seção de ranking
  - `assets/img/hero-banner.jpg` → banner principal
  - `assets/img/frame-chocolate.png` → overlay no hero
  - `assets/img/bg-cenario.png` → fundo decorativo do sidebar
- **Gráficos de LINHA** em cores Páscoa (Chart.js 4.4)
- **Ticker bar** no rodapé com animação contínua
- **Sidebar** com fundo proporcional (background-image sobre gradiente chocolate→lilás)
- **Pódio Top 3** por quantidade (não venda) com fotos dos produtos

### Dados (baseCampanhaPASCOA.xlsx)
- Período: 01/03 a 14/03/2026
- Campanha iniciada: **12/03/2026**
- 19 produtos mapeados na campanha (Planilha1)
- 9 produtos com vendas "Dentro" registradas
- Resumo por loja disponível para dias 13 e 14/03
- **Venda líquida removida** de todos os gráficos e KPIs

---

## 📂 Estrutura de Arquivos

```
index.html                  ← HTML5 semântico principal
css/
  main.css                  ← CSS moderno (custom properties, Grid, Flexbox, @keyframes)
js/
  data.js                   ← Dados agregados do Excel (produtos, ranking, lojas, KPIs)
  app.js                    ← Navegação, gráficos Chart.js, tabelas dinâmicas
assets/
  img/
    lockup-pascoa.png       ← Arte da campanha (recortado)
    badge-maior-pascoa.png  ← Badge "A Maior Páscoa do Brasil"
    frame-chocolate.png     ← Moldura decorativa
    hero-banner.jpg         ← Key visual completo
    bg-cenario.png          ← Background cenário Páscoa
```

---

## 🌐 URI de Acesso

| Rota | Conteúdo |
|---|---|
| `/` ou `/index.html` | Dashboard principal (5 seções) |

---

## 📊 Dados e Modelos

| Fonte | Uso |
|---|---|
| `baseCampanhaPASCOA` (150.013 linhas) | Base principal de vendas e validação campanha |
| `Planilha1` (19 produtos) | Mapa de produtos em promoção (ID, preço, oferta, desconto) |
| `Planilha5` (diário) | Evolução de cupons por dia |
| `Planilha2` (pivot) | Quantidade vendida por produto/dia |

Métricas principais usadas:
- `NR_CPFCNPJ` → cliente único
- `NR_CUPOM` → cupom único
- `NR_QTD_VENDIDA` → quantidade de itens
- `validacao_campanha.1` → flag `Dentro` / `Fora`
- `CD_FILIAL_ORIG` / `DS_CD_NM_FILIAL` → loja

---

## ⏳ Funcionalidades Não Implementadas (pendentes de dados)

- **Metas**: nenhuma meta foi fornecida — campo "deixando de atingir" não calculável
- **Log de scans**: evento "scan → promo liberada" do app não está na base → funil de scan não implementado
- **Dias anteriores a 12/03 na campanha**: sem dados "Dentro" antes de 12/03 no arquivo
- **Dia 12/03 por loja**: sem dados de vendas mapeados para o dia de inauguração

---

## 🚀 Próximos Passos Sugeridos

1. **Informar as metas** (clientes/dia, itens/dia, % participação) para calcular "quanto está deixando de atingir" no Operacional CRM
2. **Conectar log de scan do app** para montar o funil completo: scan → promo liberada → compra → dentro
3. **Atualizar os dados diariamente** editando os arrays em `js/data.js` (ou substituir por chamada a API REST)
4. **Criar alertas de lojas sem vendas** na seção Operacional (já estruturada para isso)
5. **Publicar via aba Publish** para disponibilizar online e exibir em TV

---

## 📺 Uso em TV

O layout foi pensado para exibição em TV (seção "Visão Geral"):
- Pódio Top 3 em destaque no centro
- KPIs em cards grandes com contagem animada
- Gráfico de linha com paleta de alto contraste (lilás/rosa/laranja)
- Ticker bar no rodapé com informações da campanha
