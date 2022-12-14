import { A } from "@solidjs/router";
import type { ParentComponent } from "solid-js";

const Link: ParentComponent<{ href: string }> = (props) => (
  <A
    class="inline-block rounded-full border border-transparent bg-green-900 py-3 px-5 text-green-100 no-underline hover:border-green-700 hover:bg-green-100 hover:text-green-800 focus:border-green-700 focus:bg-green-100 focus:text-green-800 dark:bg-green-200 dark:text-green-900  dark:hover:border-green-300 dark:hover:bg-green-900 dark:hover:text-green-50 dark:focus:border-green-300 dark:focus:bg-green-900 dark:focus:text-green-50"
    href={props.href}
  >
    {props.children}
  </A>
);

export default Link;
