import React from "react";

/**
 * Trueday wordmark. `type` composes TRUE + DAY in live type (works on any background);
 * `mark` and `lockup` render the supplied raster assets.
 */
export function Logo({
  as = "type",
  size = 34,
  tagline = true,
  tone = "onDark",
  src,
  style,
  ...rest
}) {
  if ((as === "mark" || as === "lockup") && src) {
    return (
      <img
        {...rest}
        src={src}
        alt="Trueday Nutrition Essentials"
        style={{ height: as === "mark" ? size : size * 1.9, width: "auto", ...style }}
      />
    );
  }
  const trueColor = tone === "onLight" ? "var(--td-ink-900)" : "var(--td-white)";
  const dayGold = tone === "flat" ? { color: "var(--td-gold-400)" } : {
    background: "var(--gradient-gold)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  return (
    <span
      {...rest}
      aria-label="Trueday Nutrition Essentials"
      style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: Math.max(3, size * 0.11), ...style }}
    >
      <span
        style={{
          font: `var(--fw-extrabold) ${size}px/1 var(--font-sans)`,
          letterSpacing: "var(--ls-wordmark)",
          whiteSpace: "nowrap",
          color: trueColor,
        }}
      >
        TRUE<span style={dayGold}>DAY</span>
      </span>
      {tagline ? (
        <span
          style={{
            font: `var(--fw-medium) ${Math.max(7, size * 0.235)}px/1 var(--font-sans)`,
            letterSpacing: "var(--ls-tagline)",
            textIndent: "var(--ls-tagline)",
            color: tone === "onLight" ? "rgba(12,12,16,.66)" : "rgba(255,255,255,.72)",
            whiteSpace: "nowrap",
          }}
        >
          NUTRITION ESSENTIALS
        </span>
      ) : null}
    </span>
  );
}
