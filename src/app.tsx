import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Routes } from "@solidjs/router";
import type { JSX } from "solid-js";
import { lazy } from "solid-js";

import Header from "🍐/layout/header";
import Main from "🍐/layout/main";
import AccountData from "🍐/pages/Account.data";
import Home from "🍐/pages/Home.page";

// TODO: Think if you like this stytle? Standard requires these to use async () => await in this
// secnario, where just doing () => import() is cleaner. Current variant is more clear, but I like the
// look of the cleaner variant.
const About = lazy(async () => await import("🍐/pages/About.page"));
const Account = lazy(async () => await import("🍐/pages/Account.page"));
const Donate = lazy(async () => await import("🍐/pages/Donate.page"));

const AppRouter = (): JSX.Element => (
  <MetaProvider>
    <Title>Pear Loans</Title>
    <Header />
    <Main>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} data={AccountData} />
        <Route path="/donate" component={Donate} />
      </Routes>
    </Main>
  </MetaProvider>
);

export default AppRouter;
