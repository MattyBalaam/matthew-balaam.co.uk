import React from "react";
import Link from "../Link/Link";

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
