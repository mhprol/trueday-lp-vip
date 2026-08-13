import React from "react";
import { Logo } from "../ds/Logo.jsx";
import { Badge } from "../ds/Badge.jsx";

/**
 * Sticky top bar: brand mark on the left, the trust badge on the right.
 * Stays slim (one line) at all viewports — the hero carries the visual weight.
 */
export function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "var(--glass-dark)",
        backdropFilter: "var(--blur-glass)",
        WebkitBackdropFilter: "var(--blur-glass)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Logo size={20} tagline={false} />
        <Badge tone="metal" size="sm" icon="gift">
          100% gratuito
        </Badge>
      </div>
    </header>
  );
}
