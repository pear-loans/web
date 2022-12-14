import type { JSX, ParentComponent } from "solid-js";

const Button: ParentComponent<{
  onClick?: JSX.EventHandler<HTMLButtonElement, MouseEvent | TouchEvent>;
  class?: string;
  tabindex?: number | string;
}> = (props) => {
  const classes =
    "inline-block rounded-full border border-transparent bg-green-900 py-3 px-5 text-green-100 no-underline hover:border-green-700 hover:bg-green-100 hover:text-green-800 focus:border-green-700 focus:bg-green-100 focus:text-green-800 dark:bg-green-200 dark:text-green-900 dark:hover:border-green-300 dark:hover:bg-green-900 dark:hover:text-green-50 dark:focus:border-green-300 dark:focus:bg-green-900 dark:focus:text-green-50";

  return (
    <button
      class={`${classes} ${props.class}`}
      onClick={props.onClick}
      type="button"
      tabindex={props.tabindex}
    >
      {props.children}
    </button>
  );
};

export default Button;
