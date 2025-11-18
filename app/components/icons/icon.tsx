import { BlueskyIcon } from "./bluesky";
import { GitHubIcon } from "./github";
import { LinkedInIcon } from "./linked-in";

import styles from "./icon.module.css";

const icons = {
  LinkedIn: <LinkedInIcon />,
  Bluesky: <BlueskyIcon />,
  GitHub: <GitHubIcon />,
} as const;

interface IconProps {
  network: keyof typeof icons | string;
}

export function Icon({ network }: IconProps) {
  const icon = network in icons && icons[network as keyof typeof icons];

  return icon ? (
    <span className={styles.icon} aria-label={network}>
      {icon}
    </span>
  ) : (
    network
  );
}
