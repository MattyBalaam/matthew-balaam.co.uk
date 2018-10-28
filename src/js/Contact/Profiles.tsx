import React from "react";
import PropTypes from "prop-types";
import Link from "js/Link/Link";

export interface ProfileProps {
  network: string;
  username: string;
  url: string;
}

export interface ProfilesProps {
  profiles: ProfileProps[];
}

export default class Profiles extends React.Component<ProfilesProps> {
  render() {
    return this.props.profiles.map(({ network, url, username }) => (
      <p key={url} className="contact__profile">
        <Link title={network} to={url} children={username} />
      </p>
    ));
  }
}
