import React from "react";
import { BenefitItem } from "../ds/BenefitItem.jsx";
import { GoldRule } from "../ds/GoldRule.jsx";

const ITEMS = [
  { icon: "gift", title: "100% gratuito", description: "Sem cartão, sem pegadinha" },
  { icon: "headphones", title: "12 áudios diários", description: "Até 10 minutos cada" },
  { icon: "clock", title: "Às 8h da manhã", description: "Direto no grupo" },
  { icon: "heart-handshake", title: "Por Roberta Calderini", description: "60k pacientes atendidos" },
];

/**
 * Horizontal proof strip — four short claims under the tabs.
 * Mirrors the ProofStrip pattern from the loja UI kit.
 */
export function ProofStrip() {
  return (
    <section
      style={{
        background: "var(--td-ink-900)",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--sp-10) 24px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--sp-8)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--sp-8)",
          }}
          className="td-proof-grid"
        >
          {ITEMS.map((it) => (
            <BenefitItem
              key={it.title}
              icon={it.icon}
              title={it.title}
              description={it.description}
              size={42}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .td-proof-grid { grid-template-columns: 1fr 1fr !important; gap: var(--sp-6) !important; }
        }
        @media (max-width: 480px) {
          .td-proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
