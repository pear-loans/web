import type { Resource } from "solid-js";
import { createResource } from "solid-js";

export type LoginAPI = [Window["google"], Window["apple"]];
export type LoginAPIResource = Resource<LoginAPI>;

const cache = new Map<string, "google" | "AppleID">();
const loadThirdParty = async (
  src: string,
  id: "google" | "AppleID",
  action?: (arg0: Window["google"] | Window["apple"]) => void
): Promise<Window["google"] | Window["apple"]> => {
  if (cache.has(src)) return window[id];

  return new Promise<Window["google"] | Window["apple"]>((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      cache.set(src, id);
      resolve(window[id]);
    };
    document.body.appendChild(script);
  }).then((res) => {
    action?.(res);
    return res;
  });
};

const loadScripts = (): Promise<LoginAPI> | LoginAPI => {
  if (cache.size > 0) return [window.google, window.AppleID];

  return Promise.all([
    loadThirdParty(
      "https://accounts.google.com/gsi/client",
      "google",
      (google: Window["google"]) => {
        google.accounts.id.initialize({
          // callback: handleGoogleResponse,
          client_id: import.meta.env.VITE_GOOGLE_CLIENTID,
        });
        return google;
      }
    ) as Promise<Window["google"]>,
    loadThirdParty(
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
      "AppleID"
    ) as Promise<Window["apple"]>,
  ]);
};

const AccountData = () => {
  const [data] = createResource<LoginAPI>(loadScripts);
  return data;
};

export default AccountData;
