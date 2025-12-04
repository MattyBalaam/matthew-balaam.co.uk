import { vars } from "~/css/theme.css";

const template = document.createElement("template");
template.innerHTML = `
<button class="button">
 <style>.button {
  background-color: ${vars.palette.ice};
  appearance: none;
  color: var(--button-fg, white)
}</style>
  <slot></slot>
</button>`;

customElements.define(
  "mb-button",
  class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      this.shadowRoot?.appendChild(template.content.cloneNode(true));

      this.shadowRoot
        ?.querySelector("button")
        ?.addEventListener("click", () => {
          this.dispatchEvent(new Event("button-clicksss"));
        });

      this.shadowRoot?.addEventListener("slotchange", (event) =>
        console.log(event),
      );
    }
  },
);
