import { $, component$ } from "@builder.io/qwik";
import { faDiscord, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Heading from "~/components/content/Heading";
import Button from "~/components/input/Button";
import { useAuthSignin } from "~/routes/plugin@auth";

const PATH = "/account/";

export default component$(() => {
	const signin = useAuthSignin();

	return (
		<div class="m-auto mt-20 max-w-screen-sm space-y-5">
			<Heading class="text-center" level="h1">
				Account Center
			</Heading>
			<Heading class="text-center font-normal text-gray-500 dark:text-gray-200" level="h5">
				Sign In or Create an Account to create a donation profile.
			</Heading>
			{/* <Button
				icon={faApple}
				color={0}
				class="w-full text-white bg-black dark:bg-white dark:text-black block"
				onClick$={() => {
					signin.submit({ providerId: "apple" });
				}}
				label="Continue with Apple"
			/> */}
			<div class="space-y-3">
				<Button
					attributes={{
						onClick$: $(() => {
							signin.submit({
								providerId: "google",
								options: { callbackUrl: `${window.location.host}${PATH}` }
							});
						})
					}}
					icon={faGoogle}
					color={0}
					class="block w-full bg-gray-100 text-black dark:bg-brand-google dark:text-white"
					label="Continue with Google"
				/>
				<Button
					attributes={{
						onClick$: $(() => {
							signin.submit({
								providerId: "discord",
								options: { callbackUrl: `${window.location.host}${PATH}` }
							});
						})
					}}
					icon={faDiscord}
					color={null}
					class="block w-full bg-brand-discord text-white"
					label="Continue with Discord"
				/>
			</div>
		</div>
	);
});
