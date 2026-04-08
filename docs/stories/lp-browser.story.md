# Story — LP Doris Browser

**Epic:** EPIC-1 — Doris Paid Media Landing Pages  
**Status:** Draft  
**Agente executor:** @dev  
**Data de criação:** 2026-04-07  
**Prazo:** 2026-04-25  
**Arquivo de saída:** `browser.html`

---

## User Story

**Como** usuária impactada por um ad do Doris Browser (Meta ou TikTok),  
**quero** entender e simular a busca por linguagem natural na landing page,  
**para** ser convertida ao download do app.

---

## Contexto

O Doris Browser é a feature de busca por linguagem natural — usuário descreve o que quer usando linguagem natural ("quero algo casual para o fim de semana") e a IA encontra peças compatíveis. A LP simula esse fluxo para reduzir fricção antes do download.

**URL de produção:** `doris.mobi/browser`  
**Base visual de referência:** `doris-b2b-page.html`  
**UX Annotations:** `docs/ux/lp-ads-annotations.md`

---

## Acceptance Criteria

### AC-NAV — Navbar

- [ ] **AC-NAV-1** — Logo Doris no canto esquerdo (versão colorida em fundo branco)
- [ ] **AC-NAV-2** — Botão "Baixar o app" no canto direito, Manrope ExtraBold 800, `border-radius: 12px`
- [ ] **AC-NAV-3** — Clique no botão "Baixar o app" abre o modal de conversão

### AC-HERO — Hero Section

- [ ] **AC-HERO-1** — Fundo com gradiente fluido/blob estilo radial:
  ```css
  background: radial-gradient(
    ellipse 70% 60% at 55% 45%,
    rgba(235, 144, 125, 0.75) 0%,   /* #EB907D Orange */
    rgba(241, 118, 137, 0.60) 35%,  /* #F17689 Pink */
    rgba(234, 162, 241, 0.35) 70%,  /* #EAA2F1 Purple */
    transparent 90%
  );
  filter: blur(60px);
  ```
  Blob deve estar em `z-index` inferior a todo conteúdo
- [ ] **AC-HERO-2** — Hierarquia visual obrigatória (de cima para baixo):
  1. Ícone trevo Doris — versão branca, 40×40px
  2. Headline: **"Descreva o que você quer. A Doris encontra."** — Manrope ExtraBold 800, `letter-spacing: -0.04em`
  3. Subtítulo: **"Do vago ao específico — busca por linguagem natural que entende moda como você pensa, não como as lojas catalogam."** — Manrope Light 300, `letter-spacing: -0.022em`
  4. CTA "Baixar grátis" — botão único centralizado, Manrope ExtraBold 800, `border-radius: 12px`
  5. Vídeo demo mockup (abaixo no mobile / à direita no desktop)
- [ ] **AC-HERO-3** — Contraste texto/fundo mínimo 4.5:1 (WCAG AA). Texto nunca sobre área de pico de saturação do gradiente
- [ ] **AC-HERO-4** — Vídeo: `autoplay`, `muted`, `loop`, `playsinline`, sem controles visíveis

### AC-EXPLAIN — Explicação da Feature

- [ ] **AC-EXPLAIN-1** — Screenshot ou mockup do app (usar placeholder se asset não disponível)
- [ ] **AC-EXPLAIN-2** — 3 bullets explicativos:
  - "Busque com palavras: 'quero um look casual para o fim de semana'"
  - "A IA entende o seu estilo e encontra peças compatíveis"
  - "Filtre por marca, cor, ocasião — sem complicação"
- [ ] **AC-EXPLAIN-3** — Tipografia dos bullets: Manrope Regular 400, cor `#000000`; sem gradiente como fundo da seção

### AC-SEARCH — Campo de Busca Fake

- [ ] **AC-SEARCH-1** — Label "Experimente agora" acima do campo — Manrope SemiBold 600
- [ ] **AC-SEARCH-2** — Container do campo de busca:
  - Fundo `#FFFFFF`, `border: 1.5px solid #EFEFEF`
  - `border-radius: 12px`, padding 16px 20px
  - `aria-label="Busca demonstrativa — abre download do app"`
  - `role="button"` (não é input real)
- [ ] **AC-SEARCH-3** — Ícone de busca SVG, 20×20px, cor `#787878`, posição esquerda dentro do campo
- [ ] **AC-SEARCH-4** — Placeholder: **"Quero algo casual para o dia a dia, sem muito esforço…"** — Manrope Light 300, 16px, cor `#787878`, itálico
- [ ] **AC-SEARCH-5** — Botão "Buscar" dentro do campo (canto direito):
  - Background: `linear-gradient(135deg, #EB907D, #F17689)` — Orange→Pink (segunda variação de gradiente da página)
  - Cor texto: `#FFFFFF`, Manrope SemiBold 600, 14px
  - `border-radius: 8px` (nested — menor que container de 12px)
  - Padding: 10px 20px
- [ ] **AC-SEARCH-6** — Comportamento do campo (cursor: text — simula input real):
  - Clique no campo OU no botão "Buscar": dispara `lp_browser_search_click` + abre modal
  - **Nenhum** keydown listener real, nenhuma chamada de API
