import { component$ } from "@builder.io/qwik";
import {
	faApple,
	faDiscord,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Button from "~/components/input/button";
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
					<Button
						onClick$={() => {
							signOut.submit({ callbackUrl: "/account/" });
						}}
						label="Sign Out"
					/>
				</>
			) : (
				<div class="gap-y-3 flex flex-col max-w-screen-xs m-auto mt-20">
					<Button
						icon={faApple}
						color={0}
						class="w-full fa-primary-white text-white bg-black dark:bg-white dark:text-black dark:fa-primary-black block"
						onClick$={() => {
							signin.submit({ providerId: "apple" });
						}}
						label="Continue with Apple"
					/>
					<Button
						icon={faGoogle}
						color={0}
						class="w-full fa-primary-black text-black bg-gray-100 dark:bg-brands-google dark:text-white dark:fa-primary-white block"
						onClick$={() => {
							signin.submit({ providerId: "google" });
						}}
						label="Continue with Google"
					/>
					<Button
						icon={faDiscord}
						color={0}
						class="w-full bg-brands-discord fa-primary-white text-white block"
						onClick$={() => {
							signin.submit({ providerId: "discord" });
						}}
						label="Continue with Discord"
					/>
				</div>
			)}
		</>
	);
});
