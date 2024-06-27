import React from "react";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const manifestLink =
  "https://github.com/theariansalmanzadeh/tonWallet/blob/main/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl={manifestLink}
      uiPreferences={{ theme: THEME.DARK }}
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/DemoDappWithTonConnectBot/demo",
      }}
    >
      <App />
    </TonConnectUIProvider>
    
  </React.StrictMode>
);
