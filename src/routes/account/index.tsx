import { component$ } from "@builder.io/qwik";
import {
	getHandler,
	useAuthSession,
	useAuthSignin,
	useAuthSignout,
} from "~/routes/plugin@auth";

import { isValidSession } from "~/utils/is-valid-session";

export const onGet = getHandler;

export default component$(() => {
	const signin = useAuthSignin();
	const signOut = useAuthSignout();
	const session = useAuthSession();

	return (
		<>
			{isValidSession(session?.value) ? (
				<>
					<div>Session: {JSON.stringify(session.value)}</div>
					<button
						onClick$={() => signOut.submit({ callbackUrl: "/account/" })}
						type="button"
					>
						Sign Out
					</button>
				</>
			) : (
				<div class="flex flex-col">
					<div>Session: {JSON.stringify(session.value)}</div>
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
				</div>
			)}
		</>
	);
});
