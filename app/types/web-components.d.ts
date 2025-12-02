import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "mb-button": DetailedHTMLProps<HTMLAttributes<MyButton>, MyButton>;
    }
  }
}
