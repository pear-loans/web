import { component$ } from "@builder.io/qwik";
import {
	// faApple,
	faDiscord,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "~/components/content/heading";
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

	const callbackUrl = "/account/";

	return (
		<>
			{isValidSession(session?.value) ? (
				<>
					<Button
						onClick$={() => {
							signOut.submit({ callbackUrl });
						}}
						label="Sign Out"
					/>
				</>
			) : (
				<div class="space-y-5 max-w-screen-xs m-auto mt-20">
					<Heading class="text-center" level="h1">
						Account Center
					</Heading>
					<Heading class="text-center text-gray-500 font-normal" level="h5">
						Sign In or Create an Account to create a donation profile.
					</Heading>
					{/* <Button
						icon={faApple}
						color={0}
						class="w-full fa-primary-white text-white bg-black dark:bg-white dark:text-black dark:fa-primary-black block"
						onClick$={() => {
							signin.submit({ providerId: "apple" });
						}}
						label="Continue with Apple"
					/> */}
					<div class="space-y-3">
						<Button
							icon={faGoogle}
							color={0}
							class="w-full fa-primary-black text-black bg-gray-100 dark:bg-brands-google dark:text-white dark:fa-primary-white block"
							onClick$={() => {
								signin.submit({
									providerId: "google",
									options: { callbackUrl },
								});
							}}
							label="Continue with Google"
						/>
						<Button
							icon={faDiscord}
							color={0}
							class="w-full bg-brands-discord fa-primary-white text-white block"
							onClick$={() => {
								signin.submit({
									providerId: "discord",
									options: { callbackUrl },
								});
							}}
							label="Continue with Discord"
						/>
					</div>
				</div>
			)}
		</>
	);
});
