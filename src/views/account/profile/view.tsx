import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import { faBook, faSchool } from "@fortawesome/pro-duotone-svg-icons";
import { faBrush, faGear } from "@fortawesome/pro-regular-svg-icons";

import Fa from "~/components/Fa";
import Heading from "~/components/content/Heading";
import Link from "~/components/content/Link";
import Authorable from "~/components/input/Authorable";
import Button from "~/components/input/Button";
import type { ProfileData, Session } from "~/config/db";
import { useAddProfile } from "~/routes/account";

type Props = {
	data: {
		profile: ProfileData;
		session: Session;
	};
};

export default component$<Props>((props) => {
	const { profile, session } = props.data;

	const addProfile = useAddProfile();

	const visibleProfileInfo = (addProfile.value || profile) as ProfileData;

	return (
		<div class="mx-auto max-w-3xl rounded-xl bg-gray-100 px-8 py-7 space-y-5 dark:bg-gray-900">
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
					<div class="flex gap-x-2 text-gray-800 dark:text-gray-400">
						<Button
							attributes={{ title: "Pick a color for your profile" }}
							class="rounded-full bg-white p-3 dark:bg-black"
							color={null}
							icon={faBrush}
							iconClass={"rotate-45 w-6 h-6"}
							label=""
							removeDefaultClasses
						/>
						<Link
							attributes={{ title: "User settings", href: "/account/settings" }}
							class="rounded-full bg-white p-3 dark:bg-black"
							color={null}
							icon={faGear}
							iconClass={"w-6 h-6"}
							label=""
							removeDefaultClasses
						/>
					</div>
				</div>
				<div class="w-full flex flex-col gap-y-5">
					<hgroup class="flex flex-col gap-x-2 leading-tight tracking-tighter">
						<div class="flex items-center justify-between font-extrabold">
							<Heading level="h1" class="text-black dark:text-white">
								{visibleProfileInfo.full_name}
							</Heading>
							<Heading
								level="h2"
								class="flex items-center text-green-900 space-x-2 dark:text-green-300"
							>
								<span class="-rotate-15">$</span>
								<span class="inline-block h-9 w-25 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600"></span>
							</Heading>
						</div>
						<div class="flex items-center gap-x-2 text-2xl font-bold text-gray-700 dark:text-gray-200">
							<Fa icon={faSchool} class="h-6 w-6" />
							{visibleProfileInfo.schools.map((field: string, index) => (
								<>
									{field}
									{index === visibleProfileInfo.schools.length - 1 ? "" : ", "}
								</>
							))}
						</div>
						<div class="mt-1 flex items-center gap-x-2 font-bold text-gray-500 dark:text-gray-300">
							<Fa icon={faBook} class="h-6 w-6" />
							{visibleProfileInfo.fields_of_study.map((field: string, index) => (
								<>
									{field}
									{index === visibleProfileInfo.fields_of_study.length - 1 ? "" : ", "}
								</>
							))}
						</div>
					</hgroup>
					<figcaption class="text-gray-800">
						<Authorable label="Write a quick blurb!" />
					</figcaption>
				</div>
			</figure>
			<div class="w-full pb-5 space-y-3">
				<Authorable label="Tell us about yourself!" />
			</div>
		</div>
	);
});
