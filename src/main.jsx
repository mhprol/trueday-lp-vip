import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./App.jsx";

// Two hosts, one bundle:
//  - standalone (GitHub Pages) mounts on #root
//  - embedded in a GoHighLevel funnel page, the Code element provides
//    #td-vip-root, because #root may not exist (or may belong to the host).
// If neither node is present we do nothing instead of throwing — a crash here
// would take the whole host page's JS down with it.
const mount =
  document.getElementById("td-vip-root") || document.getElementById("root");

if (mount) {
  ReactDOM.createRoot(mount).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.warn("[trueday-lp-vip] no mount node (#td-vip-root / #root) found");
}
