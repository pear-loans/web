import { Route, Routes } from "@solidjs/router";
import type { JSX } from "solid-js";
import { lazy } from "solid-js";

import Header from "🍐/components/layout/header";
import Main from "🍐/components/layout/main";
import AccountData from "🍐/pages/Account.data";
import Home from "🍐/pages/Home.page";

const About = lazy(async () => await import("🍐/pages/About.page"));
const Account = lazy(async () => await import("🍐/pages/Account.page"));
const Donate = lazy(async () => await import("🍐/pages/Donate.page"));

const AppRouter = (): JSX.Element => (
  <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} data={AccountData} />
        <Route path="/donate" component={Donate} />
      </Routes>
    </Main>
  </>
);

export default AppRouter;
