import { $, component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import { faPersonToDoor } from "@fortawesome/pro-duotone-svg-icons";
import { faBook, faBrush, faGear, faSchool } from "@fortawesome/pro-regular-svg-icons";

import Fa from "~/components/Fa";
import Heading from "~/components/content/Heading";
import Button from "~/components/input/Button";
import type { ProfileData, Session } from "~/config/db";
import { useAddProfile } from "~/routes/account";
import { useAuthSignout } from "~/routes/plugin@auth";

type Props = {
	data: {
		profile: ProfileData;
		session: Session;
	};
};

export default component$<Props>((props) => {
	const { profile, session } = props.data;
	const callbackUrl = "/account/";

	const addProfile = useAddProfile();
	const signOut = useAuthSignout();

	const visibleProfileInfo = (addProfile.value || profile) as ProfileData;

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
			<div class="mx-auto max-w-3xl rounded-xl bg-gray-100 px-8 py-7 space-y-10">
				<figure class="flex gap-x-10">
					<div class="text-green-400 space-y-3">
						<Image
							src={session?.user?.image}
							layout="constrained"
							alt={session?.user?.name}
							width={200}
							height={200}
							class="h-max rounded-full"
						/>
						{/* Color circle with label saying "pick a color for profile card" */}
						<div class="flex gap-x-2">
							<Button
								attributes={{ title: "Pick a color for your profile" }}
								class="rounded-full bg-white p-3"
								color={null}
								icon={faBrush}
								iconClass={"rotate-45 w-6 h-6"}
								label=""
								removeDefaultClasses
							/>
							<Button
								attributes={{ title: "User settings" }}
								class="rounded-full bg-white p-3"
								color={null}
								icon={faGear}
								iconClass={"w-6 h-6"}
								label=""
								removeDefaultClasses
							/>
						</div>
					</div>
					<div class="w-full flex flex-col gap-y-5">
						<hgroup class="flex flex-col gap-x-2 gap-y-1">
							<div class="flex items-center justify-between font-extrabold">
								<Heading level="h1" class="text-black">
									{visibleProfileInfo.full_name}
								</Heading>
								<Heading level="h2" class="flex items-center text-green-900">
									$
									<span class="inline-block h-9 w-25 animate-pulse rounded-full bg-gray-400"></span>
								</Heading>
							</div>
							<div class="flex items-center gap-x-2 text-2xl font-bold text-gray-700 dark:text-gray-300">
								<Fa icon={faSchool} class="h-6 w-6" />
								{visibleProfileInfo.schools.map((field: string, index) => (
									<>
										{field}
										{index === visibleProfileInfo.schools.length - 1 ? "" : ", "}
									</>
								))}
							</div>
							<div class="flex items-center gap-x-2 font-bold text-gray-500 dark:text-gray-500">
								<Fa icon={faBook} />
								{visibleProfileInfo.fields_of_study.map((field: string, index) => (
									<>
										{field}
										{index === visibleProfileInfo.fields_of_study.length - 1 ? "" : ", "}
									</>
								))}
							</div>
						</hgroup>
						<figcaption class="text-gray-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</figcaption>
					</div>
				</figure>
				<div class="w-full pb-5 space-y-3">
					{/* Perhaps, show "add content" if empty or "edit content" if not. Also, show full content */}
					<div class="text-center text-gray-400">Content missing! Why not author a profile?</div>
					<Button label="Add Content" class="w-full" />
				</div>
			</div>
		</div>
	);
});
