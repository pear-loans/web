// NOTE: Seems to get mad if I try to `import` this
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="apple-signin-api" />

interface Window {
  apple?: AppleSignInAPI.AppleID;
  google?: typeof import("google-one-tap");
  theme?: "dark" | "device" | "light";
}

interface ImportMetaEnv {
  VITE_GOOGLE_APIKEY: string;
  VITE_GOOGLE_CLIENTID: string;
}
