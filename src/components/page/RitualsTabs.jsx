import React from "react";
import { Tabs } from "../ds/Tabs.jsx";
import { Button } from "../ds/Button.jsx";
import { Card } from "../ds/Card.jsx";
import { BenefitItem } from "../ds/BenefitItem.jsx";
import { Icon } from "../ds/Icon.jsx";
import { Eyebrow } from "../ds/Eyebrow.jsx";
import { GoldRule } from "../ds/GoldRule.jsx";
import { trackVipClick } from "../../lib/track.js";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/L3cn08CaOnmJI822TgzGrF?s=sh&p=i&ilr=4&amv=1";

const T1_BENEFITS = [
  { icon: "headphones", title: "12 áudios curtos", description: "Cada ritual tem até 10 minutos — ouve no seu tempo." },
  { icon: "calendar", title: "Todos os dias, às 8h", description: "Receba direto no grupo, no mesmo horário, sem perder o fio." },
  { icon: "sparkles", title: "Emocional + libido", description: "Acalma por dentro, acende por fora. Corpo, mente e desejo." },
  { icon: "gift", title: "100% gratuito", description: "Sem pegadinha, sem cartão. Só o ritual." },
];

const T2_PHASES = [
  {
    range: "Dias 1 a 3",
    title: "Acolhimento",
    description: "Corpo, respiração, presença. A gente começa voltando pra você — antes de qualquer técnica.",
    icon: "flower",
  },
  {
    range: "Dias 4 a 7",
    title: "Emoções",
    description: "Padrões, gatilhos, nomeação. Onde a ansiedade mora, onde o desejo foi embora — e como chegar perto.",
    icon: "brain",
  },
  {
    range: "Dias 8 a 10",
    title: "Desejo",
    description: "Libido, prazer, reconexão. A devolução do corpo como lugar de presença, não de cobrança.",
    icon: "flame",
  },
  {
    range: "Dias 11 e 12",
    title: "Integração",
    description: "O que fica, o que muda. Dois dias pra fechar o ciclo e levar o ritual pra dentro da rotina.",
    icon: "sunrise",
  },
];

function Tab1Content() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: "var(--sp-12)",
        alignItems: "stretch",
      }}
      className="td-tab-grid"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--sp-5)",
          minWidth: 0, // critical on mobile: lets the column shrink below intrinsic content width
        }}
      >
        <Eyebrow tone="gold">O que você vai receber</Eyebrow>
        <h3
          style={{
            margin: 0,
            font: "var(--fw-extrabold) var(--fs-2xl)/1.12 var(--font-body)",
            letterSpacing: "var(--ls-heading)",
            textTransform: "uppercase",
            color: "var(--text-title)",
            maxWidth: 480,
            overflowWrap: "break-word",
            wordWrap: "break-word",
            minWidth: 0,
          }}
        >
          12 áudios diários com rituais{" "}
          <span
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            pensados para você.
          </span>
        </h3>
        <GoldRule width="200px" />
        <p
          style={{
            margin: 0,
            font: "var(--type-body-lg)",
            color: "var(--text-body)",
            maxWidth: 520,
            minWidth: 0,
          }}
        >
          Todo dia, um áudio novo no grupo. Curto, denso, transformador.
          Você ouve em casa, no trânsito, antes de dormir — onde fizer sentido.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--sp-5)",
            marginTop: "var(--sp-3)",
          }}
          className="td-benefits-grid"
        >
          {T1_BENEFITS.map((b) => (
            <BenefitItem
              key={b.title}
              icon={b.icon}
              title={b.title}
              description={b.description}
              size={48}
            />
          ))}
        </div>
      </div>

      {/* The "card" panel — the offer in one glance */}
      <Card
        variant="premium"
        padding="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--sp-5)",
          alignSelf: "start",
          position: "relative",
          minWidth: 0, // critical on mobile: lets the card shrink to the column
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--sp-3)",
          }}
        >
          <Icon name="bell" size={40} circled color="var(--td-gold-400)" />
          <div>
            <div
              style={{
                font: "var(--fw-bold) var(--fs-sm)/1.2 var(--font-body)",
                letterSpacing: "var(--ls-label)",
                textTransform: "uppercase",
                color: "var(--td-white)",
              }}
            >
              Grupo VIP no WhatsApp
            </div>
            <div
              style={{
                font: "var(--type-body-sm)",
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              De 31/08 a 12/09 · todos os dias às 8h, descanso no domingo.
            </div>
          </div>
        </div>

        <GoldRule />

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--sp-3)",
          }}
        >
          {[
            "12 áudios diários com rituais curtos",
            "Curadoria de Roberta Calderini",
            "100% gratuito, sem cartão",
            "Acesso pelo WhatsApp, sem app extra",
          ].map((line) => (
            <li
              key={line}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--sp-3)",
                font: "var(--type-body)",
                color: "var(--text-body)",
              }}
            >
              <Icon
                name="circle-check"
                size={18}
                color="var(--td-gold-400)"
                strokeWidth={2}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <Button
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          iconRight="arrow-right"
          fullWidth
          onClick={() => trackVipClick("card")}
          style={{ marginTop: "var(--sp-2)", whiteSpace: "normal", minWidth: 0 }}
        >
          Entrar no grupo VIP gratuito
        </Button>

        <span
          style={{
            font: "var(--type-eyebrow)",
            letterSpacing: "var(--ls-label)",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            textAlign: "center",
            display: "block",
          }}
        >
          Vagas abertas · entrada imediata
        </span>
      </Card>
    </div>
  );
}

