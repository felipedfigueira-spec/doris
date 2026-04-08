# UX Annotations — Landing Pages Snap & Browser
**Versão:** 1.0 | **Data:** 2026-04-07  
**Autora:** Uma (UX Design Expert) | **Para:** @dev  
**Base de referência:** `doris-b2b-page.html` + Brandbook 2026

---

## 1. Checklist de Conformidade Brandbook

| # | Categoria | Item verificado | Status | Nota |
|---|-----------|----------------|--------|------|
| 1 | Tipografia | Fonte primária: Manrope como única typeface | ✅ Aprovado | Brief correto. Apenas Manrope. |
| 2 | Tipografia | Light (300) para headlines | ✅ Aprovado | Brandbook: "Peso light — voz principal da marca" |
| 3 | Tipografia | Regular (400) para corpo | ✅ Aprovado | Brandbook: "Peso regular — comunicação funcional" |
| 4 | Tipografia | Bold/Extrabold (700/800) para CTAs | ✅ Aprovado | Brandbook lista Extrabold como peso disponível |
| 5 | Tipografia | **Ausência de Inter** nos botões | ⚠️ ALERTA | B2B ref usa Inter nos `.b2b-btn` — violação. Novas LPs devem usar apenas Manrope |
| 6 | Cores | #FFFFFF como base | ✅ Aprovado | Brandbook: "branco é a cor primária da Doris" |
| 7 | Cores | #000000 para expressão/títulos | ✅ Aprovado | Brandbook: "o preto declara" |
| 8 | Cores | #EFEFEF para cards e fundos complementares | ✅ Aprovado | Brandbook: "cinza estabiliza, organiza" |
| 9 | Cores | #787878 para texto secundário | ✅ Aprovado | Silver — dentro das 4 cores primárias |
| 10 | Gradiente | Paleta correta (#EB907D→#EAA2F1→#4CBFF1) | ✅ Aprovado | Todas as paradas do brief estão na paleta oficial |
| 11 | Gradiente | Snap: Pink→Purple→Blue | ✅ Aprovado | #F56691 → #EAA2F1 → #4CBFF1 — dentro da paleta |
| 12 | Gradiente | Browser: Orange→Pink→Purple | ✅ Aprovado | #EB907D → #F17689 → #EAA2F1 — dentro da paleta |
| 13 | Gradiente | Estilo fluido/blur (nunca sólido) | ✅ Aprovado | Brief especifica corretamente |
| 14 | Gradiente | Máximo 2 variações por página | ✅ Aprovado | Brandbook: "recomendamos o uso de no máximo duas variações por material" |
| 15 | Radius | Cards: 16–24px | ✅ Aprovado | Múltiplos de 4 — dentro do sistema Doris |
| 16 | Radius | Botões: 12px | ✅ Aprovado | Múltiplo de 4. **Atenção:** B2B ref usa 8px — corrigir para 12px nas novas LPs |
| 17 | Mobile-first | Base 390px | ✅ Aprovado | Alinhado com padrão B2B ref |
| 18 | Ícone/Marca | Uso correto do ícone trevo | ✅ Aprovado | Branco em fundo gradiente / colorido em fundo branco |
| 19 | Logo | Regras de proteção do logotipo | ✅ Aprovado | Brief não viola nenhuma regra de uso do logo |
| 20 | Voz/Tom | Clareza, elegância, autoridade tranquila | ✅ Aprovado | Copy do brief alinhado com "guia, não impõe" |

**Resultado geral:** 19/20 aprovados | 1 alerta crítico (Inter nos botões — ver item 5)

---

## 2. Anotações de UX por Componente

### 2.1 Hero Section

**Contexto:** O hero é o único lugar onde o gradiente ocupa área de fundo. É a variação 1 das 2 permitidas por página.

#### Snap — Hero
```
LAYOUT (mobile-first, 390px base):
- Fundo: gradiente fluido Blur/Fluid style
  CSS: radial-gradient(ellipse at 60% 40%,
    rgba(245, 102, 145, 0.75) 0%,   /* #F56691 Pink */
    rgba(234, 162, 241, 0.6) 40%,   /* #EAA2F1 Purple */
    rgba(76, 191, 241, 0.35) 70%,   /* #4CBFF1 Blue */
    transparent 90%
  ) + filter: blur(60–80px)
- Ícone Doris trevo: branco, 40×40px, acima do headline
- Headline: Manrope ExtraBold 800, tracking -0.04em
- Sub: Manrope Light 300, tracking -0.022em
- CTA: botão único centralizado
- Mockup: iPhone à direita (desktop) / abaixo (mobile)

HIERARQUIA VISUAL obrigatória:
  [1] Ícone trevo (ancora a marca)
  [2] Headline (promessa principal)
  [3] Sub (contexto/prova)
  [4] CTA (ação única)
  [5] Mockup (prova visual)

IMPORTANTE: O gradiente deve estar atrás de tudo. 
Nunca colocar texto sobre área de máxima saturação do gradiente.
Garantir contraste mínimo 4.5:1 entre texto e fundo.
```

#### Browser — Hero
```
Idêntico ao Snap, mas:
- Gradiente: radial-gradient com #EB907D (Orange) → #F17689 (Pink) → #EAA2F1 (Purple)
- O campo de busca fake substitui o mockup de câmera como elemento central
  da experiência visual
```

---

### 2.2 Modal de Conversão (overlay)

**Objetivo:** Capturar intent → direcionar para download. Deve ser impactante, on-brand e rápido.

```
ESTRUTURA DO MODAL:
┌─────────────────────────────────┐
│  [X] fechar — top right, 24px   │
│                                 │
│  [Ícone trevo — 48×48px]        │
│                                 │
│  HEADLINE (800, ~28px)          │
│  Subtítulo (300, ~16px)         │
│                                 │
│  [ App Store  ]  [ Play Store ] │
│                                 │
│  Texto micro (~13px, #787878)   │
└─────────────────────────────────┘

ESPECIFICAÇÕES:
- Overlay: rgba(0, 0, 0, 0.72) — não usar preto puro, precisa respirar
- Container modal: fundo #FFFFFF, border-radius: 24px
- Width: 480px desktop / 100% - 32px margin mobile
- Padding interno: 40px desktop / 32px mobile
- Ícone trevo: versão colorida (gradiente) em fundo branco
- Botão fechar (X): Manrope Regular 16px, cor #787878, sem borda
  — posição: absolute top 20px right 20px
  — target touch mínimo: 44×44px

GRADIENTE NO MODAL:
- Variação 2 da página: aplicar como faixa sutil no topo do container
  (max 8px de altura) ou como borda-topo com gradiente Linear
  Não usar como fundo full — quebraria a regra das 2 variações

ANIMAÇÃO:
- Entrada: scale(0.95) opacity(0) → scale(1) opacity(1), 200ms ease-out
- Saída: scale(0.97) opacity(0), 150ms ease-in
- Overlay: opacity(0) → opacity(1), 200ms

ACESSIBILIDADE:
- Focus trap ativo quando modal aberto
- ESC fecha o modal
- aria-modal="true", role="dialog"
- aria-labelledby apontando para headline do modal
```

---

### 2.3 Botões App Store / Play Store

**Hierarquia:** App Store é primário (base iOS para moda feminina BR). Play Store é secundário.

```
LAYOUT LADO A LADO:
[ 🍎 App Store ]   [ ▶ Google Play ]
   primary              secondary

ESPECIFICAÇÕES — Botão padrão:
- Fundo: #000000
- Texto: #FFFFFF, Manrope Medium 500
- Linha 1 (micro): "Disponível na" — 11px, weight 400
- Linha 2 (store name): "App Store" / "Google Play" — 17px, weight 600
- Logo: SVG oficial da store (Apple/Google) — não usar PNG com borda
- Radius: 12px (alinhado com brief, múltiplo de 4)
- Padding: 12px 20px
- Min-width: 160px
- Gap entre botões: 12px

HIERARQUIA VISUAL:
- App Store: opacity 1, border: none
- Play Store: opacity 0.85 ou border: 1px solid rgba(0,0,0,0.15) fundo #FFFFFF
  — diferenciação sutil, não agressiva

MOBILE (< 390px):
- Stack vertical: App Store acima, Play Store abaixo
- Width: 100% (max 280px, centralizado)

ATENÇÃO:
- Não usar gradiente nos botões das stores — quebra identidade das plataformas
- Não usar as cores da Doris (rosa/roxo) nos botões das stores — violação das 
  guidelines Apple/Google E do brandbook (gradiente deve complementar, não 
  ser aplicado em elementos funcionais)
- Manter logos oficiais das stores sem alteração de cor
```

---

### 2.4 Zona de Upload Fake (Snap)

**Contexto:** Elemento decorativo/persuasivo que demonstra a funcionalidade sem código real. Deve comunicar "é simples assim" visualmente.

```
ESTRUTURA:
┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  
│                                 │  ← borda tracejada 2px
│        [ícone câmera]           │     stroke: gradient (Pink→Purple)
│                                 │     via SVG ou pseudo-element
│   "Aponte para qualquer look"   │
│      Manrope Light 300          │
│                                 │
│  [  Tirar foto  ] [  Da galeria ]│  ← botões secundários
└─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘

ESPECIFICAÇÕES:
- Container: fundo rgba(239,239,239,0.6) — #EFEFEF com leve transparência
- Border: 2px dashed — implementar com SVG border ou outline com dash
  Cor: gradient simulado via background-clip: border-box
  Alternativa viável: border: 2px dashed #EAA2F1 (Purple do gradiente)
- Border-radius: 20px (múltiplo de 4, elemento de destaque)
- Ícone câmera: 40×40px, cor #787878 — não usar gradiente no ícone
- Texto instrucional: Manrope Light 300, 15px, #787878, text-align: center
- Botões internos: texto only, sem fundo — Manrope Medium 500
  "Tirar foto" cor #000000 | "Da galeria" cor #787878

HOVER STATE (desktop):
- Background: rgba(235,144,125,0.08) — laranja do gradiente com 8% opacity
- Border-color: #F56691 sólido (Pink)
- Transição: 0.2s ease

IMPORTANTE:
- cursor: default (não pointer) — não é clicável, não promete funcionalidade
- Nenhum onclick ou event listener real
- O elemento é visual. Sua função é reduzir fricção cognitiva, mostrando 
  que a ação é simples, antes de direcionar para o download do app
- Adicionar aria-hidden="true" — é decorativo para leitores de tela
```

---

### 2.5 Campo de Busca (Browser)

**Contexto:** Input fake que "promete" a experiência de busca por linguagem natural. Não tem funcionalidade real — ao clicar, abre o modal de conversão.

```
ESTRUTURA:
┌──────────────────────────────────────┐
│  🔍  "Quero algo casual para o dia…" │  [ Buscar → ]
└──────────────────────────────────────┘

ESPECIFICAÇÕES:
- Container externo: fundo #FFFFFF, border: 1.5px solid #EFEFEF
- Border-radius: 12px (múltiplo de 4, elemento funcional)
- Padding: 16px 20px
- Ícone busca: SVG, 20×20px, cor #787878, posição left
- Placeholder: Manrope Light 300, 16px, cor #787878 (italic opcional)
- Botão interno "Buscar":
  Background: linear-gradient(135deg, #EB907D, #F17689) — Orange→Pink
  (variação 2 de gradiente da página Browser)
  Cor texto: #FFFFFF, Manrope SemiBold 600, 14px
  Radius: 8px (menor que o container — nested radius correto)
  Padding: 10px 20px

COMPORTAMENTO (sem funcionalidade real):
- O campo inteiro tem cursor: text — simula input real
- Nenhum keydown event real
- onclick no campo OU no botão: abre modal de conversão
  data-trigger="modal-browser" no container
- Não implementar autocomplete ou suggestions — falsa promessa

FOCUS STATE visual:
- outline: none
- border-color: gradiente — usar box-shadow: 0 0 0 3px rgba(241,118,137,0.2)
  (glow sutil em Pink com 20% opacity)

MOBILE:
- Botão "Buscar" vai para linha abaixo, width: 100%
- Input ocupa full width

ACESSIBILIDADE:
- aria-label="Busca demonstrativa — abre download do app"
- role="button" no container (já que não é input real)
- Garantir tab focus funcional → abre modal via keyboard
```

---

### 2.6 Estrutura de Página — Padrão Comum (Snap e Browser)

```
SEÇÕES OBRIGATÓRIAS (nesta ordem):
1. Hero (gradient + headline + CTA primário)
2. Feature Demo (upload zone OU search field)
3. Social Proof / Screenshots do app
4. CTA secundário (antes do modal trigger)
5. Footer mínimo (logo + links legais)

TOKENS DE ESPAÇAMENTO (herdar do B2B ref):
- Section padding vertical: 80px desktop / 48px mobile
- Container max-width: 1512px
- Container padding horizontal: 120px desktop / 24px mobile (390px)
- Gap entre elementos de texto: 24px
- Gap headline→CTA: 48px desktop / 32px mobile

SCROLL BEHAVIOR:
- O modal dispara ao clicar nos CTAs, não por scroll
- Sem scroll-triggered animations pesadas — LP de ads precisa carregar rápido
- IntersectionObserver apenas para animações de entrada (fade-up leve)
```

---

## 3. Copy Final

### 3.1 Landing Page — Doris Snap

| Elemento | Copy aprovado |
|----------|--------------|
| **Headline principal** | Descubra qualquer peça. Só apontando a câmera. |
| **Subtítulo** | Fotografou, encontrou. A Doris identifica peças de qualquer look e mostra onde comprar — do feed ao checkout. |
| **CTA hero** | Baixar grátis |
| **CTA secundário** | Experimentar agora |
| **Instrução upload zone** | Aponte para qualquer look |
| **Micro-copy upload** | Tire uma foto ou escolha da galeria |
| **Modal — headline** | Comece a descobrir agora. |
| **Modal — subtítulo** | Baixe o app. Use o Snap para encontrar qualquer peça que você ver por aí. |
| **Modal — micro-copy** | Grátis. Disponível para iOS e Android. |
| **App Store label** | Baixar na App Store |
| **Play Store label** | Baixar no Google Play |

### 3.2 Landing Page — Doris Browser

| Elemento | Copy aprovado |
|----------|--------------|
| **Headline principal** | Descreva o que você quer. A Doris encontra. |
| **Subtítulo** | Do vago ao específico — busca por linguagem natural que entende moda como você pensa, não como as lojas catalogam. |
| **CTA hero** | Baixar grátis |
| **CTA secundário** | Experimentar agora |
| **Placeholder campo busca** | "Quero algo casual para o dia a dia, sem muito esforço…" |
| **Botão busca** | Buscar |
| **Modal — headline** | Sua próxima peça favorita começa com uma frase. |
| **Modal — subtítulo** | Baixe o app e use o Browser para descobrir produtos do jeito que você pensa. |
| **Modal — micro-copy** | Grátis. Disponível para iOS e Android. |
| **App Store label** | Baixar na App Store |
| **Play Store label** | Baixar no Google Play |

### 3.3 Regras de Tom para Revisão de Copy

- **Verbos de ação no imperativo suave:** "Descubra", "Descreva", "Encontre" — não "CLIQUE AQUI"
- **Sem exclamação em headlines** — tom é de autoridade tranquila, não de vitrine
- **Sem adjetivos vazios:** não usar "incrível", "revolucionário", "poderoso"
- **Máximo 12 palavras no headline** — clareza acima de criatividade
- **Sub nunca repete o headline** — deve avançar a narrativa, não parafraseá-la

---

## 4. Do's and Don'ts — Específicos para Estas Páginas

### DO ✅

```
✅ Usar apenas Manrope em todos os elementos de texto
   (incluindo botões — remover Inter da referência B2B)

✅ Aplicar gradiente SOMENTE como fundo/blob no hero
   e como accent no botão "Buscar" (Browser) ou borda da 
   upload zone (Snap)
   → Máximo 2 usos de gradiente por página

✅ Manter fundo #FFFFFF para seções abaixo do hero
   → O gradiente "respira" quando o resto da página é limpo

✅ Border-radius sempre múltiplo de 4:
   Modal: 24px | Cards: 20px | Botões: 12px | Input busca: 12px
   Botão interno busca: 8px (nested, menor que container)

✅ Ícone trevo Doris no modal e no topo do hero
   → Versão branca sobre gradiente / versão colorida sobre branco

✅ CTAs em Manrope ExtraBold 800 — é o peso mais impactante
   e alinhado com a identidade de marca

✅ Placeholder do campo de busca em itálico leve — comunica
   que é uma "frase natural", não um campo técnico

✅ Overlay do modal: rgba(0,0,0,0.72) — não preto puro
   → Mantém leveza visual mesmo em momento de conversão

✅ Botões App Store/Play Store: fundo preto, logo oficial,
   sem alteração de cor ou formato
```

### DON'T ❌

```
❌ NÃO usar Inter como fonte secundária — apenas Manrope
   (violação identificada na B2B ref: .b2b-btn usa font-family: 'Inter')

❌ NÃO aplicar gradiente como fundo de cards de conteúdo
   → Cards usam #EFEFEF. Gradiente é para hero e accents pontuais

❌ NÃO usar mais de 2 variações de gradiente por página
   → Snap: blob hero (Pink→Purple→Blue) + borda upload zone = 2 max
   → Browser: blob hero (Orange→Pink→Purple) + btn busca = 2 max

❌ NÃO criar versão sólida das cores do gradiente (#F56691 sólido 
   como fundo, por exemplo) — o brandbook proíbe uso sólido

❌ NÃO usar gradiente nos botões App Store / Play Store
   → Violação das guidelines das stores E do brandbook

❌ NÃO usar o logo Doris em cores fora do padrão
   → Brandbook: "cores fora do padrão enfraquecem reconhecimento"
   → Em fundo escuro: logo branco | em fundo claro: logo colorido

❌ NÃO usar pesos intermediários (Medium 500) para CTAs
   → CTAs devem ser Bold 700 ou ExtraBold 800 para impacto
   → Medium é para destaques pontuais dentro de texto corrido

❌ NÃO colocar texto sobre a área de pico do gradiente
   → O blob deve sempre estar em posição que não comprometa
      a legibilidade do texto (teste: contraste mínimo 4.5:1 WCAG AA)

❌ NÃO usar border-radius fora da escala de múltiplos de 4
   → Ex: 10px, 15px, 18px são incorretos no sistema Doris

❌ NÃO implementar funcionalidade real na upload zone (Snap)
   e no campo de busca (Browser) — são elementos de UX persuasivo
   que direcionam para o modal/download, não ferramentas reais

❌ NÃO usar exclamação em headlines
   → Tom: autoridade tranquila. Exclamação é publicitário/agressivo
```

---

## 5. Tokens de Referência (para implementação)

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

/* Gradiente — Paleta Completa */
--gradient-orange: #EB907D;
--gradient-pink-1: #F17689;
--gradient-pink-2: #F56691;
--gradient-purple: #EAA2F1;
--gradient-blue-1: #7DB6C5;
--gradient-blue-2: #4CBFF1;

/* Gradiente — Hero Snap (Pink→Purple→Blue) */
--hero-snap-gradient: radial-gradient(
  ellipse 70% 60% at 60% 40%,
  rgba(245, 102, 145, 0.75) 0%,
  rgba(234, 162, 241, 0.60) 40%,
  rgba(76, 191, 241, 0.35) 70%,
  transparent 90%
);

/* Gradiente — Hero Browser (Orange→Pink→Purple) */
--hero-browser-gradient: radial-gradient(
  ellipse 70% 60% at 55% 45%,
  rgba(235, 144, 125, 0.75) 0%,
  rgba(241, 118, 137, 0.60) 35%,
  rgba(234, 162, 241, 0.35) 70%,
  transparent 90%
);

/* Border Radius */
--radius-btn: 12px;
--radius-card: 20px;
--radius-modal: 24px;
--radius-input: 12px;
--radius-btn-nested: 8px;

/* Blur do gradiente */
--gradient-blur: blur(60px);

/* Overlay modal */
--modal-overlay: rgba(0, 0, 0, 0.72);
```

---

*Documento gerado por Uma (UX Design Expert) — Doris Brandbook 2026*  
*Referência de código: `doris-b2b-page.html` | PDFs consultados: Cores, Gradiente, Tipografia, Radius, Do's and Don'ts, Tom, Voz*
