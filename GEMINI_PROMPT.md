# Gemini 3D Development Prompt

Copy everything below this line and paste it into Gemini:

---

## Context

I'm building a redesigned website for Global Team Plans (globalteamplans.com) - an Employee Assistance Programme (EAP) provider covering 180+ countries, 35M+ lives, 50+ languages. This is a professional B2B enterprise site - the design needs to feel premium and trustworthy, not flashy or gimmicky.

The site uses:

- **Astro 5** (static site generator)
- **React 19** (for interactive islands)
- **Three.js + React Three Fiber + @react-three/drei** (already installed)
- **Tailwind CSS 4**
- **Dark theme** with teal (#00BCD4) accent on deep navy (#0A0F1C) background

I need you to build a **single 3D React component** - an interactive globe for the hero section. This is the one piece of 3D on the entire site, so it needs to be polished and purposeful.

---

## Task: Hero Globe

**File: `src/components/HeroGlobe.tsx`**

Build an interactive 3D globe for the hero section. It communicates the company's global reach across 180+ countries - every visual choice should reinforce that message.

### Props:

```tsx
interface HeroGlobeProps {
  className?: string;
}
```

### Visual Design:

**The globe itself:**
- A sphere made of small dots placed at geographic coordinates (like a dotted world map projected onto a sphere)
- Dots representing land masses should be teal (#00BCD4)
- Ocean areas should have no dots (or very faint, nearly invisible dots for the wireframe outline)
- The overall effect should look like a premium data visualization - think Bloomberg Terminal or a high-end consultancy deck

**Connection arcs:**
- Animated curved lines (great circle arcs) connecting pairs of dots across the globe
- These represent the global network - connections between regions
- 3-5 arcs visible at any time, cycling: fade in, hold briefly, fade out
- Arcs should be teal with ~0.3-0.5 opacity, thin lines
- Each arc should have a small traveling dot/pulse moving along it (like data flowing through the network)

**Atmosphere:**
- A very subtle fresnel-edge glow around the globe (teal, low opacity)
- This should be barely noticeable - just enough to give the globe depth against the dark background

**What NOT to do:**
- No random floating particles
- No starfield background
- No bloom/glow post-processing effects
- No lens flare
- Nothing that looks like a sci-fi movie or crypto website

### Interaction:
- **Auto-rotate**: Slow, steady rotation on Y-axis (~0.001 rad/frame)
- **Mouse parallax** (desktop only): Globe tilts slightly toward cursor (max 5 degrees). Smooth, dampened movement.
- **Mobile**: Auto-rotate only, no mouse tracking
- **No user drag/orbit controls** - this is a background element, not interactive

### Performance:
- Globe sphere: ~50 segments
- Dot count: 2000-3000 land dots
- DPR capped at 2: `dpr={[1, 2]}`
- On mobile (< 768px width): reduce dot count by half, disable mouse tracking
- The globe should load gracefully - no flash of white or jarring pop-in

### Component Structure:

```tsx
import { Canvas } from '@react-three/fiber';

export default function HeroGlobe({ className }: HeroGlobeProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Globe scene */}
      </Canvas>
    </div>
  );
}
```

### Color Reference:
```
Teal:       #00BCD4 → new THREE.Color(0x00BCD4)
Background: transparent canvas (dark navy page shows through)
Land dots:  #00BCD4 (teal, full opacity)
Arcs:       #00BCD4 at 0.3-0.5 opacity
Atmosphere: #00BCD4 at 0.08-0.12 opacity (fresnel edge only)
```

### Land mass data approach:
- You can approximate land coordinates by generating latitude/longitude pairs and filtering out ocean areas using a simple algorithm (e.g., check if a lat/lon point is roughly within known continental bounds)
- Or use a simplified noise-based approach where dots cluster in patterns that resemble continents
- Exact geographic accuracy isn't required - it just needs to be recognizable as Earth

---

## Technical Requirements:

1. **React Three Fiber only** - import from `@react-three/fiber` and `@react-three/drei`
2. **Single self-contained `.tsx` file** - no external assets, textures, or JSON data files
3. **TypeScript** with exported interface
4. **Transparent canvas** - the dark page background shows through
5. **Use `useFrame`** for all animations
6. **Error handling** - wrap the Canvas in a try/catch or error boundary so the page works even if WebGL fails. If WebGL isn't available, render nothing (the page has a CSS gradient fallback behind it)
7. **No console.log** or debug output

The component will be used in Astro like this:
```astro
---
import HeroGlobe from '../components/HeroGlobe.tsx';
---
<HeroGlobe client:visible className="absolute inset-0 z-0" />
```

Please provide the complete, production-ready code for `HeroGlobe.tsx`.
