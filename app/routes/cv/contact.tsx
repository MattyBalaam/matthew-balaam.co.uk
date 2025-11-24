import { Icon } from "~/components/icons/icon";
import { Link } from "~/components/link/link";
import { Maskable } from "~/components/maskable/maskable";
import { Paragraphs } from "~/components/typography/typography";
import type { Resume } from "~/schema";

import * as styles from "./contact.css";
import { CvSection } from "./cv-section";

export type ContactProps = Resume["basics"] & {
  mask?: boolean;
};

export function Contact({
  email,
  image,
  location: { address, city, postalCode },
  name,
  phone,
  profiles,
  summary,
  mask = true,
}: ContactProps) {
  return (
    <CvSection tightBottom Component="header">
      <CvSection.Heading className={styles.name} Component="h1">
        <Maskable>{name}</Maskable>
      </CvSection.Heading>
      {!mask ? (
        <CvSection.Child variant="main" divider={false}>
          <img className={styles.image} src={image} alt={name} />
        </CvSection.Child>
      ) : null}

      <CvSection.Child variant="profiles">
        <ul className={styles.profiles}>
          <li>
            <Link maskable href={`mailto:${email}`}>
              {email}
            </Link>
          </li>
          {profiles.map(({ network, url, username }) => (
            <li key={url}>
              <Link maskable href={url} title={network}>
                {username} <Icon network={network} />
              </Link>
            </li>
          ))}
          <li>
            <Maskable>{phone}</Maskable>
          </li>
        </ul>
      </CvSection.Child>

      <CvSection.Child variant="info">
        {[address, city, postalCode]
          .filter((line) => !!line)
          .map((line) => (
            <span className={styles.addressLine} key={line}>
              {line}
            </span>
          ))}
      </CvSection.Child>
      <CvSection.Child variant="sub">
        <Paragraphs maskable>{summary}</Paragraphs>
      </CvSection.Child>
    </CvSection>
  );
}
