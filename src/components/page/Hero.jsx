import React from "react";
import { Button } from "../ds/Button.jsx";
import { Eyebrow } from "../ds/Eyebrow.jsx";
import { GoldRule } from "../ds/GoldRule.jsx";
import { Icon } from "../ds/Icon.jsx";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/L3cn08CaOnmJI822TgzGrF?s=sh&p=i&ilr=4&amv=1";

/**
 * Hero — full-bleed photo of Roberta on the right, copy stack on the left.
 * Modeled on trueday-lp-conceito.png:
 *   - photo is the section background (right-aligned crop)
 *   - scrim-left fades the photo into a black canvas for the text
 *   - "Pequenas escolhas..." (serif italic) is the headline, with one
 *     gold-gradient word
 *   - subhead has the gold accent
 *   - gold rule, then primary CTA pointing to the WhatsApp group
 *
 * Mobile: photo shrinks to a 60vh banner with a heavier scrim; copy lives
 * under it in a solid-black block.
 */
export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--td-black)",
        overflow: "hidden",
      }}
    >
      {/* Photo — desktop: right-anchored column; mobile: top banner */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(56%, 720px)",
          backgroundImage: `url(${import.meta.env.BASE_URL}photo-roberta-hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center 18%",
        }}
        className="td-hero-photo"
      />
      {/* Scrim — protects text legibility on the left, lets the photo breathe on the right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--scrim-left)",
        }}
        className="td-hero-scrim"
      />
      {/* Faint film grain over the photo for warmth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(56%, 720px)",
          background:
            "radial-gradient(120% 80% at 70% 20%, rgba(201,164,92,0.10), transparent 60%)",
          pointerEvents: "none",
        }}
        className="td-hero-photo td-hero-grain"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--sp-16) 24px var(--sp-20)",
          minHeight: 720,
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          alignItems: "center",
          gap: "var(--sp-12)",
        }}
        className="td-hero-grid"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--sp-5)",
            alignItems: "flex-start",
            maxWidth: 560,
            minWidth: 0, // critical on mobile: lets the column shrink below its content's intrinsic width
          }}
          className="td-hero-text-col"
        >
          {/* Sol nascente mark — drawn as inline SVG so it scales and we
              keep it crisp on every viewport. Mirrors logo-mark-dark.png. */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            style={{ marginBottom: 4 }}
          >
            <g
              stroke="var(--td-gold-400)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="32" cy="40" r="6" fill="var(--td-gold-400)" />
              <line x1="32" y1="22" x2="32" y2="26" />
              <line x1="32" y1="54" x2="32" y2="58" />
              <line x1="18" y1="40" x2="22" y2="40" />
              <line x1="42" y1="40" x2="46" y2="40" />
              <line x1="22.5" y1="30.5" x2="25.5" y2="33.5" />
              <line x1="38.5" y1="46.5" x2="41.5" y2="49.5" />
              <line x1="22.5" y1="49.5" x2="25.5" y2="46.5" />
              <line x1="38.5" y1="33.5" x2="41.5" y2="30.5" />
            </g>
          </svg>

          <Eyebrow tone="gold">Grupo VIP · Rituais diários</Eyebrow>

          {/* Headline — serif italic voice, with one gold-gradient word.
              Pattern matches trueday-lp-conceito.png ("...criam uma grande transformacao") */}
          <h1
            style={{
              margin: 0,
              font: "var(--fw-regular) var(--fs-4xl)/1.04 var(--font-serif-display)",
              textTransform: "none",
              color: "var(--td-white)",
              letterSpacing: "-0.005em",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              minWidth: 0,
            }}
            className="td-hero-headline"
          >
            Pequenas escolhas diárias criam uma{" "}
            <span
              style={{
                fontWeight: "var(--fw-bold)",
                fontStyle: "italic",
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              grande transformação.
            </span>
          </h1>

          {/* Subhead — body voice, with a gold-italic accent phrase */}
          <p
            style={{
              maxWidth: 480,
              font: "var(--type-body-lg)",
              color: "var(--text-body)",
              margin: 0,
              minWidth: 0,
            }}
            className="td-hero-sub"
          >
            Rituais diários te ajudam a cuidar de você,{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
              }}
            >
              por dentro e por fora.
            </span>
          </p>

          <GoldRule width="240px" glow />

          {/* CTA — primary, full-width on mobile, auto on desktop.
              Opens WhatsApp group invite in a new tab. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--sp-3)",
              alignItems: "flex-start",
              width: "100%",
              minWidth: 0, // critical on mobile: prevents the CTA from forcing the column wider than the viewport
            }}
            className="td-hero-cta"
          >
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              iconRight="arrow-right"
              fullWidth
              style={{ whiteSpace: "normal", minWidth: 0 }}
            >
              Entrar no grupo VIP gratuito
            </Button>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                font: "var(--type-eyebrow)",
                letterSpacing: "var(--ls-label)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              <Icon name="shield-check" size={14} color="var(--td-gold-500)" strokeWidth={2} />
              Link seguro · abre o WhatsApp
            </span>
          </div>
        </div>

        {/* Right column: only visible on desktop as a spacer; on mobile the
            photo is the top banner above. Keeps the grid balanced. */}
        <div aria-hidden="true" className="td-hero-spacer" />
      </div>

      {/* Mobile-only scroll cue — sits below the photo on small screens */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--td-gold-400)",
          animation: "td-bob 2.4s var(--ease-standard) infinite",
        }}
        className="td-hero-cue"
      >
        <Icon name="chevron-down" size={28} color="var(--td-gold-400)" strokeWidth={1.6} />
      </div>

      {/* Responsive overrides — kept inline so the component is self-contained */}
      <style>{`
        @keyframes td-bob {
          0%, 100% { transform: translate(-50%, 0); opacity: .9; }
          50%      { transform: translate(-50%, 8px); opacity: 1; }
        }
        @keyframes td-bob-static {
          0%, 100% { transform: translateY(0); opacity: .85; }
          50%      { transform: translateY(6px); opacity: 1; }
        }
        @media (max-width: 900px) {
          .td-hero-photo {
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            width: 100% !important;
            height: 32vh !important; /* was 62vh -> 38vh -> 32vh: keeps CTA above the fold even on 800px viewports */
            background-position: center 24% !important;
          }
          .td-hero-grain { display: none; }
          .td-hero-scrim {
            background: linear-gradient(180deg, rgba(7,7,10,.12) 0%, rgba(7,7,10,.40) 28%, rgba(7,7,10,.88) 62%, rgba(7,7,10,.98) 100%) !important;
          }
          .td-hero-text-col { gap: var(--sp-3) !important; } /* tighter internal gaps to keep CTA above the fold */
          .td-hero-grid {
            grid-template-columns: 1fr !important;
            min-height: 0 !important;
            padding-top: 40vh !important; /* was 70vh -> 46vh -> 40vh */
            padding-bottom: 56px !important;
          }
          .td-hero-spacer { display: none; }
          .td-hero-headline { font-size: 30px !important; line-height: 1.08 !important; } /* was 36 -> 32 -> 30 */
          .td-hero-sub { font-size: 15px !important; }
          .td-hero-cue {
            display: block !important;
            position: static !important;
            margin: var(--sp-6) auto 0 !important; /* tighter above the tabs */
            transform: none !important;
            text-align: center !important;
            animation: td-bob-static 2.4s var(--ease-standard) infinite;
          }
        }
        @media (max-width: 420px) {
          .td-hero-headline { font-size: 24px !important; line-height: 1.12 !important; }
          .td-hero-grid { padding-top: 34vh !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .td-hero-headline { font-size: 42px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .td-hero-cue { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
