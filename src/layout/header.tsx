import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
	faBars,
	faCircleInfo,
	faCircleUser,
	faHouseChimney,
	faPear,
} from "@fortawesome/pro-duotone-svg-icons";

import ThemeToggle from "./theme-toggle";
import Fa from "~/includes/fa";

import styles from "./header.module.scss";

export default component$(() => {
	const { url } = useLocation();
	const hasInit = useSignal(false);
	const menuOpen = useSignal(false);

	useTask$(() => {
		if (url.pathname !== "/") hasInit.value = true;
	});

	const toggleMenu = $(() => {
		menuOpen.value = !menuOpen.value;
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
			<nav class="relative flex items-center overflow-x-clip">
				<div class="flex justify-between w-full md:w-auto">
					<Link href="/" role="menuitem" class="p-5 font-bold text-xl">
						<Fa icon={faPear} />
						<span>Pear Loans</span>
					</Link>
					<button
						class="md:hidden block px-5"
						type="button"
						onClick$={toggleMenu}
					>
						<Fa icon={faBars} />
						<span>Menu</span>
					</button>
				</div>
				<div
					class={[
						"flex grow flex-col md:flex-row md:justify-between absolute md:static top-12 transition-[right] bg-white dark:bg-black z-50 rounded-xl md:rounded-none",
						menuOpen.value ? "right-0" : "-right-full",
					]}
					role="menubar"
				>
					<div class="flex flex-col md:flex-row items-center" role="none">
						<Link
							href="/"
							onClick$={toggleMenu}
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
							onClick$={toggleMenu}
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
					<div class="flex flex-col md:flex-row items-center" role="none">
						<Link
							href="/account/"
							role="menuitem"
							onClick$={toggleMenu}
							class={[
								"p-5 font-semibold",
								styles.link,
								url.pathname === "/account/" && styles.active,
							]}
						>
							<Fa icon={faCircleUser} />
							<span>Account</span>
						</Link>

						<ThemeToggle />
					</div>
				</div>
			</nav>
		</header>
	);
});
