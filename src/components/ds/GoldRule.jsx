import React from "react";

/** The gold hairline that fades at both ends — the brand's default separator. */
export function GoldRule({ width = "100%", align = "left", thickness = 1, tone = "gold", glow = false, style, ...rest }) {
  const bg =
    tone === "light"
      ? "var(--gradient-rule-light)"
      : tone === "solid"
      ? "var(--gradient-gold-flat)"
      : "var(--gradient-rule-gold)";
  const margin = align === "center" ? "0 auto" : align === "right" ? "0 0 0 auto" : "0";
  return (
    <div
      {...rest}
      aria-hidden="true"
      style={{
        width,
        height: thickness,
        background: bg,
        margin,
        boxShadow: glow ? "0 0 14px rgba(201,164,92,.55)" : "none",
        ...style,
      }}
    />
  );
}
