import { A } from "@solidjs/router";
import type { Component } from "solid-js";

const Header: Component = () => {
	return (
		<header>
			<nav
				role="menu"
				class="flex justify-between mx-5 mt-3 p-5 bg-gray-200 rounded-3xl"
			>
				<ul role="group" class="flex space-x-10">
					<li role="presentation">
						<A
							href="/"
							role="menuitem"
							class="no-underline text-green-900 font-semibold"
						>
							Home
						</A>
					</li>
					<li role="presentation">
						<A
							href="/about"
							role="menuitem"
							class="no-underline text-green-900 font-semibold"
						>
							About
						</A>
					</li>
					<li role="presentation">
						<A
							href="/donate"
							role="menuitem"
							class="no-underline text-green-900 font-semibold"
						>
							Donate
						</A>
					</li>
				</ul>
				<ul role="group" class="flex space-x-10">
					<li role="presentation">
						<A
							href="/account"
							role="menuitem"
							class="no-underline text-green-900 font-semibold"
						>
							Account
						</A>
					</li>
					<li role="presentation">
						<button type="button" role="menuitem">
							Theme
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
