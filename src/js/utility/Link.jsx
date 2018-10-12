import React from "react";
import PropTypes from "prop-types";
import { find } from "linkifyjs";

export default class Link extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string.isRequired,
    external: PropTypes.bool
  };
  static defaultProps = {
    external: true
  };
  render() {
    const { children, className, title, to, external } = this.props;
    console.log(find(to));
    return (
      <a
        className={className}
        title={title}
        href={find(to)[0].href}
        target={external && "_blank"}
        rel={external && "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
}
