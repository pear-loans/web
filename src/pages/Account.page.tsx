import { Title } from "@solidjs/meta";
import type { JSX } from "solid-js";
import solidToast from "solid-toast";

import Button from "🍐/components/button";
import icons from "🍐/config/icons";

const Account = (): JSX.Element => {
  return (
    <>
      <Title>Pear Loans: Account Page</Title>
      <section class="py-5 text-center sm:py-56">
        <Button
          onClick={() => {
            // Sign out here
            solidToast("Signed out!", { icon: icons.success });
          }}
        >
          Sign Out
        </Button>
      </section>
    </>
  );
};

export default Account;
