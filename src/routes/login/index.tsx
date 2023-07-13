import { component$ } from "@builder.io/qwik";
import {
	useAuthSession,
	useAuthSignin,
	useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
	const signin = useAuthSignin();
	const signOut = useAuthSignout();
	const session = useAuthSession();

	return (
		<>
			<div>Session: {JSON.stringify(session)}</div>
			<div class="flex flex-col">
				<button
					onClick$={() =>
						signin.submit({
							providerId: "discord",
						})
					}
					type="button"
				>
					Sign In - Discord
				</button>
				<button
					onClick$={() =>
						signin.submit({
							providerId: "google",
						})
					}
					type="button"
				>
					Sign In - Google
				</button>
				<button
					onClick$={() =>
						signin.submit({
							providerId: "apple",
						})
					}
					type="button"
				>
					Sign In - Apple
				</button>
			</div>
			<button onClick$={() => signOut.submit({})} type="button">
				Sign Out
			</button>
		</>
	);
});
