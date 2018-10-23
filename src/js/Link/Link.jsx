import React from "react";
import PropTypes from "prop-types";
import { find } from "linkifyjs";

export default class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    external: PropTypes.bool
  };
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
        target={external && "_blank"}
        rel={external && "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
}
