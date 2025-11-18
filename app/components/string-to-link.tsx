import type { ComponentProps, ReactNode } from "react";
import Linkify from "linkify-react";

type StringToLinkProps = ComponentProps<typeof Linkify> & {
  children: ReactNode;
  className?: string;
  title?: string;
  label?: string;
};

export function StringToLink({
  children,
  className,
  label,
  title,
}: StringToLinkProps) {
  return (
    <Linkify
      options={{
        className,
        defaultProtocol: "https",
        format: (val) => {
          return label ? label : val;
        },
        attributes: {
          title,
        },
      }}
    >
      {children}
    </Linkify>
  );
}
