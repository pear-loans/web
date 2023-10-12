import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import { faBook, faCircleDollar, faEyeSlash, faSchool } from "@fortawesome/pro-duotone-svg-icons";
import { faBrush, faEye, faGear } from "@fortawesome/pro-regular-svg-icons";

import Fa from "~/components/Fa";
import Heading from "~/components/content/Heading";
import Link from "~/components/content/Link";
import Authorable from "~/components/input/Authorable";
import Button from "~/components/input/Button";
import type { ProfileData, Session } from "~/config/db";
import { useAddProfile } from "~/routes/account";

import Tags from "~/components/input/Tags";

type Props = {
	data: {
		profile: ProfileData;
		session: Session;
	};
};

export default component$<Props>((props) => {
	const { profile, session } = props.data;

	const addProfile = useAddProfile();
	const isPreviewMode = useSignal(true);
	const iconPreview = useComputed$(() => {
		return isPreviewMode.value ? faEye : faEyeSlash;
	});

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
						<Button
							attributes={{
								title: isPreviewMode.value ? "Edit content" : "Show preview",
								onClick$: $(() => {
									isPreviewMode.value = !isPreviewMode.value;
								})
							}}
							class="rounded-full bg-white p-3 dark:bg-black"
							color={null}
							icon={iconPreview.value}
							iconClass={"w-6 h-6"}
							label=""
							removeDefaultClasses
						/>
					</div>
				</div>
				<div class="w-full flex flex-col gap-y-5">
					<hgroup class="flex flex-col gap-x-2 leading-tight tracking-tighter space-y-1">
						<div class="flex items-center justify-between gap-x-5 font-extrabold">
							<Heading level="h1" class="text-black dark:text-white">
								<Authorable
									label={visibleProfileInfo.full_name}
									isEmpty={!visibleProfileInfo.full_name}
									isPreview={isPreviewMode.value}
								/>
							</Heading>
							<Heading
								level="h2"
								class="flex items-center text-green-900 space-x-2 dark:text-green-300"
							>
								<Fa icon={faCircleDollar} class="h-7 w-7 -rotate-10" opacity={[0.1, 1]} />
								<span class="inline-block h-9 w-25 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600"></span>
							</Heading>
						</div>
						<div class="flex items-center gap-x-2 text-2xl font-bold text-gray-700 dark:text-gray-200">
							<Fa icon={faSchool} class="h-6 w-6 shrink-0" />
							<Authorable
								editor={
									<Tags label="" items={visibleProfileInfo.schools} class="text-sm" isSmall />
								}
								label={
									<>
										{visibleProfileInfo.schools.map((field: string, index) => (
											<>
												{field}
												{index === visibleProfileInfo.schools.length - 1 ? "" : ", "}
											</>
										))}
									</>
								}
								isPreview={isPreviewMode.value}
							/>
						</div>
						<div class="flex items-center gap-x-2 font-bold text-gray-500 dark:text-gray-300">
							<Fa icon={faBook} class="h-6 w-6 shrink-0" />
							<Authorable
								editor={
									<Tags
										label=""
										items={visibleProfileInfo.fields_of_study}
										class="text-sm"
										maxItems={4}
										placeholder="Major, minor, etc."
										isSmall
									/>
								}
								label={
									<>
										{visibleProfileInfo.fields_of_study.map((field: string, index) => (
											<>
												{field}
												{index === visibleProfileInfo.fields_of_study.length - 1 ? "" : ", "}
											</>
										))}
									</>
								}
								isPreview={isPreviewMode.value}
							/>
						</div>
					</hgroup>
					<figcaption class="text-gray-800">
						<Authorable
							label="Write a quick blurb!"
							class="py-10"
							isEmpty
							isPreview={isPreviewMode.value}
						/>
					</figcaption>
				</div>
			</figure>
			<div class="w-full pb-5 space-y-3">
				<Authorable
					label="Tell us about yourself!"
					class="py-20"
					isEmpty
					isPreview={isPreviewMode.value}
				/>
			</div>
		</div>
	);
});
