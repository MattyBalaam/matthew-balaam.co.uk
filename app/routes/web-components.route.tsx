import { useState } from "react";

import { UnderConstruction } from "~/components/under-construction/under-construction";

export default function WebComponents() {
  if (typeof window === "undefined") {
    return null;
  }

  const [buttonCount, setButtonCount] = useState(0);

  return (
    <article suppressHydrationWarning>
      <h1>Web components</h1>
      <p>
        This page is going to be a playground for my experiments with web
        components.
      </p>
      <UnderConstruction />

      <section>
        <h2>My Button</h2>

        <mb-button
          onClick={(event) => {
            console.log("event", event.currentTarget.getBoundingClientRect());

            setButtonCount((count) => count + 1);
          }}
        >
          Click count: {buttonCount}
        </mb-button>
      </section>
    </article>
  );
}
