import { Title } from "@solidjs/meta";
import type { Component, ParentProps } from "solid-js";
import toast from "solid-toast";

import Button from "🍐/components/button";
import icons from "🍐/config/icons";

const Account: Component<ParentProps> = () => {
  return (
    <>
      <Title>Pear Loans: Account Page</Title>
      <section class="py-5 text-center sm:py-56">
        <Button
          onClick={() => {
            // Sign out here
            toast("Signed out!", { icon: icons.success });
          }}
        >
          Sign Out
        </Button>
      </section>
    </>
  );
};

export default Account;
