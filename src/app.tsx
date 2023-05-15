import type { Component } from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Routes } from "@solidjs/router";

import Home from "🍐/pages/Home.page";

import Header from "./layout/header";

const App: Component = () => {
	return (
		<MetaProvider>
			<Title>Pear Loans</Title>
			<main>
				<Routes>
					<Route path="/"  component={Home} />
				</Routes>
			</main>
		</MetaProvider>
	);
};

export default App;
