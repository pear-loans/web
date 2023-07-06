import type { Provider } from "@auth/core/providers";
// import Discord from "@auth/core/providers/Discord";
import { serverAuth$ } from "@builder.io/qwik-auth";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
	serverAuth$(({ env }) => ({
		secret: env.get("AUTH_SECRET"),
		trustHost: true,
		providers: [
			// Discord({
			// 	// rome-ignore lint/style/noNonNullAssertion: Suggested auth setup from Qwik uses non-null assertion.
			// 	clientId: env.get("DISCORD_ID")!,
			// 	// rome-ignore lint/style/noNonNullAssertion: Suggested auth setup from Qwik uses non-null assertion.
			// 	clientSecret: env.get("DISCORD_SECRET")!,
			// }),
		] as Provider[],
	}));
