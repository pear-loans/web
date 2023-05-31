import { component$, useContext, useSignal } from "@builder.io/qwik";
import { Fa } from "🍐/includes/fa";
import {
	faHouseChimney,
	faCircleInfo,
	// faCircleUser,
} from "@fortawesome/pro-duotone-svg-icons";
import ThemeToggle from "./theme-toggle";
import { InitialLoadContext } from "🍐/root";

import { Link, useLocation } from "@builder.io/qwik-city";

import styles from "./header.module.scss";

export default component$(() => {
	const { url } = useLocation();
	const componentLoad = useSignal(true);
	const initialLoad = useContext(InitialLoadContext);

	return (
		<header
			class={[
				"mx-auto max-w-screen-xl",
				{
					"opacity-0 animate-fade-in-down animate-delay-500":
						initialLoad.value || (url.pathname === "/" && componentLoad.value),
				},
			]}
			onAnimationStart$={(_, el) => {
				// Done here to prevent header from flashing after the animation finishes.
				// Animation makes the header visible anyways, so it's safe to immediately remove the class.
				el.classList.remove("opacity-0");
			}}
			onAnimationEnd$={() => {
				componentLoad.value = false;
			}}
		>
			<nav>
				<div class="flex justify-between" role="menubar">
					<div class="flex items-center" role="none">
						<Link
							href="/"
							role="menuitem"
							class={[
								"p-5 font-semibold",
								styles.link,
								url.pathname === "/" && styles.active,
							]}
							aria-selected={url.pathname === "/"}
						>
							<Fa icon={faHouseChimney} />
							<span>Home</span>
						</Link>
						<Link
							href="/about/"
							role="menuitem"
							class={[
								"p-5 font-semibold",
								styles.link,
								url.pathname === "/about/" && styles.active,
							]}
							aria-selected={url.pathname === "/about/"}
						>
							<Fa icon={faCircleInfo} />
							<span>About</span>
						</Link>
					</div>
					<div class="flex items-center" role="none">
						{/* <Link
							href="/account/"
							role="menuitem"
							class={[
								"p-5 font-semibold",
								styles.link,
								url.pathname === "/account/" && styles.active,
							]}
							aria-selected={url.pathname === "/account/"}
						>
							<Fa icon={faCircleUser} />
							<span>Account</span>
						</Link> */}
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
});
