import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  sm: { h: "var(--control-h-sm)", px: "16px", fs: "var(--fs-xs)", ls: "0.12em", gap: "8px", ico: 15 },
  md: { h: "var(--control-h-md)", px: "24px", fs: "var(--fs-sm)", ls: "0.14em", gap: "10px", ico: 17 },
  lg: { h: "var(--control-h-lg)", px: "34px", fs: "var(--fs-base)", ls: "0.14em", gap: "12px", ico: 19 },
};

function skin(variant, hover, active, onLight) {
  if (variant === "primary")
    return {
      background: hover ? "var(--gradient-gold-flat)" : "var(--gradient-gold)",
      color: "var(--text-on-gold)",
      border: "1px solid var(--td-gold-600)",
      boxShadow: active
        ? "var(--inset-metal)"
        : hover
        ? "var(--inset-metal), var(--glow-gold)"
        : "var(--inset-metal)",
    };
  if (variant === "secondary")
    return {
      background: hover ? "rgba(201,164,92,.10)" : "transparent",
      color: onLight ? "var(--td-gold-600)" : "var(--td-gold-200)",
      border: `1px solid ${hover ? "var(--border-gold-strong)" : onLight ? "var(--border-gold-light)" : "var(--border-gold)"}`,
      boxShadow: "none",
    };
  if (variant === "ghost")
    return {
      background: hover ? (onLight ? "rgba(12,12,16,.05)" : "rgba(255,255,255,.06)") : "transparent",
      color: onLight ? "var(--text-body-light)" : "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none",
    };
  return {
    background: hover ? "var(--td-ink-700)" : "var(--td-ink-800)",
    color: "var(--td-white)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "none",
  };
}

/** Trueday action button. Primary is the metallic gold plate; caps + wide tracking always. */
export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  onLight = false,
  href,
  type = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const sk = skin(variant, hover && !disabled, active && !disabled, onLight);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      {...rest}
      href={href}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.h,
        padding: `0 ${s.px}`,
        borderRadius: "var(--radius-control)",
        font: `var(--fw-bold) ${s.fs}/1 var(--font-body)`,
        letterSpacing: s.ls,
        textTransform: "uppercase",
        textDecoration: "none",
        whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.42 : 1,
        transform: active && !disabled ? "scale(var(--press-scale))" : "none",
        transition: "var(--transition-control), transform var(--dur-fast) var(--ease-standard)",
        ...sk,
        ...style,
      }}
    >
      {iconLeft ? <Icon name={iconLeft} size={s.ico} color="currentColor" strokeWidth={2} /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} size={s.ico} color="currentColor" strokeWidth={2} /> : null}
    </Tag>
  );
}
