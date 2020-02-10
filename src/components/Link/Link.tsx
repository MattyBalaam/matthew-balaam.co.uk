import React, { ReactNode } from "react";
import { find } from "linkifyjs";

type Props = {
  children: ReactNode;
  className?: string;
  title?: string;
  to?: string;
  href?: string;
  external?: boolean;
};

const Link = ({
  children,
  className,
  title,
  to,
  href,
  external = true
}: Props) => (
  <a
    className={className}
    title={title}
    href={href || find(to)[0].href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

export default Link;
