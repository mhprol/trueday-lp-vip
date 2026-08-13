import React from "react";
import { Logo } from "../ds/Logo.jsx";
import { GoldRule } from "../ds/GoldRule.jsx";

/**
 * Compliance footer — the line of small caps that appears on every Trueday
 * surface. No promo, no claim — only the legal/healthline stamp.
 */
export function Footer() {
  return (
    <footer
      style={{
        background: "var(--td-black)",
        padding: "var(--sp-12) 0 var(--sp-8)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--sp-5)",
        }}
      >
        <Logo size={20} />
        <GoldRule width="180px" align="center" />
        <p
          style={{
            font: "var(--fw-semibold) var(--fs-2xs)/1.9 var(--font-body)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            textAlign: "center",
            maxWidth: 640,
          }}
        >
          Conteúdo informativo · não substitui acompanhamento profissional
          <br />
          Este programa não é medicamento · sem promessa de cura
        </p>
      </div>
    </footer>
  );
}
