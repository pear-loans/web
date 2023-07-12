import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
	faCircleInfo,
	faHouseChimney,
	// faCircleUser,
} from "@fortawesome/pro-duotone-svg-icons";

import ThemeToggle from "./theme-toggle";
import Fa from "~/includes/fa";

import styles from "./header.module.scss";

export default component$(() => {
	const { url } = useLocation();
	const hasInit = useSignal(false);

	useTask$(() => {
		if (url.pathname !== "/") hasInit.value = true;
	});

	return (
		<header
			class={[
				"mx-auto max-w-screen-xl",
				{
					"animate-fade-in-down animate-delay-1000":
						!hasInit.value && url.pathname === "/",
				},
			]}
			onAnimationEnd$={() => {
				hasInit.value = true;
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
						>
							<Fa icon={faCircleInfo} />
							<span>About</span>
						</Link>
					</div>
					<div class="flex items-center" role="none">
						<Link
							href="/login/"
							role="menuitem"
							class={[
								"p-5 font-semibold",
								styles.link,
								url.pathname === "/about/" && styles.active,
							]}
						>
							<Fa icon={faCircleInfo} />
							<span>Login</span>
						</Link>

						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
});
