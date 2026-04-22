---
name: Modern Mediterranean Luxury
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#404850'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#707881'
  outline-variant: '#bfc7d1'
  surface-tint: '#006399'
  primary: '#005d90'
  on-primary: '#ffffff'
  primary-container: '#0077b6'
  on-primary-container: '#f3f7ff'
  inverse-primary: '#94ccff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#755b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2a500'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#94ccff'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#004b74'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdf90'
  tertiary-fixed-dim: '#f0c12c'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-x: 80px
  section-padding: 120px
---

## Brand & Style

This design system embodies the essence of a high-end Mediterranean coast retreat. The brand personality is serene, exclusive, and meticulously curated, targeting a discerning audience that values culinary artistry and architectural stillness. 

The visual style is a fusion of **Minimalism** and **Glassmorphism**. It leverages expansive white space to evoke the feeling of a sun-drenched terrace, while translucent layers suggest the shimmering clarity of the sea. The emotional response is one of "aspirational calm"—a quiet confidence where luxury is whispered through fine lines and light rather than shouted through clutter.

## Colors

The palette is anchored by a deep, resonant Azure blue that provides a sophisticated contrast to the pristine white foundations. 
- **Deep Azure Blue**: Reserved for high-impact brand moments, primary calls to action, and meaningful accents.
- **Pure White**: The canvas for the entire experience, ensuring a bright, airy aesthetic.
- **Light Pearl Gray**: Used for subtle section differentiation and card backgrounds to provide depth without breaking the minimalist flow.
- **Champagne Gold**: A metallic accent used sparingly for thin borders, icons, and interactive states to denote "gourmet" quality.

## Typography

The typographic hierarchy relies on the contrast between an elegant, classic serif for storytelling and a refined, technical sans-serif for utility. 

**Noto Serif** is used for all headlines and editorial moments, mimicking the timeless nature of Mediterranean architecture. Large displays should use tighter letter spacing to maintain a cohesive, "sculpted" look. **Manrope** handles all functional text, providing a modern, balanced legibility that feels approachable yet high-end. Use the uppercase label style for navigational items and small metadata to reinforce the boutique aesthetic.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model with extreme generousity in padding. The design system prioritizes "the breath between elements" over density. 

A 12-column grid is utilized, but content is often centered or offset to create an editorial feel. Large margins (80px+) ensure that the content never feels crowded by the browser edges. Section vertical spacing is intentionally tall (120px+) to force a slower, more deliberate scrolling pace, reflecting a relaxed fine-dining experience.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and soft, environmental shadows rather than traditional material stacks.

1.  **Backdrop Blurs**: Headers and navigation overlays must use a high-saturation background blur (20px+) with a semi-transparent white tint (opacity 0.7).
2.  **Floating Shadows**: Elevated elements use a "Sunlight Shadow"—a very soft, diffused drop shadow (Offset 0, 20px Blur, 4% Opacity) that makes cards appear to hover just millimeters above the surface.
3.  **Thin Gold Outlines**: Depth is further defined by 1px Champagne Gold borders on interactive elements, acting as a "jewelry" detail for the UI.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall aesthetic is clean and geometric, the slight rounding on corners prevents the interface from feeling sharp or clinical. This subtle softness mimics hand-finished plaster or smoothed coastal stone. Buttons and image containers should adhere strictly to this rounding to maintain architectural harmony.

## Components

### Buttons
Primary buttons feature a Pure White background, a thin Champagne Gold border, and Azure Blue text. The hover state triggers a "gold sparkle" effect—a subtle shimmer gradient that sweeps across the button face—and a slight elevation increase.

### Cards
Cards utilize the Light Pearl Gray background with a 1px white inner border to create a "glass" edge effect. They must implement a **3D Tilt** interaction on mouse move, creating a tactile sense of weight and premium finish.

### Images & Media
All food photography and atmospheric imagery should utilize a **Magnetic Zoom**. On hover, the image should scale slightly (1.05x) and follow the cursor's movement within its container, emphasizing the texture of the cuisine.

### Inputs
Search and reservation fields are minimalist: a single 1px Gold bottom border that expands to a full 1px Azure outline when focused. The placeholder text should be in the Noto Serif italic style for an editorial touch.

### Menu Lists
Restaurant menus should be presented with high horizontal padding, utilizing the Gold accent for pricing and Azure for dish titles. Staggered fade-ins are required when these lists enter the viewport to simulate the service-oriented grace of the restaurant.