function Tab2Content() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-8)" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--sp-4)",
          maxWidth: 760,
        }}
      >
        <Eyebrow tone="gold">Sobre os rituais</Eyebrow>
        <h3
          style={{
            margin: 0,
            font: "var(--fw-extrabold) var(--fs-2xl)/1.12 var(--font-body)",
            letterSpacing: "var(--ls-heading)",
            textTransform: "uppercase",
            color: "var(--text-title)",
          }}
        >
          Cada dia, um{" "}
          <span
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ritual diferente.
          </span>
        </h3>
        <GoldRule width="200px" />
        <p
          style={{
            margin: 0,
            font: "var(--type-body-lg)",
            color: "var(--text-body)",
            maxWidth: 640,
          }}
        >
          Os 12 áudios foram desenhados por Roberta Calderini — neuropsicóloga,
          criadora da Neuropsicogenealogia, 1,6 milhão de seguidores e 60 mil
          pacientes atendidos. Cada ritual trabalha uma frente em camadas, do
          mais simples ao mais profundo. Sem lição de casa, sem cobrança — tem
          constância.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--sp-5)",
        }}
        className="td-phases-grid"
      >
        {T2_PHASES.map((p) => (
          <Card
            key={p.title}
            variant="dark"
            padding="md"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--sp-3)",
              height: "100%",
            }}
          >
            <Icon name={p.icon} size={42} circled color="var(--td-gold-400)" />
            <span
              style={{
                font: "var(--type-eyebrow)",
                letterSpacing: "var(--ls-label)",
                textTransform: "uppercase",
                color: "var(--td-gold-400)",
              }}
            >
              {p.range}
            </span>
            <div
              style={{
                font: "var(--fw-extrabold) var(--fs-lg)/1.2 var(--font-body)",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                color: "var(--text-title)",
              }}
            >
              {p.title}
            </div>
            <p
              style={{
                margin: 0,
                font: "var(--type-body-sm)",
                color: "var(--text-muted)",
                lineHeight: 1.55,
              }}
            >
              {p.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Author ribbon + second CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--sp-6)",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--sp-3)",
            color: "var(--text-muted)",
            font: "var(--type-body-sm)",
          }}
        >
          <Icon name="heart-handshake" size={20} color="var(--td-gold-400)" strokeWidth={1.6} />
          Curadoria de{" "}
          <span style={{ color: "var(--td-white)", fontWeight: 600 }}>
            Roberta Calderini
          </span>{" "}
          · Neuropsicologia · 60k pacientes
        </div>
        <Button
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          iconRight="arrow-right"
          onClick={() => trackVipClick("ribbon")}
        >
          Quero participar
        </Button>
      </div>
    </div>
  );
}

export function RitualsTabs() {
  const [tab, setTab] = React.useState("receber");

  return (
    <section
      id="rituais"
      style={{
        background: "var(--td-black)",
        padding: "var(--section-y) 0",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--sp-10)",
        }}
      >
        <Tabs
          items={[
            { value: "receber", label: "O que você vai receber" },
            { value: "rituais", label: "Sobre os rituais" },
          ]}
          value={tab}
          onChange={setTab}
          size="md"
        />
        <div key={tab} style={{ animation: "td-fade 380ms var(--ease-out)" }}>
          {tab === "receber" ? <Tab1Content /> : <Tab2Content />}
        </div>
      </div>
      <style>{`
        @keyframes td-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .td-tab-grid { grid-template-columns: 1fr !important; gap: var(--sp-8) !important; }
          .td-benefits-grid { grid-template-columns: 1fr 1fr !important; }
          .td-phases-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .td-benefits-grid, .td-phases-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="td-fade"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
