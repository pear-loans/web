import type { Provider } from "@auth/core/providers";
import Discord from "@auth/core/providers/discord";
import { serverAuth$ } from "@builder.io/qwik-auth";
import type { RequestHandler } from "@builder.io/qwik-city";
import { getDb } from "~/db";
import { BothDB, D1Adapter } from "~/includes/temp/d1-authjs-adapter";
export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
	serverAuth$(({ env }) => {
		const DB = (env.get("DB") as unknown as BothDB) || getDb();

		return {
			secret: env.get("AUTH_SECRET"),
			trustHost: true,
			providers: [
				Discord({
					// rome-ignore lint/style/noNonNullAssertion: Suggested auth setup from Qwik uses non-null assertion.
					clientId: env.get("DISCORD_ID")!,
					// rome-ignore lint/style/noNonNullAssertion: Suggested auth setup from Qwik uses non-null assertion.
					clientSecret: env.get("DISCORD_SECRET")!,
				}),
			] as Provider[],
			adapter: D1Adapter(DB),
		};
	});

// Note: May be unnecessary in future? Only used bc Sessioned pages could potentially have stale session data.
export const getHandler: RequestHandler = async ({ cacheControl }) => {
	cacheControl({
		noStore: true,
	});
};
