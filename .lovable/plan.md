

## Problem

The triangle `SectionDivider` before the footer shows a white sub-pixel line in mobile Safari. The wave dividers were fixed by adding `marginBottom: '-2px'`, but the same fix was never applied to `SectionDivider.tsx`.

## Fix

**File: `src/components/SectionDivider.tsx`**

Add `marginBottom: '-2px'` to the container's style, matching the approach that already works for the wave dividers:

```tsx
style={{
  backgroundColor: toColor,
  transform: 'translateY(-2px)',
  marginBottom: '-2px',
  willChange: 'transform',
}}
```

One line added. No other files need changes.

