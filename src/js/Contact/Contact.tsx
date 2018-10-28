import React from "react";
import MD from "js/Markdown/MD";
import Profiles, { ProfileProps } from "./Profiles";
import Grid from "js/Grid/Grid";
import Link from "js/Link/Link";
import SectionHeader from "js/SectionHeader/SectionHeader";

import styles from "./Contact.module.css";

export type LocationProps = {
  address: string;
  city: string;
  postalCode: string;
  countryCode: string;
};

export type ContactProps = {
  className?: string;
  email: string;
  image: string;
  name: string;
  profiles: ProfileProps[];
  phone: string;
  location: LocationProps;
  summary: string;
};

export default class Contact extends React.Component<any> {
  render() {
    const {
      email,
      image,
      location: { address, city, postalCode },
      name,
      phone,
      profiles,
      summary
    } = this.props;
    const addressLines = [address, city, postalCode];

    return (
      <header>
        <Grid tightBottom={true}>
          <section className={styles.primary}>
            <SectionHeader className={styles.name} Component="h1">
              {name}
            </SectionHeader>
          </section>
          <div className="grid__main grid__sub">
            <div className={styles.imageHolder}>
              <img className={styles.image} src={image} alt={name} />
            </div>
          </div>
        </Grid>
        <Grid>
          <div className={`${styles.primary} ${styles.primaryMethods}`}>
            <p>
              <Link className={styles.email} to={email} children={email} />
            </p>
            <Profiles profiles={profiles} />
            <p className={styles.phone}>{phone}</p>
          </div>
          <div className="grid__main grid__sub">
            <p className="grid__sub-info">
              {addressLines.map(line => (
                <span className={styles.addressLine} key={line}>
                  {line}
                </span>
              ))}
            </p>
            <MD className="grid__sub-description" source={summary} />
          </div>
        </Grid>
      </header>
    );
  }
}
