/* @refresh reload */
import { MetaProvider, Title } from "@solidjs/meta";
import { render } from "solid-js/web";
import { Toaster } from "solid-toast";

import icons from "🍐/config/icons";
import Router from "🍐/router";

render(
  () => (
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
      <Router />
    </MetaProvider>
  ),
  document.body
);
