/* @refresh reload */
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import { Toaster } from "solid-toast";

import App from "🍐/app";
import icons from "🍐/config/icons";

render(
  () => (
    <Router>
      <MetaProvider>
        <Title>Pear Loans</Title>
        <Toaster
          gutter={10}
          position="top-center"
          toastOptions={{
            ariaProps: {
              "aria-live": "polite",
              role: "status",
            },
            icon: icons.info,
          }}
        />
        <App />
      </MetaProvider>
    </Router>
  ),
  document.body
);
