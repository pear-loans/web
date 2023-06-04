import { component$, useContext, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
	faHouseChimney,
	faCircleInfo,
	// faCircleUser,
} from "@fortawesome/pro-duotone-svg-icons";

import Fa from "🍐/includes/fa";
import ThemeToggle from "./theme-toggle";

import styles from "./header.module.scss";

export default component$(() => {
	const { url } = useLocation();

	return (
		<header
			class={[
				"mx-auto max-w-screen-xl",
				{
					"animate-fade-in-down animate-delay-1000": url.pathname === "/",
				},
			]}
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
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
});
