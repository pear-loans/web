import type { Provider } from "@auth/core/providers";
import Discord from "@auth/core/providers/Discord";
import { serverAuth$ } from "@builder.io/qwik-auth";
import { getDb } from "~/db";
import { BothDB, D1Adapter } from "~/includes/temp/d1-authjs-adapter";
export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
	serverAuth$(({ env }) => {
		// rome-ignore lint/style/noNonNullAssertion: This will come from env in Cloudflare.
		const DB = (env.get("DB") as unknown as BothDB) || getDb();

		return {
			cookies: {
				pkceCodeVerifier: {
					name: "next-auth.pkce.code_verifier",
					options: {
						httpOnly: true,
						sameSite: "none",
						path: "/",
						secure: true,
					},
				},
			},
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
