# EPIC-1 — Doris Paid Media Landing Pages

**Status:** Ready  
**PM:** Morgan (@pm)  
**Data de criação:** 2026-04-07  
**Prazo:** 2026-04-25 (launch mid-maio)

---

## Objetivo

Criar duas landing pages de conversão para campanhas de ads Meta + TikTok. Cada página simula uma feature do app Doris e converte via modal para download do app.

## Contexto de Negócio

- **Canais:** Meta Ads (act_1057009015716429) + TikTok Ads (App ID: 7616747609907658769)
- **Objetivo de conversão:** Install do app (iOS + Android)
- **Link de download:** https://doris.ai/download
- **UTMs a capturar e repassar:** utm_source, utm_medium, utm_campaign, utm_content

## Páginas

| Story | URL | Feature simulada |
|-------|-----|-----------------|
| [1.1](1.1.story.md) | doris.mobi/snap | Doris Snap — descoberta por foto |
| [1.2](1.2.story.md) | doris.mobi/browser | Browser / AI Discovery — busca por linguagem natural |

## Requisitos Compartilhados

### Base técnica
- HTML/CSS/JS estático (sem framework), adaptado de `doris-b2b-page.html`
- Responsivo (mobile-first — público primário mobile)
- Meta Pixel configurado no `<head>`
- TikTok Pixel configurado no `<head>`

### Tracking
- **PostHog Project ID:** 260288
- Captura de UTM params na URL → repassar no link de download
- Events PostHog disparados via `posthog.capture()`

### Modal de conversão
- Acionado pelo CTA principal da página
- Dois botões: Download iOS (App Store) + Download Android (Google Play)
- Links com UTMs preservados

### Identidade visual
- Seguir brandbook Doris (`docs/Brandbook/`)
- Paleta, tipografia e tom alinhados à marca

## Stories

- **1.1** — LP Snap (`docs/stories/1.1.story.md`)
- **1.2** — LP Browser (`docs/stories/1.2.story.md`)

## Acceptance Criteria do Epic

- [ ] Ambas as páginas publicadas em doris.mobi/snap e doris.mobi/browser
- [ ] Pixels Meta e TikTok disparando corretamente
- [ ] PostHog registrando todos os eventos definidos por página
- [ ] UTMs preservados no link de download do modal
- [ ] Aprovação visual pelo Pedro antes do launch

— Morgan, planejando o futuro 📊
