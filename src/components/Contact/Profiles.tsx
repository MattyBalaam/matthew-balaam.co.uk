import React from "react";
import Link from "../Link/Link";

export interface ProfileProps {
  network: string;
  username: string;
  url: string;
}

export interface Props {
  profiles: ProfileProps[];
}

const Profiles = ({ profiles }: Props) => (
  <>
    {profiles.map(({ network, url, username }) => (
      <p key={url} className="contact__profile">
        <Link title={network} to={url}>
          {username}
        </Link>
      </p>
    ))}
  </>
);

export default Profiles;
