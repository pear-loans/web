import { $, Slot, component$ } from "@builder.io/qwik";
import { faPersonToDoor } from "@fortawesome/pro-duotone-svg-icons";
import Button from "~/components/input/Button";
import { useAuthSession, useAuthSignout } from "../plugin@auth";

const callbackUrl = "/account/";

export default component$(() => {
	const signOut = useAuthSignout();
	const session = useAuthSession();

	return (
		<div class="relative py-20">
			{session.value?.user && (
				<Button
					attributes={{
						onClick$: $(() => {
							signOut.submit({ callbackUrl });
						})
					}}
					label="Sign Out"
					icon={faPersonToDoor}
					class="absolute right-0 top-0"
				/>
			)}
			<Slot />
		</div>
	);
});
