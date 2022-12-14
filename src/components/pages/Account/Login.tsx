import { useRouteData } from "@solidjs/router";
import type { Component, Resource } from "solid-js";
import { Show } from "solid-js";

import type { LoginAPIResource } from "🍐/pages/Account.data";

const renderGoogleButton = (googleObj: Window["google"]) => {
  const googleButton = document.createElement("div");
  googleObj.accounts.id.renderButton(googleButton, {
    shape: "circle",
    size: "large",
    text: "continue_with",
    theme: "outline",
  });
  return googleButton;
};

let appleButtonContainer: HTMLDivElement;
let appleButtonTarget: HTMLDivElement;

const renderAppleButton = (appleObj: Window["apple"]) => {
  appleButtonTarget = document.createElement("div");
  appleButtonTarget.id = "appleid-signin";
  appleButtonTarget.dataset.color = "white";
  appleButtonTarget.dataset.type = "continue";
  appleButtonTarget.dataset.width = "200";
  appleButtonTarget.dataset.height = "40";
  appleButtonContainer.append(appleButtonTarget);

  requestAnimationFrame(() => {
    appleObj.auth.init({
      clientId: "[CLIENT_ID]",
      nonce: "[NONCE]",
      redirectURI: "[REDIRECT_URI]",
      scope: "[SCOPES]",
      state: "[STATE]",
      usePopup: true,
    });
  });

  return appleButtonTarget;
};

const Skeleton = () => (
  <div class="h-[40px] w-[225px] animate-pulse rounded-full bg-white" />
);

const Login: Component = () => {
  const data = useRouteData<Resource<LoginAPIResource>>();
  return (
    <section class="py-5 sm:py-56">
      <div class="m-auto flex flex-col items-center space-y-2 rounded-lg bg-slate-100 p-5 text-xl shadow-lg dark:bg-slate-800 sm:-mt-10 sm:max-w-xs">
        <h1 class="font-bold text-green-900 dark:text-green-50">
          <span class="bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold text-transparent decoration-green-500 dark:from-green-500 dark:to-emerald-200">
            Create an Account
          </span>{" "}
          or{" "}
          <span class="bg-gradient-to-bl from-green-700 to-emerald-400 bg-clip-text font-extrabold text-transparent decoration-green-500 dark:from-green-500 dark:to-emerald-200">
            Sign In
          </span>
        </h1>
        <div class="h-[45px] w-max overflow-hidden">
          <Show when={data()?.[0]} fallback={<Skeleton />}>
            {renderGoogleButton(data()?.[0])}
          </Show>
        </div>
        <div class="w-max" ref={appleButtonContainer}>
          <Show when={data()?.[1]} fallback={<Skeleton />}>
            {renderAppleButton(data()?.[1])}
          </Show>
        </div>
      </div>
    </section>
  );
};

export default Login;
