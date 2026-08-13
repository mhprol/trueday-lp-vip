import React from "react";
import { Header } from "./components/page/Header.jsx";
import { Hero } from "./components/page/Hero.jsx";
import { RitualsTabs } from "./components/page/RitualsTabs.jsx";
import { ProofStrip } from "./components/page/ProofStrip.jsx";
import { Footer } from "./components/page/Footer.jsx";

export function App() {
  return (
    <div
      style={{
        background: "var(--td-black)",
        minHeight: "100vh",
        color: "var(--text-body)",
      }}
    >
      <Header />
      <main>
        <Hero />
        <RitualsTabs />
        <ProofStrip />
      </main>
      <Footer />
    </div>
  );
}
