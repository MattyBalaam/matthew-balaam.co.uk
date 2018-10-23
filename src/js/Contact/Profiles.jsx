import React from "react";
import PropTypes from "prop-types";
import Link from "js/Link/Link";

export default class Profiles extends React.Component {
  static propTypes = {
    profiles: PropTypes.arrayOf(
      PropTypes.shape({
        network: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      })
    )
  };
  render() {
    return this.props.content.map(({ network, url, username }) => (
      <p key={url} className="contact__profile">
        <Link title={network} to={url} children={username} />
      </p>
    ));
  }
}
