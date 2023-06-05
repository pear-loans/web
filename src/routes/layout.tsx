import { Slot, component$ } from "@builder.io/qwik";
import Footer from "🍐/components/layout/footer";
import Header from "🍐/components/layout/header";
import Main from "🍐/components/layout/main";

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
