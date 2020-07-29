import React from "react";
import classes from "../../utility/classes";

import Paragraphs from "../Paragraphs/Paragraphs";
import Profiles, { ProfileProps } from "./Profiles";
import Grid, { gridStyles } from "../Grid/Grid";
import Link from "../Link/Link";
import SectionHeader from "../SectionHeader/SectionHeader";

import styles from "./Contact.module.css";

export type LocationProps = {
  address: string;
  city: string;
  postalCode: string;
  countryCode: string;
};

export type Props = {
  className?: string;
  email: string;
  image: string;
  name: string;
  profiles: ProfileProps[];
  phone: string;
  location: LocationProps;
  summary: string;
  addressLines?: string[];
};

const Contact = ({
  email,
  image,
  location: { address, city, postalCode },
  name,
  phone,
  profiles,
  summary,
  addressLines = [address, city, postalCode],
}: Props) => (
  <header>
    <Grid tightBottom={true}>
      <section className={styles.primary}>
        <SectionHeader className={styles.name} Component="h1">
          {name}
        </SectionHeader>
      </section>
      <div className={classes([gridStyles.main, gridStyles.sub])}>
        <div className={styles.imageHolder}>
          <img className={styles.image} src={image} alt={name} />
        </div>
      </div>
    </Grid>
    <Grid>
      <div className={`${styles.primary} ${styles.primaryMethods}`}>
        <p>
          <Link>{email}</Link>
        </p>
        <Profiles profiles={profiles} />
        <p>{phone}</p>
      </div>
      <div className={classes([gridStyles.main, gridStyles.sub])}>
        <p className={gridStyles.subInfo}>
          {addressLines.map((line) => (
            <span className={styles.addressLine} key={line}>
              {line}
            </span>
          ))}
        </p>
        <Paragraphs className={gridStyles.subDescription} source={summary} />
      </div>
    </Grid>
  </header>
);

export default Contact;
