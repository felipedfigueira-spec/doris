# Story — LP Doris Snap

**Epic:** EPIC-1 — Doris Paid Media Landing Pages  
**Status:** Draft  
**Agente executor:** @dev  
**Data de criação:** 2026-04-07  
**Prazo:** 2026-04-25  
**Arquivo de saída:** `snap.html`

---

## User Story

**Como** usuária impactada por um ad do Doris Snap (Meta ou TikTok),  
**quero** entender e simular o uso do Snap na landing page,  
**para** ser convertida ao download do app.

---

## Contexto

O Doris Snap é a feature de descoberta de produtos por foto — usuário aponta a câmera para qualquer look, a IA identifica as peças e mostra onde comprar. A LP simula esse fluxo para reduzir fricção antes do download.

**URL de produção:** `doris.mobi/snap`  
**Base visual de referência:** `doris-b2b-page.html`  
**UX Annotations:** `docs/ux/lp-ads-annotations.md`

---

## Acceptance Criteria

### AC-NAV — Navbar

- [ ] **AC-NAV-1** — Logo Doris no canto esquerdo (versão colorida em fundo branco)
- [ ] **AC-NAV-2** — Botão "Baixar o app" no canto direito, Manrope ExtraBold 800, `border-radius: 12px`
- [ ] **AC-NAV-3** — Clique no botão "Baixar o app" faz scroll suave (anchor) para o modal de conversão — OU abre o modal diretamente

### AC-HERO — Hero Section

- [ ] **AC-HERO-1** — Fundo com gradiente fluido/blob estilo radial:
  ```css
  background: radial-gradient(
    ellipse 70% 60% at 60% 40%,
    rgba(245, 102, 145, 0.75) 0%,   /* #F56691 Pink */
    rgba(234, 162, 241, 0.60) 40%,  /* #EAA2F1 Purple */
    rgba(76, 191, 241, 0.35) 70%,   /* #4CBFF1 Blue */
    transparent 90%
  );
  filter: blur(60px);
  ```
  Blob deve estar em `z-index` inferior a todo conteúdo
- [ ] **AC-HERO-2** — Hierarquia visual obrigatória (de cima para baixo):
  1. Ícone trevo Doris — versão branca, 40×40px
  2. Headline: **"Descubra qualquer peça. Só apontando a câmera."** — Manrope ExtraBold 800, `letter-spacing: -0.04em`
  3. Subtítulo: **"Fotografou, encontrou. A Doris identifica peças de qualquer look e mostra onde comprar — do feed ao checkout."** — Manrope Light 300, `letter-spacing: -0.022em`
  4. CTA "Baixar grátis" — botão único centralizado, Manrope ExtraBold 800, `border-radius: 12px`
  5. Vídeo demo mockup (abaixo no mobile / à direita no desktop)
- [ ] **AC-HERO-3** — Contraste texto/fundo mínimo 4.5:1 (WCAG AA). Texto nunca sobre área de pico de saturação do gradiente
- [ ] **AC-HERO-4** — Vídeo: `autoplay`, `muted`, `loop`, `playsinline`, sem controles visíveis

### AC-HOW — Como Funciona (3 Cards)

- [ ] **AC-HOW-1** — Título de seção presente (ex: "Como funciona")
- [ ] **AC-HOW-2** — 3 cards em coluna, mobile-first, fundo `#EFEFEF`, `border-radius: 20px`:
  - **Card 1:** "Tire uma foto de qualquer look" — ícone câmera
  - **Card 2:** "O Snap analisa com IA e identifica as peças" — ícone IA/busca
  - **Card 3:** "Veja onde comprar cada item" — ícone carrinho/loja
- [ ] **AC-HOW-3** — Cards NÃO usam gradiente como fundo (apenas `#EFEFEF`)

### AC-UPLOAD — Zona de Upload Fake

- [ ] **AC-UPLOAD-1** — Estrutura visual:
  - Container fundo `rgba(239, 239, 239, 0.6)`, `border-radius: 20px`
  - Borda tracejada 2px estilo dashed, cor `#EAA2F1` (Purple do gradiente)
  - Ícone câmera 40×40px, cor `#787878` — sem gradiente no ícone
  - Texto "Aponte para qualquer look" — Manrope Light 300, 15px, `#787878`, centralizado
  - Micro-copy "Tire uma foto ou escolha da galeria" — Manrope Regular 400, 13px, `#787878`
