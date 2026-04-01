# Doris — Agent Context Document
Versão: março 2026 | Mantenedor: Pedro (UX Researcher & Product Designer)

---

## 1. O que é a Doris

Doris é uma fashion tech brasileira que combina IA, realidade aumentada e um app de moda para resolver o problema de descoberta e decisão de compra de roupas — especialmente a dificuldade de saber se uma peça realmente fica bem antes de comprar.

- **Domínio principal:** doris.mobi
- **Mercado primário:** Brasil (B2C)

---

## 2. Produto B2C — App Doris

**Filosofia de produto:** O core do app é sempre gratuito e funcional. Monetização via features premium e parcerias B2B.

| Feature | Descrição |
|---|---|
| Look Building | Monte outfits com peças do próprio guarda-roupa ou do catálogo |
| Virtual Try-On (VTO) | Prova virtual via AR/IA — peça sobreposta ao corpo do usuário |
| Doris Snap | Descubra produtos fotografando looks na rua ou em fotos |
| Browser / AI Discovery | Busca de produtos via prompts de linguagem natural + imagem |
| Feed | Feed personalizado de looks e inspirações |
| Mix & Match | Combinações de peças sugeridas por IA |
| Sizing / Size Suggestion | Sugestão de tamanho baseada em medidas corporais (circunferências) |
| Doris Studio | Geração de modelo sintético a partir de selfie (reconstrução 3D) |
| Social / Resale | Features de compartilhamento e revenda (em desenvolvimento) |

---

## 3. Docs de Referência

- `docs/Brandbook/` — Brandbook completo da Doris (PDFs por seção)
- `docs/[EXTERNAL] Pitch Doris - Mar26.pptx` — Pitch do produto

**Sempre consultar o brandbook antes de criar qualquer material de design.**

Arquivos-chave do brandbook:
- `Essência da marca.pdf` — propósito, valores, posicionamento
- `Cores.pdf` / `Cores-1.pdf` a `Cores-4.pdf` — paleta de cores
- `Tipografia.pdf` — fontes e hierarquia
- `Logo.png` / `Logotipo.pdf` — marca e variações
- `Tom.pdf` / `Voz.pdf` — tom de voz e linguagem
- `Arquetipos.pdf` — arquétipos de marca
- `Gradiente.pdf` — uso de gradientes
- `Iconografia.pdf` — sistema de ícones
- `Ilustrações.pdf` — estilo de ilustração
- `Fotografia.pdf` — diretrizes de fotografia
- `Do's and Don'ts.pdf` — uso correto da marca
- `Content Design.pdf` — design de conteúdo
- `Social Media.pdf` / `Exemplos Social Media.pdf` — aplicações em social
- `Push Notifications.pdf` — padrões de notificação
- `B2B.pdf` — aplicações B2B
- `Persona.pdf` — persona visual da marca
- `Storybrand.pdf` — framework narrativo
- `Guia de estilo e conteúdo.pdf` — guia geral

---

## 4. Stack Técnica

### Analytics — PostHog
- **Project ID:** 260288
- **Host:** us.posthog.com
- Pipeline: PostHog → Google Sheets via Google Apps Script (upsert horário)
- Queries em HogQL (SQL-like — não usar SQL padrão)
- Funil de onboarding: 22 etapas, ~51,6% conversão geral
- Para JOINs de pessoas: usar `person_id` (não `distinct_id` — há identity merging issues)
- Métricas-chave: installs, DAU, onboarding funnel, new-user-first-feed

**HogQL — padrões importantes:**
```sql
-- Sempre usar person_id para joins, não distinct_id
SELECT person_id, count() as events
FROM events
WHERE event = 'onboarding_step_completed'
GROUP BY person_id

-- Invite code cohort analysis
SELECT properties.$invite_code, count(distinct person_id)
FROM events
WHERE event = '$identify'
GROUP BY properties.$invite_code
```

### Paid Media — Meta Ads
- **Ad Account:** act_1057009015716429
- **Meta App ID (Facebook SDK):** 936603132560584 (nome: "Doris Mobile SDK")
- Pipeline: Meta Ads → BigQuery via sync.mjs
- BigQuery project: `doris-data-warehouse`, dataset: `paid_midia_raw`
- Load strategy: `WRITE_TRUNCATE` (streaming inserts bloqueados no free tier)
- UTM tracking ativo; campanhas de Instagram Direct engagement para app launch

