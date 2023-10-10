import { $, component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

import { faCircleExclamation, faPersonToDoor } from "@fortawesome/pro-duotone-svg-icons";
import { faBook, faBrush, faGear, faSchool, faSignature } from "@fortawesome/pro-regular-svg-icons";

import Fa from "~/components/Fa";
import AnimateOnScroll from "~/components/container/AnimateOnScroll";
import Heading from "~/components/content/Heading";
import Button from "~/components/input/Button";
import Input from "~/components/input/Input";
import InputTags from "~/components/input/Tags";
import type { ProfileData, Session } from "~/config/db";
import { useAddProfile } from "~/routes/account";
import { useAuthSignout } from "~/routes/plugin@auth";
import { MAX_LENGTH } from "~/utils/validate";

import { FIELDS } from "~/config/db";
import { ERRORS } from "./handlers";

type Props = {
	data: {
		profile: ProfileData;
		session: Session;
	};
};

const isEmptyProfile = (profile: ProfileData) => {
	return Object.values(FIELDS).some((field) => {
		// @ts-ignore - TODO: Figure out type error. Keys of FIELDS guaranteed to be in ProfileData (it is derived from ProfileData)
		return !profile[field];
	});
};

export default component$<Props>((props) => {
	const { profile, session } = props.data;
	const callbackUrl = "/account/";

	const addProfile = useAddProfile();
	const signOut = useAuthSignout();

	const visibleProfileInfo = (addProfile.value || profile) as ProfileData;
	const errors = addProfile.value?.errors || [];
	const hasErrors = errors.length > 0;

	const delay_heading = 1000;
	let delay_form = delay_heading + 500;
	const increment = () => {
		delay_form += 200;
		return delay_form;
	};

	return (
		<div class="relative py-20">
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

			{!isEmptyProfile(profile) && !hasErrors ? (
				// User profile 'card'
				<div class="mx-auto max-w-3xl flex rounded-xl bg-gray-100 px-8 py-7">
					<div class="text-green-400">
						<Image
							src={session?.user?.image + "fff"}
							layout="constrained"
							alt={session?.user?.name}
							width={200}
							height={200}
							class="h-max rounded-full"
						/>
						{/* Color circle with label saying "pick a color for profile card" */}
						<div class="flex gap-x-2">
							<div class="h-11 w-11 flex items-center justify-center rounded-full bg-white">
								<Fa icon={faBrush} class="h-6 w-6 rotate-45" opacity={1} />
							</div>
							<div class="h-11 w-11 flex items-center justify-center rounded-full bg-white">
								<Fa icon={faGear} class="h-6 w-6" opacity={1} />
							</div>
						</div>
					</div>
					<figure class="h-full flex grow flex-col gap-x-2 gap-y-1">
						<div class="w-full flex items-center justify-between font-extrabold">
							<Heading level="h1" class="text-black">
								{visibleProfileInfo.full_name}
							</Heading>
							<Heading level="h2" class="flex items-center text-green-900">
								$<span class="inline-block h-9 w-25 animate-pulse rounded-full bg-gray-400"></span>
							</Heading>
						</div>
						<figcaption class="flex items-center gap-x-2 font-bold text-gray-700 dark:text-gray-300">
							<Fa icon={faSchool} />
							{visibleProfileInfo.schools.map((field: string, index) => (
								<>
									{field}
									{index === visibleProfileInfo.schools.length - 1 ? "" : ", "}
								</>
							))}
						</figcaption>
						<figcaption class="flex items-center gap-x-2 font-bold text-gray-500 dark:text-gray-500">
							<Fa icon={faBook} />
							{visibleProfileInfo.fields_of_study.map((field: string, index) => (
								<>
									{field}
									{index === visibleProfileInfo.fields_of_study.length - 1 ? "" : ", "}
								</>
							))}
						</figcaption>
						<div class="w-full py-20 space-y-3">
							{/* Perhaps, show "add content" if empty or "edit content" if not. Also, show full content */}
							<div class="text-center text-gray-400">
								Content missing! Why not author a profile?
							</div>
							<Button label="Add Content" class="w-full" />
						</div>
					</figure>
				</div>
			) : (
				<div class="m-auto max-w-xl space-y-5">
					<AnimateOnScroll>
						<Heading level="h1">
							Welcome To{" "}
							<span class="animate-pulse from-green-700 to-blue-500 bg-gradient-to-br bg-clip-text text-transparent dark:from-green-300 dark:to-blue-300">
								Pear Loans
							</span>
							!
						</Heading>
					</AnimateOnScroll>
					<AnimateOnScroll delay={delay_heading}>
						<Heading level="h2">Let's get some information.</Heading>
					</AnimateOnScroll>
					<Form class="space-y-5" action={addProfile}>
						<input type="hidden" value={profile.userId} name={FIELDS.ID} />

						<AnimateOnScroll delay={increment()}>
							<Input
								attributes={{
									autoComplete: "name",
									name: FIELDS.FULL_NAME,
									placeholder: "John Doe",
									required: true,
									type: "text",
									minLength: 1,
									maxLength: MAX_LENGTH.STRING
								}}
								icon={faSignature}
								label="What is your name?"
							/>
						</AnimateOnScroll>
						<AnimateOnScroll delay={increment()}>
							<InputTags
								icon={faSchool}
								label="Where did you go to school?"
								maxItems={4}
								placeholder="Littleroot University"
								name={FIELDS.SCHOOLS}
							/>
						</AnimateOnScroll>
						<AnimateOnScroll delay={increment()}>
							<InputTags
								icon={faBook}
								label="What is your field(s) of study?"
								maxItems={4}
								placeholder="Major, minor, etc."
								name={FIELDS.FIELDS_OF_STUDY}
							/>
						</AnimateOnScroll>

						<AnimateOnScroll delay={increment()}>
							<Button attributes={{ type: "submit" }} label="Submit" class="w-full" />
						</AnimateOnScroll>
						{hasErrors && (
							<div class="mt-2 font-bold text-red-500 space-x-2" role="alert">
								<Fa icon={faCircleExclamation} />
								<span>
									{errors.map((error) => {
										return {
											[ERRORS.INVALID_INPUT]: "Invalid input received.",
											[ERRORS.MISSING_INPUT]: "Please fill out all fields.",
											[ERRORS.UNEXPECTED]: "An unexpected error occurred."
										}[error];
									})}
								</span>
							</div>
						)}
					</Form>
				</div>
			)}
		</div>
	);
});
