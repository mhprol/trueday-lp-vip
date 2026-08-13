import React from "react";

/** Wide-tracked uppercase eyebrow that sits above every Trueday headline. */
export function Eyebrow({ tone = "gold", size = "md", rule = false, children, style, ...rest }) {
  const tones = {
    gold: "var(--td-gold-400)",
    light: "var(--td-gold-600)",
    white: "rgba(255,255,255,.66)",
    ink: "rgba(12,12,16,.56)",
    balance: "var(--td-blue-400)",
    pulse: "var(--td-red-400)",
  };
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--sp-3)",
        color: tones[tone] || tones.gold,
        font: `var(--fw-semibold) ${size === "sm" ? "var(--fs-2xs)" : "var(--fs-xs)"}/1.2 var(--font-body)`,
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        ...style,
      }}
    >
      <span>{children}</span>
      {rule ? (
        <span style={{ flex: 1, height: 1, background: "var(--gradient-rule-gold)", opacity: 0.8 }} />
      ) : null}
    </div>
  );
}
