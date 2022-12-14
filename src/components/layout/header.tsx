import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import type { JSX } from "solid-js";
import { onCleanup } from "solid-js";

import ThemeToggle from "🍐/components/layout/theme-toggle";

let list: HTMLUListElement;
const LINK_CLASSES =
  "border-transparent border rounded-xl py-2 px-3 no-underline inline-block hover:bg-green-100 hover:border-green-700 hover:text-green-800 dark:hover:bg-green-900 dark:hover:border-green-300 dark:hover:text-green-50";
const ACTIVE_LINK_CLASSES =
  "text-green-50 bg-green-900 dark:text-green-900 dark:bg-green-200";

const Header = () => {
  const bodyClick: JSX.EventHandler<
    HTMLAnchorElement,
    MouseEvent | TouchEvent
  > = (e) => {
    if (!e.isTrusted || e.target instanceof HTMLButtonElement) return;
    list.classList.remove("!-right-0");
    document.body.removeEventListener("click", bodyClick);
  };

  const menuClick: JSX.EventHandler<
    HTMLButtonElement,
    MouseEvent | TouchEvent
  > = (e) => {
    if (!e.isTrusted) return;
    e.preventDefault();
    document.body.addEventListener("click", bodyClick);
    list.classList.toggle("!-right-0");
  };

  onCleanup(() => document.body.removeEventListener("click", bodyClick));

  return (
    <header class="max-w-6xl py-1 sm:mx-auto sm:py-3">
      <Title>Pear Loans</Title>

      <nav class="relative flex items-center justify-between gap-x-5 text-green-900 dark:text-green-50 sm:justify-start">
        <A
          class="text-xl font-bold sm:text-2xl"
          aria-label="Pear Loans Homepage Link"
          href="/"
        >
          🍐 Loans
        </A>
        <h2 class="sr-only">Site Navigation</h2>

        <button
          class={`${LINK_CLASSES} sm:hidden`}
          onClick={menuClick}
          title="Navigation Menu"
          tabIndex={-1}
        >
          📃 Menu
        </button>
        <ul
          class="absolute -right-64 top-11 z-30 flex grow flex-col justify-between gap-y-5 gap-x-5 rounded-bl-xl bg-green-50 p-1 transition-direction dark:bg-black sm:static sm:flex-row sm:bg-transparent sm:p-0"
          ref={list}
        >
          <li>
            <ul class="flex flex-col gap-x-2 gap-y-2 sm:flex-row">
              <li>
                <A
                  activeClass={ACTIVE_LINK_CLASSES}
                  class={LINK_CLASSES}
                  href="/"
                  end={true}
                >
                  🏡 Home
                </A>
              </li>
              <li>
                <A
                  activeClass={ACTIVE_LINK_CLASSES}
                  class={LINK_CLASSES}
                  href="/about"
                >
                  🤔 About
                </A>
              </li>
              <li>
                <A
                  activeClass={ACTIVE_LINK_CLASSES}
                  class={LINK_CLASSES}
                  href="/donate"
                >
                  💸 Donate
                </A>
              </li>
            </ul>
          </li>

          <li>
            <ul class="flex flex-col gap-x-2 gap-y-2 sm:flex-row">
              <li>
                <A
                  activeClass={ACTIVE_LINK_CLASSES}
                  class={LINK_CLASSES}
                  href="/account"
                >
                  😃 Account
                </A>
              </li>
              <li>
                <ThemeToggle class={LINK_CLASSES} />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
