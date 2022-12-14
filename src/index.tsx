/* @refresh reload */
import { MetaProvider } from "@solidjs/meta";
import { render } from "solid-js/web";
import { Toaster } from "solid-toast";

import icons from "🍐/config/icons";
import Router from "🍐/router";

const App = () => (
  <MetaProvider>
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
);

render(() => <App />, document.body);

export default App;