- [ ] **AC-UPLOAD-2** — Botão **"Analisar Look"** abaixo da zona de upload — Manrope ExtraBold 800, `border-radius: 12px`
- [ ] **AC-UPLOAD-3** — Zona de upload tem `cursor: default` — não é clicável (apenas visual/persuasivo). `aria-hidden="true"`
- [ ] **AC-UPLOAD-4** — Clique em **"Analisar Look"** dispara `lp_snap_upload_click` + abre modal de conversão
- [ ] **AC-UPLOAD-5** — Hover state do container (desktop): `background: rgba(235, 144, 125, 0.08)`, `border-color: #F56691` sólido, transição 0.2s ease
- [ ] **AC-UPLOAD-6** — Nenhum `<input type="file">` real. Nenhum upload de arquivo

### AC-MODAL — Modal de Conversão

- [ ] **AC-MODAL-1** — Overlay: `rgba(0, 0, 0, 0.72)` — não preto puro
- [ ] **AC-MODAL-2** — Container: fundo `#FFFFFF`, `border-radius: 24px`, largura 480px desktop / `calc(100% - 32px)` mobile
- [ ] **AC-MODAL-3** — Faixa gradiente sutil no topo do modal (max 8px altura ou como `border-top` gradiente linear) — esta é a segunda variação de gradiente permitida na página
- [ ] **AC-MODAL-4** — Estrutura interna (de cima para baixo):
  - Botão fechar [X]: `position: absolute; top: 20px; right: 20px;` — Manrope Regular 400, 16px, cor `#787878`, sem borda, target touch mínimo 44×44px
  - Ícone trevo Doris colorido (gradiente) — versão colorida em fundo branco, 48×48px
  - Headline: **"Comece a descobrir agora."** — Manrope ExtraBold 800, ~28px
  - Subtítulo: **"Baixe o app. Use o Snap para encontrar qualquer peça que você ver por aí."** — Manrope Light 300, ~16px
  - Botões side-by-side (App Store primário, Play Store secundário)
  - Micro-copy: **"Grátis. Disponível para iOS e Android."** — 13px, `#787878`
- [ ] **AC-MODAL-5** — Botão App Store (primário):
  - Fundo `#000000`, texto `#FFFFFF`
  - Linha 1: "Disponível na" — Manrope Regular 400, 11px
  - Linha 2: "App Store" — Manrope SemiBold 600, 17px
  - SVG logo Apple oficial sem alteração de cor
  - `border-radius: 12px`, padding 12px 20px, min-width 160px
  - Link: `https://doris.ai/download?platform=ios&{utm_params}`
- [ ] **AC-MODAL-6** — Botão Play Store (secundário):
  - Fundo `#FFFFFF`, `border: 1px solid rgba(0, 0, 0, 0.15)`
  - Texto `#000000`, mesmas tipografia e dimensões do App Store
  - SVG logo Google Play oficial sem alteração de cor
  - Link: `https://doris.ai/download?platform=android&{utm_params}`
- [ ] **AC-MODAL-7** — Mobile (<390px): botões em stack vertical, width 100% (max 280px, centralizado)
- [ ] **AC-MODAL-8** — Animações:
  - Entrada: `scale(0.95) opacity(0)` → `scale(1) opacity(1)`, 200ms ease-out
  - Saída: `scale(0.97) opacity(0)`, 150ms ease-in
  - Overlay: `opacity(0)` → `opacity(1)`, 200ms
- [ ] **AC-MODAL-9** — Acessibilidade: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` apontando para o headline do modal
- [ ] **AC-MODAL-10** — Focus trap ativo quando modal estiver aberto
- [ ] **AC-MODAL-11** — Tecla `ESC` fecha o modal
- [ ] **AC-MODAL-12** — Nenhum gradiente nos botões App Store / Play Store (violação das guidelines das stores)

### AC-FOOTER — Footer

- [ ] **AC-FOOTER-1** — Fundo `#000000`, logo Doris branco
- [ ] **AC-FOOTER-2** — Link `doris.mobi` visível
- [ ] **AC-FOOTER-3** — Padding vertical mínimo de 48px

### AC-TRACKING — Rastreamento e Analytics

- [ ] **AC-TRACK-1** — PostHog inicializado: Project ID `260288`, host `us.posthog.com`
- [ ] **AC-TRACK-2** — Evento `lp_snap_view` disparado no `DOMContentLoaded`
- [ ] **AC-TRACK-3** — Evento `lp_snap_upload_click` disparado no clique em "Analisar Look"
- [ ] **AC-TRACK-4** — Evento `lp_snap_cta_ios` disparado no clique em App Store
- [ ] **AC-TRACK-5** — Evento `lp_snap_cta_android` disparado no clique em Play Store
- [ ] **AC-TRACK-6** — Todos os eventos incluem propriedades: `{ utm_source, utm_medium, utm_campaign, utm_content }`
- [ ] **AC-TRACK-7** — Meta Pixel snippet no `<head>`
- [ ] **AC-TRACK-8** — TikTok Pixel snippet no `<head>`

