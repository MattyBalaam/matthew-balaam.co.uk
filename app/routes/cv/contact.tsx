import { Paragraphs } from "~/components/typography/typography";

import { StringToLink } from "../../components/string-to-link";

import * as styles from "./contact.css";
import type { Resume } from "~/schema";
import { Icon } from "~/components/icons/icon";
import { CvSection } from "./cv-section";

export type ContactProps = Resume["basics"];

export function Contact({
  email,
  image,
  location: { address, city, postalCode },
  name,
  phone,
  profiles,
  summary,
}: ContactProps) {
  return (
    <CvSection tightBottom Component="header">
      <CvSection.Heading className={styles.name} Component="h1">
        {name}
      </CvSection.Heading>
      <CvSection.Child variant="main" divider={false}>
        <img className={styles.image} src={image} alt={name} />
      </CvSection.Child>

      <CvSection.Child variant="profiles">
        <ul className={styles.profiles}>
          <li>
            <StringToLink>{email}</StringToLink>
          </li>
          {profiles.map(({ network, url, username }) => (
            <li key={url}>
              <a href={url} title={network}>
                {username} <Icon network={network} />
              </a>
            </li>
          ))}
          <li>{phone}</li>
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
        <Paragraphs>{summary}</Paragraphs>
      </CvSection.Child>
    </CvSection>
  );
}
