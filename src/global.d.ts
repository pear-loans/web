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
