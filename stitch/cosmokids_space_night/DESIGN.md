# Design System Specification: Space Night

## 1. Overview & Creative North Star: "The Neon Observatory"
The Creative North Star for this design system is **"The Neon Observatory."** We are moving away from the flat, sterile "SaaS" dark mode and toward an immersive, tactile universe. This system balances the "chunky" friendliness of a playground with the sophisticated depth of a midnight sky. 

To break the "template" look, we utilize **Intentional Asymmetry**. Containers should not always be perfectly centered or equal in width; use overlapping elements—like a planet-sized button breaking the boundary of a card—to create a sense of three-dimensional space. The experience should feel less like a grid of data and more like a physical dashboard on a spaceship.

---

## 2. Colors & Surface Logic
We avoid pure black (#000000) at all costs to prevent "black crush" and visual fatigue. Depth is built through saturated blues and luminous accents.

### Color Tokens
*   **Background:** `#11131d` (The deep vacuum of space)
*   **Primary (Nebula):** `#d3bbff` | **Container:** `#6d28d9` (Energy and interaction)
*   **Secondary (Star-glow):** `#fff9ef` | **Container:** `#ffdb3c` (Highlight and joy)
*   **Surface Tiers:**
    *   `surface_container_lowest`: `#0c0e18` (Receding elements)
    *   `surface_container_high`: `#282934` (Interactive panels)

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Boundaries must be defined through **Background Color Shifts**. To separate a sidebar from a main feed, use a shift from `surface` to `surface_container_low`. 

### The "Glass & Gradient" Rule
Floating elements (modals, tooltips, navigation bars) must utilize **Glassmorphism**. 
*   **Formula:** `surface_container` at 60% opacity + 20px Backdrop Blur.
*   **Signature Texture:** Use a linear gradient for primary actions: `primary` (#d3bbff) to `primary_container` (#6d28d9) at a 135-degree angle. This provides a "glowing core" effect that flat colors cannot replicate.

---

## 3. Typography: The Playful Navigator
We use **Plus Jakarta Sans** for its geometric clarity and friendly apertures. 

*   **Display (lg/md/sm):** Used for "Hero" moments and astronomical achievements. Use `-0.02em` letter spacing to keep the chunky feel tight and impactful.
*   **Headline & Title:** These are the "Command Center" labels. Always use `bold` or `extra-bold` weights to maintain the "playground" personality against the dark background.
*   **Body (lg/md/sm):** Optimized for readability. Increase line-height to `1.6` for body-lg to ensure the text "breathes" amidst the high-contrast dark theme.
*   **Labels:** Use for metadata. In the "Space Night" context, labels can occasionally use `uppercase` with increased letter spacing to mimic technical spaceship readouts.

---

## 4. Elevation & Depth: Tonal Layering
In "Space Night," depth is not about shadows; it’s about **Luminance and Proximity.**

*   **The Layering Principle:** Physicality is achieved by "stacking." A `surface_container_highest` card sitting on a `surface` background creates an immediate, soft lift.
*   **Ambient Shadows:** If a component must "float" (like a floating action button), use a diffused glow rather than a shadow. 
    *   *Shadow Color:* Use 8% opacity of the `primary` (#d3bbff) or `secondary` (#ffdb3c) token. 
    *   *Blur:* 30px to 40px. This mimics the way light scatters in a nebula.
*   **The "Ghost Border" Fallback:** If a container requires more definition on a dark screen, use the `outline_variant` token at **15% opacity**. This creates a "sheen" on the edge of the glass rather than a hard boundary.

---

## 5. Components: The Cosmic Toolkit

### Buttons (The "Chunky" Standard)
*   **Primary:** High-gloss gradient (`primary` to `primary_container`). Border radius: `xl` (3rem) for a pill shape.
*   **Secondary:** `surface_container_high` with a `secondary` star-glow text color.
*   **Interaction:** On hover, apply a `0px 0px 20px` outer glow using the `surface_tint`.

### Cards & Lists
*   **No Dividers:** Lists are separated by 8px of vertical space or a toggle between `surface_container_low` and `surface_container_lowest`.
*   **Nesting:** Cards should use `md` (1.5rem) or `lg` (2rem) rounded corners to maintain the kid-friendly aesthetic.

### Input Fields
*   **Surface:** Use `surface_container_highest` to make inputs feel "sunken" into the dashboard.
*   **Active State:** The border doesn't just change color; it glows. Use a 2px `secondary_container` stroke with a subtle outer glow.

### New Component: "The Galaxy Orbit" (Progress Indicator)
Instead of a linear progress bar, use concentric circles. As a child completes tasks, the "orbit" (a dashed line using `outline_variant`) fills with a glowing `secondary` yellow.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Overlap a planet icon on the corner of a card to break the grid.
*   **Embrace the Glow:** Use `secondary_container` (#ffdb3c) for small "achievement" sparks or stars throughout the UI.
*   **Check Contrast:** Ensure `on_surface` text sits at a minimum of 7:1 contrast ratio against the deep blue backgrounds.

### Don't:
*   **Don't use 1px solid borders:** It kills the "Space Night" immersion and feels like a generic table.
*   **Don't use pure grey:** Every "neutral" must be tinted with the deep midnight blue (`#11131d`) to maintain the color story.
*   **Don't use sharp corners:** Nothing in the "Cosmic Playground" should be sharp. If the scale says `none` (0px), ignore it—the minimum radius should be `sm` (0.5rem).