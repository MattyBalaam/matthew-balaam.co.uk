import React from "react";
import { find } from "linkifyjs";
type LinkProps = {
  className?: string;
  title?: string;
  to?: string;
  href?: string;
  external: boolean;
};
export default class Link extends React.Component<LinkProps, {}> {
  static defaultProps = {
    external: true
  };
  render() {
    const { children, className, title, to, href, external } = this.props;
    return (
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
  }
}