### TikTok / Mobile Tracking
- **TikTok App ID:** 7616747609907658769
- **Android App ID:** ai.doris.nemertes.production
- TikTok Events Manager configurado para app conversion tracking (Android SDK)

### Frontend / CMS
- **Webflow:** landing page B2B, marketing pages
- **Figma:** design system, componentes, protótipos (MCP conectado)
- **Zoho:** migração WhatsApp Business API (vindo do Freshchat)

### AI / Agent Framework
- Claude Code + AIOS Core / Xquads framework configurado em VS Code
- Agentes especializados por função (UX, analytics, media, dev)

---

## 5. UX Research — Personas B2C

**Documento de referência definitivo:** `Perfis_Comportamentais_Moda_TudoEmUm.pdf`

| # | Nome | Perfil central |
|---|---|---|
| 1 | Fashionistas | Alta renda, early adopters, fashion-forward, engajamento alto |
| 2 | Inspiradores | Criadores de conteúdo, influência social, discovery via redes |
| 3 | Clássicos | Conservadores, qualidade > trend, decisão de compra racional |
| 4 | Criativos | Estilo autoral, mix de referências, anti-mainstream |
| 5 | Construtores de Comunidade | Engajamento coletivo, revenda, social proof |
| 6 | Econômicos | Price-sensitive, buscam custo-benefício, sazonais |

> Existe split de análise entre mercado BR vs. Mid-West/Global North para cada persona.

**Estrutura obrigatória de persona:** nome, bio, dispositivo preferido, barreiras, drivers.
**Formatação:** tabela bem estruturada, sem quebras de linha ou sobreposições.

---

## 7. UX Writing

- **Idioma primário:** Português do Brasil — toda comunicação interna e do produto

---

## 10. Padrões de Código / Integração

### Google Apps Script (PostHog → Sheets)
```javascript
// Padrão: upsert horário por chave composta
function upsertRow(sheet, keyCol, keyValue, rowData) {
  const data = sheet.getDataRange().getValues();
  const keyIdx = data[0].indexOf(keyCol);
  for (let i = 1; i < data.length; i++) {
    if (data[i][keyIdx] === keyValue) {
      sheet.getRange(i + 1, 1, 1, rowData.length).setValues([rowData]);
      return;
    }
  }
  sheet.appendRow(rowData);
}
```

### HogQL → BigQuery (sync.mjs)
```javascript
// BigQuery: sempre WRITE_TRUNCATE (streaming bloqueado no free tier)
await bigquery.load(tableId, rows, {
  writeDisposition: 'WRITE_TRUNCATE'
});
```

### PostHog API
```javascript
const PH_PROJECT = 260288;
const PH_HOST = 'https://us.posthog.com';
// HogQL endpoint: POST /api/projects/{id}/query
// Body: { query: { kind: 'HogQLQuery', query: '...' } }
```

---

## 11. Regras Gerais para Agentes

1. **Idioma:** sempre responder em Português do Brasil, salvo instrução explícita
2. **Termos técnicos** (analytics, código, features de produto): manter em inglês
3. **Dados sensíveis:** nunca expor credenciais, IDs de usuário reais, ou dados de pesquisa identificáveis
4. **Tom:** profissional mas casual, orientado a solução, sem especulação
5. **Personas:** ao referenciar usuários do app, usar as 6 proto-personas nomeadas acima
6. **Features:** nomear features em inglês conforme tabela da Seção 2
7. **Formatação de análises:** seguir estrutura de Focus Group (Seção 6) quando aplicável
8. **Copy do produto:** seguir diretrizes de UX Writing (Seção 7)
9. **Métricas de negócio:** priorizar DAU, retention D1/D7/D30, onboarding conversion, install-to-activated

---

## 12. Contexto de Equipe

**Pedro — UX Researcher & Product Designer**
Atua também como: PO (quando necessário), UX Writer, dev sênior de scripts/integrações
Foco atual: analytics infrastructure, paid media pipelines, app QA, B2B landing page

**Comunicação preferida com agentes:**
- Direto ao ponto
- Solução antes da explicação
- Contexto técnico completo sem didatismo desnecessário
- Alinhamento constante com drivers de negócio da Doris
