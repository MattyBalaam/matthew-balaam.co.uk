import React from "react";
import Linkatron from "../Linkatron/Linkatron";

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
        <Linkatron visibleLink={username}>{url}</Linkatron>
      </p>
    ))}
  </>
);

export default Profiles;
