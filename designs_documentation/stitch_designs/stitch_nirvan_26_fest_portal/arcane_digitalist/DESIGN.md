---
name: Arcane Digitalist
colors:
  surface: '#12131b'
  surface-dim: '#12131b'
  surface-bright: '#383841'
  surface-container-lowest: '#0d0e15'
  surface-container-low: '#1a1b23'
  surface-container: '#1e1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e3e1ed'
  on-surface-variant: '#c5c5d7'
  inverse-surface: '#e3e1ed'
  inverse-on-surface: '#2f3038'
  outline: '#8f8fa0'
  outline-variant: '#454654'
  surface-tint: '#bcc2ff'
  primary: '#bcc2ff'
  on-primary: '#001999'
  primary-container: '#7586ff'
  on-primary-container: '#001587'
  inverse-primary: '#3b4ed6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb0cc'
  on-tertiary: '#640038'
  tertiary-container: '#f2579e'
  on-tertiary-container: '#580030'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bcc2ff'
  on-primary-fixed: '#000c61'
  on-primary-fixed-variant: '#1c32be'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cc'
  on-tertiary-fixed: '#3e0021'
  on-tertiary-fixed-variant: '#8d0051'
  background: '#12131b'
  on-background: '#e3e1ed'
  surface-variant: '#34343d'
typography:
  display-lg:
    fontFamily: Fraunces
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style
The brand personality is "Tech-Fantasy"—a synthesis of historical scholarship and futuristic innovation. It evokes the feeling of a candlelit stone academy rewired with advanced, silent technology. The aesthetic is cinematic and premium, prioritizing high-contrast legibility against a deep, nocturnal void.

The design style is a hybrid of **Minimalism** and **Glassmorphism**, tempered by **Tactile** metallic details. Interfaces should feel like enchanted artifacts: dark, heavy surfaces punctuated by precise, luminous data points and thin, beveled frames that suggest physical craftsmanship within a digital space.

## Colors
The palette is rooted in a deep "Background Void." The core UI is constructed using high-density dark blues, allowing the warm "Primary Text" (parchment-like) and vibrant "Accent" colors to glow as if bioluminescent.

- **Primary (Indigo):** Used for technical actions and systematic highlights.
- **Secondary (Violet):** Used for design-oriented elements and creative flows.
- **Tertiary (Pink):** Dedicated to gaming, high-energy interactions, and alerts.
- **Quaternary (Gold):** Reserved for prestige, rewards, and "fun" categories.
- **Surface Strategy:** Layers are built using incremental luminosity. Background is the deepest level, Surface is the interactive layer, and Surface Hover provides immediate tactile feedback.

## Typography
The typographic hierarchy relies on the tension between the organic, literary curves of **Fraunces** and the clinical, technical precision of **Inter** and **JetBrains Mono**.

- **Fraunces:** Use for all editorial headings. It should feel authoritative and classic.
- **Inter:** Use for all primary body copy and UI labels where legibility is paramount.
- **JetBrains Mono:** Use exclusively for numeric data, tags, and small metadata. All mono text should be set in uppercase for a "computed" aesthetic.

## Layout & Spacing
The layout utilizes a **Fixed Grid** system for desktop to maintain a cinematic, composed feel, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid, 24px gutters, 32px minimum side margins. 
- **Tablet:** 8-column grid, 20px gutters.
- **Mobile:** 4-column grid, 16px gutters, 16px margins.

Spacing follows a base-4 scale. Use generous vertical padding between sections (80px–120px) to allow the "void" background to create a sense of scale and importance.

## Elevation & Depth
Depth is not communicated through traditional shadows, but through **Tonal Layers** and **Luminous Edges**.

1.  **Base Layer:** The Background Void (#0A0B14).
2.  **Surface Layer:** The Surface (#15172A) with a 1px "Hairline" border (#2A2E4A).
3.  **Accent Elevation:** Elements requiring focus use a "Metallic Frame" effect—a subtle inner glow (0.5px) using the Accent Gold or the category's specific color.
4.  **Interactive Depth:** On hover, surfaces brighten to #1E2138 and the hairline border increases in opacity. 

Avoid drop shadows. Use backdrop blurs (12px–20px) on floating menus to maintain the "glass" aesthetic within the stone-like architecture.

## Shapes
Shapes are disciplined and architectural. The "Soft" roundedness (4px–12px) prevents the UI from feeling too aggressive while maintaining a structural, stone-hewn quality.

- **Small Components (Buttons, Inputs):** 4px radius.
- **Large Components (Cards, Modals):** 8px or 12px radius.
- **Beveled Frames:** For high-end cards, use a clipped-corner or 1px inset border to simulate a metallic casing.

## Components
### Buttons
- **Primary:** Solid Gold (#E8B84B) text on a transparent background with a 1px Gold border. On hover, a subtle gold outer glow (4px blur).
- **Secondary:** Muted Text (#9A9DBE) with a Hairline border.

### Content Cards
Cards must sit inside a slim beveled frame. Use a 1px border (#2A2E4A) with a top-down linear gradient that hits a highlight of Gold (#E8B84B) at the top-left corner.

### Tags (Category Specific)
Tags use a "Glow-Text" style:
- **Tech:** Indigo text, Indigo 1px border, 5% Indigo fill.
- **Design:** Violet text, Violet 1px border, 5% Violet fill.
- **Gaming:** Pink text, Pink 1px border, 5% Pink fill.
- **Fun:** Gold text, Gold 1px border, 5% Gold fill.

### Input Fields
Dark backgrounds (#0A0B14) with a Hairline border. On focus, the border transitions to the primary Indigo with a faint inner glow. Text should be JetBrains Mono for a "terminal" feel.

### Lists
Separated by 1px horizontal lines (#2A2E4A). Hover states should use a subtle lateral shift (4px to the right) to indicate interactivity.