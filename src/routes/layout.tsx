import { component$, Slot } from "@builder.io/qwik";
import Header from "🍐/components/layout/header";
import Main from "🍐/components/layout/main";
import Footer from "🍐/components/layout/footer";

export default component$(() => {
	return (
		<>
			<Header />
			<Main>
				<Slot />
			</Main>
			<Footer />
		</>
	);
});
