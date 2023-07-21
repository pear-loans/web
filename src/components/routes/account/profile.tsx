// @ts-nocheck
import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

import { faPersonToDoor } from "@fortawesome/pro-duotone-svg-icons";
import { faSchool, faSignature } from "@fortawesome/pro-regular-svg-icons";

import AnimateOnScroll from "~/components/container/animate-on-scroll";
import Heading from "~/components/content/heading";
import Button from "~/components/input/button";
import Input from "~/components/input/input";
import { ERRORS, useAddProfile } from "~/routes/account";
import { useAuthSignout } from "~/routes/plugin@auth";

type Profile = {
	full_name: string;
	school: string;
};

type Data = {
	userId: string;
	profile: Profile;
};

interface Props {
	data: Data;
}

export default component$<Props>((props) => {
	const { data } = props;
	const { userId, profile } = data;
	const callbackUrl = "/account/";

	const addProfile = useAddProfile();
	const signOut = useAuthSignout();

	const visibleProfileInfo = addProfile.value?.profile || profile;
	const errors = addProfile.value?.errors || [];
	const hasErrors = errors.length > 0;

	return (
		<div class="py-20 relative">
			<Button
				onClick$={() => {
					signOut.submit({ callbackUrl });
				}}
				label="Sign Out"
				icon={faPersonToDoor}
				class="absolute top-0 right-0"
			/>

			{visibleProfileInfo && !hasErrors ? (
				<div>
					<Heading level="h1">
						Hello <span>{visibleProfileInfo.full_name}</span>
					</Heading>
				</div>
			) : (
				<div class="space-y-5 max-w-xl m-auto">
					<AnimateOnScroll>
						<Heading level="h1">
							Welcome To{" "}
							<span class="bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
								Pear Loans
							</span>
							!
						</Heading>
					</AnimateOnScroll>
					<AnimateOnScroll delay={1000}>
						<Heading level="h2">Let's get some information.</Heading>
					</AnimateOnScroll>
					<Form class="space-y-5" action={addProfile}>
						<input type="hidden" value={userId} name="id" />

						<AnimateOnScroll delay={2000}>
							<Input
								type="text"
								placeholder="John Doe"
								name="name"
								icon={faSignature}
								label="What is your name?"
								required
							/>
						</AnimateOnScroll>
						<AnimateOnScroll delay={2100}>
							<Input
								type="text"
								placeholder="Littleroot University"
								name="school"
								icon={faSchool}
								label="Where did you go to school?"
								required
							/>
						</AnimateOnScroll>
						<AnimateOnScroll delay={2200}>
							<Button type="submit" label="Submit" class="w-full" />
						</AnimateOnScroll>
						{hasErrors &&
							errors.map((error) => {
								return {
									[ERRORS.MISSING_INPUT]: (
										<div class="text-red-500">Please fill out all fields</div>
									),
									[ERRORS.UNEXPECTED]: (
										<div class="text-red-500">
											An unexpected error occurred.
										</div>
									),
								}[error];
							})}
					</Form>
				</div>
			)}
		</div>
	);
});
