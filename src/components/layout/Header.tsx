import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
	faBars,
	faCircleInfo,
	faCircleUser,
	faHouseChimney,
	faPear
} from "@fortawesome/pro-duotone-svg-icons";

import Fa from "~/components/Fa";
import ThemeToggle from "./ThemeToggle";

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
				"mx-auto max-w-screen-2xl",
				{
					"fade-down animate-delay-800": !hasInit.value && url.pathname === "/"
				}
			]}
			onAnimationEnd$={() => {
				hasInit.value = true;
			}}
		>
			<nav class="relative flex items-center overflow-x-clip font-semibold text-green-700 dark:text-green-300">
				<div class="relative z-70 w-full flex justify-between bg-white md:w-auto dark:bg-black">
					<Link
						href="/"
						role="menuitem"
						class="flex items-center gap-x-2 p-5 text-xl font-bold text-green-800 dark:text-green-200"
					>
						<Fa icon={faPear} class="w-8" />
						<span>Pear Loans</span>
					</Link>
					<button
						class="block flex items-center gap-x-2 px-5 md:hidden"
						type="button"
						onClick$={toggleMenu}
					>
						<Fa icon={faBars} />
						<span>Menu</span>
					</button>
				</div>
				<div
					class={[
						"flex grow flex-col md:flex-row md:justify-between absolute md:static transition-top md:border-none bg-white dark:bg-black border-gray-500 border-2 border-t-0 shadow-lg right-0 z-60 rounded-b-lg md:shadow-none",
						menuOpen.value ? "top-full" : "-top-100"
					]}
					role="menubar"
				>
					<div class="flex flex-col items-end md:flex-row" role="none">
						<Link
							href="/"
							onClick$={toggleMenu}
							role="menuitem"
							class="flex items-center gap-x-2 p-5"
						>
							<Fa icon={faHouseChimney} />
							<span>Home</span>
						</Link>
						<Link
							onClick$={toggleMenu}
							href="/about/"
							role="menuitem"
							class="flex items-center gap-x-2 p-5"
						>
							<Fa icon={faCircleInfo} />
							<span>About</span>
						</Link>
					</div>
					<div class="flex flex-col items-center md:flex-row" role="none">
						<Link
							onClick$={toggleMenu}
							href="/account/"
							role="menuitem"
							class="flex items-center gap-x-2 p-5"
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
