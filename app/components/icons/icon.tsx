import { ScreenReaderText } from "~/components/screen-reader-text/screen-reader-text";

import { BlueskyIcon } from "./bluesky";
import { GitHubIcon } from "./github";
import { LinkedInIcon } from "./linked-in";

import * as styles from "./icon.css";

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
    <span className={styles.icon}>
      <ScreenReaderText>{network}</ScreenReaderText>
      {icon}
    </span>
  ) : (
    network
  );
}
