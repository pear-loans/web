/* @refresh reload */
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import { Toaster } from "solid-toast";

import App from "🍐/app";
import icons from "🍐/config/icons";

render(
  () => (
    <Router>
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
    </Router>
  ),
  document.body
);
