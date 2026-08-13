import React from "react";

/** Trueday surface. Squared-off, hairline border; `premium` swaps to a gold edge + glow. */
export function Card({
  variant = "dark",
  padding = "md",
  interactive = false,
  glow,
  as = "div",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const h = interactive && hover;
  const pads = { none: 0, sm: "var(--sp-4)", md: "var(--sp-6)", lg: "var(--sp-8)" };
  const skins = {
    dark: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--text-body)" },
    raised: { background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", color: "var(--text-body)" },
    premium: { background: "var(--surface-card)", border: "1px solid var(--border-gold)", color: "var(--text-body)" },
    light: { background: "var(--surface-card-light)", border: "1px solid var(--border-hairline-light)", color: "var(--text-body-light)" },
    ivory: { background: "var(--surface-inset-light)", border: "1px solid var(--border-hairline-light)", color: "var(--text-body-light)" },
  };
  const sk = skins[variant] || skins.dark;
  const light = variant === "light" || variant === "ivory";
  const glowShadow = glow ? `var(--glow-${glow})` : null;
  const base = light ? "var(--shadow-light-md)" : "var(--shadow-md)";
  const lifted = light ? "var(--shadow-light-lg)" : "var(--shadow-lg)";
  const Tag = as;
  return (
    <Tag
      {...rest}
      onMouseEnter={interactive ? () => setHover(true) : rest.onMouseEnter}
      onMouseLeave={interactive ? () => setHover(false) : rest.onMouseLeave}
      style={{
        borderRadius: "var(--radius-card)",
        padding: pads[padding] ?? pads.md,
        boxShadow: [h ? lifted : base, glowShadow, variant === "premium" ? "var(--glow-gold)" : null]
          .filter(Boolean)
          .join(", "),
        transform: h ? "translateY(var(--lift-y))" : "none",
        transition: "var(--transition-lift), var(--transition-control)",
        cursor: interactive ? "pointer" : undefined,
        ...sk,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
