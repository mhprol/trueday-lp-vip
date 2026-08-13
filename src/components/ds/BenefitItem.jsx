import React from "react";
import { Icon } from "./Icon.jsx";

/** Icon + claim row. The atom of every Trueday benefit list. */
export function BenefitItem({
  icon,
  title,
  description,
  tone = "gold",
  layout = "row",
  circled = true,
  size = 44,
  onLight = false,
  style,
  ...rest
}) {
  const color = tone === "balance" ? "var(--product-balance)" : tone === "pulse" ? "var(--product-pulse)" : onLight ? "var(--td-gold-600)" : "var(--td-gold-400)";
  const column = layout === "column";
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: column ? "column" : "row",
        alignItems: column ? "center" : "flex-start",
        textAlign: column ? "center" : "left",
        gap: column ? "var(--sp-3)" : "var(--sp-4)",
        ...style,
      }}
    >
      <Icon name={icon} size={size} color={color} circled={circled} strokeWidth={1.5} />
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          style={{
            font: `var(--fw-bold) ${column ? "var(--fs-xs)" : "var(--fs-sm)"}/1.25 var(--font-body)`,
            letterSpacing: column ? "var(--ls-label)" : "0.03em",
            textTransform: "uppercase",
            color: onLight ? "var(--text-title-light)" : "var(--text-title)",
          }}
        >
          {title}
        </span>
        {description ? (
          <span style={{ font: "var(--type-body-sm)", fontSize: "var(--fs-xs)", color: onLight ? "var(--text-muted-light)" : "var(--text-muted)" }}>
            {description}
          </span>
        ) : null}
      </div>
    </div>
  );
}
