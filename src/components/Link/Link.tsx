import React, { ReactNode } from "react";
import Linkify, { LinkifyProps } from "linkifyjs/react";

type Props = LinkifyProps & {
  children: ReactNode;
  className?: string;
  title?: string;
  to?: string;
  href?: string;
  external?: boolean;
  securityProps?: {
    target?: string;
    rel?: string;
  };
};

const Link = ({
  children,
  className,
  title,
  href,
  external = true,
  securityProps = {
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
  },
  ...props
}: Props) =>
  href ? (
    <a className={className} title={title} href={href} {...securityProps}>
      {children}
    </a>
  ) : (
    <Linkify {...securityProps} {...props} options={{ className }}>
      {children}
    </Linkify>
  );

export default Link;
