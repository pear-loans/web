import { component$ } from "@builder.io/qwik";

import type { ProfileData, Session } from "~/config/db";

type Props = {
	data: {
		profile: ProfileData;
		session: Session;
	};
};

export default component$<Props>((props) => {
	return (
		<div class="mx-auto max-w-3xl rounded-xl bg-gray-100 px-8 py-7 space-y-5 dark:bg-gray-900">
			Settings
		</div>
	);
});
