import type { ParentComponent } from "solid-js";

const Section: ParentComponent = (props) => (
  <section class="px-4 py-10 md:px-8 md:py-20">{props.children}</section>
);

export default Section;