### AC-UTM — Captura de UTM

- [ ] **AC-UTM-1** — Função `getUTMParams()` lê `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` da URL atual
- [ ] **AC-UTM-2** — UTMs são appended como query string nos links de download do modal
- [ ] **AC-UTM-3** — Se nenhum UTM presente na URL, os parâmetros são omitidos (não enviados como strings vazias)

### AC-DESIGN — Sistema de Design

- [ ] **AC-DESIGN-1** — Fonte única: Manrope via Google Fonts — pesos 300, 400, 500, 600, 700, 800
- [ ] **AC-DESIGN-2** — Nenhum uso de Inter (violação detectada no `doris-b2b-page.html` em `.b2b-btn`)
- [ ] **AC-DESIGN-3** — Cores secundárias (gradiente) NUNCA aplicadas como sólido isolado em seções
- [ ] **AC-DESIGN-4** — Máximo 2 variações de gradiente por página (hero blob + faixa topo do modal)
- [ ] **AC-DESIGN-5** — `border-radius` sempre múltiplo de 4: modal 24px, cards 20px, botões 12px
- [ ] **AC-DESIGN-6** — Espaçamento: section padding vertical 48px mobile / 80px desktop; container padding horizontal 24px mobile / 120px desktop

### AC-PERF — Performance e Qualidade

- [ ] **AC-PERF-1** — Renderiza corretamente em 390px (iPhone 14) e 375px (iPhone SE)
- [ ] **AC-PERF-2** — Responsivo: breakpoints 375px, 768px, 1280px
- [ ] **AC-PERF-3** — PageSpeed Insights mobile score ≥ 75
- [ ] **AC-PERF-4** — Sem dependências externas de JS além de PostHog CDN e pixels
- [ ] **AC-PERF-5** — IntersectionObserver apenas para animações de entrada leves (fade-up); sem scroll-triggered animations pesadas

---

## Eventos PostHog — Resumo

| Evento | Gatilho | Propriedades obrigatórias |
|--------|---------|--------------------------|
| `lp_snap_view` | Page load (`DOMContentLoaded`) | utm_source, utm_medium, utm_campaign, utm_content |
| `lp_snap_upload_click` | Clique em "Analisar Look" | utm_source, utm_medium, utm_campaign, utm_content |
| `lp_snap_cta_ios` | Clique no botão App Store do modal | utm_source, utm_medium, utm_campaign, utm_content |
| `lp_snap_cta_android` | Clique no botão Play Store do modal | utm_source, utm_medium, utm_campaign, utm_content |

---

## Tokens CSS de Referência

```css
/* Tipografia */
--font-family: 'Manrope', sans-serif;
--fw-light: 300;
--fw-regular: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;
--fw-extrabold: 800;

/* Cores Primárias */
--color-white: #FFFFFF;
--color-black: #000000;
--color-silver: #787878;
--color-light-gray: #EFEFEF;

/* Gradiente Hero Snap */
--hero-snap-gradient: radial-gradient(
  ellipse 70% 60% at 60% 40%,
  rgba(245, 102, 145, 0.75) 0%,
  rgba(234, 162, 241, 0.60) 40%,
  rgba(76, 191, 241, 0.35) 70%,
  transparent 90%
);
--gradient-blur: blur(60px);

/* Border Radius */
--radius-modal: 24px;
--radius-card: 20px;
--radius-btn: 12px;
--radius-input: 12px;

/* Overlay */
--modal-overlay: rgba(0, 0, 0, 0.72);
```

---

## File List

> Atualizar à medida que arquivos forem criados/modificados

- [ ] `snap.html` — Arquivo principal da LP Snap

---

## Notas Técnicas

- **Pixels:** Meta Pixel ID e TikTok Pixel ID a confirmar com Pedro antes da implementação
- **Vídeo hero:** usar placeholder (vídeo loop genérico ou animação CSS) se asset final não disponível
- **Zona de upload:** completamente decorativa — nenhum `<input type="file">`, nenhum event listener de upload
- **Gradiente como sólido:** proibido pelo brandbook. Usar sempre com alpha/opacity ou como blob radial
- **Inter:** remover qualquer herança do `doris-b2b-page.html` que use `font-family: 'Inter'`
- **Logo versão branca:** disponível em `docs/Brandbook/Logo.png` — verificar se há SVG disponível para melhor qualidade

---

## Referências

- UX Annotations completas: `docs/ux/lp-ads-annotations.md`
- Base de código visual: `doris-b2b-page.html`
- Brandbook: `docs/Brandbook/` (especialmente: Cores, Gradiente, Tipografia, Do's and Don'ts)
- Story irmã: `docs/stories/lp-browser.story.md`
