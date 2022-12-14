import type { ParentComponent } from "solid-js";

const Main: ParentComponent = (props) => (
  <main class="mx-auto max-w-screen-2xl">{props.children}</main>
);

export default Main;
