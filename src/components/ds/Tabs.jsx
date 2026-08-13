import React from "react";

/** Underlined tab bar. Active tab is gold with a 2px gold underline. */
export function Tabs({ items = [], value, defaultValue, onChange, size = "md", onLight = false, style, ...rest }) {
  const first = items.length ? (typeof items[0] === "string" ? items[0] : items[0].value) : undefined;
  const isControlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const current = isControlled ? value : inner;
  const pick = (v) => {
    if (!isControlled) setInner(v);
    onChange && onChange(v);
  };
  const fs = size === "sm" ? "var(--fs-xs)" : "var(--fs-sm)";
  return (
    <div
      {...rest}
      role="tablist"
      style={{
        display: "flex",
        gap: "var(--sp-8)",
        borderBottom: `1px solid ${onLight ? "var(--border-hairline-light)" : "var(--border-hairline)"}`,
        ...style,
      }}
    >
      {items.map((it) => {
        const v = typeof it === "string" ? it : it.value;
        const l = typeof it === "string" ? it : it.label;
        const on = current === v;
        return (
          <button
            key={v}
            role="tab"
            aria-selected={on}
            type="button"
            onClick={() => pick(v)}
            style={{
              position: "relative",
              padding: `0 0 ${size === "sm" ? 10 : 14}px`,
              background: "none",
              border: "none",
              cursor: "pointer",
              font: `var(--fw-bold) ${fs}/1 var(--font-body)`,
              letterSpacing: "var(--ls-label)",
              textTransform: "uppercase",
              color: on ? "var(--td-gold-300)" : onLight ? "var(--text-muted-light)" : "var(--text-muted)",
              transition: "var(--transition-control)",
            }}
          >
            {l}
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -1,
                height: 2,
                background: on ? "var(--gradient-gold-flat)" : "transparent",
                transition: "var(--transition-control)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