- [ ] **AC-SEARCH-7** — Focus state visual: `outline: none`, `box-shadow: 0 0 0 3px rgba(241, 118, 137, 0.2)` (glow Pink, 20% opacity)
- [ ] **AC-SEARCH-8** — Mobile (<390px): botão "Buscar" vai para linha abaixo, width 100%; input ocupa full width
- [ ] **AC-SEARCH-9** — Tab focus funcional → abre modal via teclado

### AC-MODAL — Modal de Conversão

- [ ] **AC-MODAL-1** — Overlay: `rgba(0, 0, 0, 0.72)` — não preto puro
- [ ] **AC-MODAL-2** — Container: fundo `#FFFFFF`, `border-radius: 24px`, largura 480px desktop / `calc(100% - 32px)` mobile
- [ ] **AC-MODAL-3** — Faixa gradiente sutil no topo do modal (max 8px altura ou como `border-top` gradiente linear Orange→Pink→Purple) — esta é a segunda variação de gradiente da página (além do hero blob)
- [ ] **AC-MODAL-4** — Estrutura interna (de cima para baixo):
  - Botão fechar [X]: `position: absolute; top: 20px; right: 20px;` — Manrope Regular 400, 16px, cor `#787878`, sem borda, target touch mínimo 44×44px
  - Ícone trevo Doris colorido (gradiente), 48×48px
  - Headline: **"Sua próxima peça favorita começa com uma frase."** — Manrope ExtraBold 800, ~28px
  - Subtítulo: **"Baixe o app e use o Browser para descobrir produtos do jeito que você pensa."** — Manrope Light 300, ~16px
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
- [ ] **AC-TRACK-2** — Evento `lp_browser_view` disparado no `DOMContentLoaded`
- [ ] **AC-TRACK-3** — Evento `lp_browser_search_click` disparado no clique em "Buscar" ou no campo
- [ ] **AC-TRACK-4** — Evento `lp_browser_cta_ios` disparado no clique em App Store
- [ ] **AC-TRACK-5** — Evento `lp_browser_cta_android` disparado no clique em Play Store
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
- [ ] **AC-DESIGN-4** — Máximo 2 variações de gradiente por página (hero blob + `linear-gradient` no botão "Buscar")
- [ ] **AC-DESIGN-5** — `border-radius` sempre múltiplo de 4: modal 24px, cards 20px, botões 12px, input 12px, botão nested 8px
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
| `lp_browser_view` | Page load (`DOMContentLoaded`) | utm_source, utm_medium, utm_campaign, utm_content |
| `lp_browser_search_click` | Clique em "Buscar" ou no campo de busca | utm_source, utm_medium, utm_campaign, utm_content |
| `lp_browser_cta_ios` | Clique no botão App Store do modal | utm_source, utm_medium, utm_campaign, utm_content |
| `lp_browser_cta_android` | Clique no botão Play Store do modal | utm_source, utm_medium, utm_campaign, utm_content |

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

/* Gradiente Hero Browser */
--hero-browser-gradient: radial-gradient(
  ellipse 70% 60% at 55% 45%,
  rgba(235, 144, 125, 0.75) 0%,
  rgba(241, 118, 137, 0.60) 35%,
  rgba(234, 162, 241, 0.35) 70%,
  transparent 90%
);
--gradient-blur: blur(60px);

/* Gradiente Botão Buscar (segunda variação) */
--btn-search-gradient: linear-gradient(135deg, #EB907D, #F17689);

/* Border Radius */
--radius-modal: 24px;
--radius-card: 20px;
--radius-btn: 12px;
--radius-input: 12px;
--radius-btn-nested: 8px;

/* Overlay */
--modal-overlay: rgba(0, 0, 0, 0.72);
```

---

## File List

> Atualizar à medida que arquivos forem criados/modificados

- [ ] `browser.html` — Arquivo principal da LP Browser

---

## Notas Técnicas

- **Pixels:** Meta Pixel ID e TikTok Pixel ID a confirmar com Pedro antes da implementação
- **Vídeo hero:** usar placeholder (vídeo loop genérico ou animação CSS) se asset final não disponível
- **Campo de busca:** completamente fake — nenhuma chamada de API, nenhum autocomplete real. `role="button"` no container
- **Gradiente como sólido:** proibido pelo brandbook. Usar sempre com alpha/opacity ou como blob radial
- **Botão "Buscar":** usa `linear-gradient` como fundo — esta é a segunda variação de gradiente permitida. O gradiente do modal (faixa topo) NÃO é uma terceira variação — é derivado do mesmo blob do hero. Verificar se este entendimento está alinhado com brandbook antes de implementar
- **Inter:** remover qualquer herança do `doris-b2b-page.html` que use `font-family: 'Inter'`
- **Logo versão branca:** disponível em `docs/Brandbook/Logo.png` — verificar se há SVG disponível

---

## Referências

- UX Annotations completas: `docs/ux/lp-ads-annotations.md`
- Base de código visual: `doris-b2b-page.html`
- Brandbook: `docs/Brandbook/` (especialmente: Cores, Gradiente, Tipografia, Do's and Don'ts)
- Story irmã: `docs/stories/lp-snap.story.md`
