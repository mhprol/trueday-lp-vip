import React from "react";
import { Icon } from "./Icon.jsx";

const TONES = {
  gold: { bg: "rgba(201,164,92,.12)", fg: "var(--td-gold-200)", bd: "var(--border-gold)" },
  metal: { bg: "var(--gradient-gold)", fg: "var(--text-on-gold)", bd: "var(--td-gold-600)" },
  balance: { bg: "var(--product-balance-tint)", fg: "var(--td-blue-300)", bd: "rgba(30,143,203,.5)" },
  pulse: { bg: "var(--product-pulse-tint)", fg: "var(--td-red-300)", bd: "rgba(200,16,46,.55)" },
  ink: { bg: "var(--td-ink-700)", fg: "var(--text-body)", bd: "var(--border-hairline)" },
  ivory: { bg: "var(--td-ivory-200)", fg: "var(--text-title-light)", bd: "var(--border-hairline-light)" },
};

/** Small status/claim badge — "USO DIÁRIO", "OFERTA DE LANÇAMENTO", "60 CÁPSULAS". */
export function Badge({ tone = "gold", size = "md", icon, shape = "pill", children, style, ...rest }) {
  const t = TONES[tone] || TONES.gold;
  const sm = size === "sm";
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: sm ? 5 : 7,
        height: sm ? 20 : 26,
        padding: sm ? "0 8px" : "0 12px",
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-xs)",
        font: `var(--fw-bold) ${sm ? "var(--fs-2xs)" : "var(--fs-xs)"}/1 var(--font-body)`,
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        boxShadow: tone === "metal" ? "var(--inset-metal)" : "none",
        ...style,
      }}
    >
      {icon ? <Icon name={icon} size={sm ? 11 : 13} color="currentColor" strokeWidth={2} /> : null}
      {children}
    </span>
  );
}
