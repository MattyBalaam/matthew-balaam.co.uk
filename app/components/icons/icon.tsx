import { BlueskyIcon } from "./bluesky";
import { GitHubIcon } from "./github";
import * as styles from "./icon.css";
import { LinkedInIcon } from "./linked-in";

const icons = {
  LinkedIn: <LinkedInIcon />,
  Bluesky: <BlueskyIcon />,
  GitHub: <GitHubIcon />,
} as const;

interface IconProps {
  network: string;
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
