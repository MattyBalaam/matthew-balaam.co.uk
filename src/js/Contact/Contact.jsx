import React from "react";
import MD from "js/Markdown/MD";
import PropTypes from "prop-types";
import Profiles from "./Profiles";
import Grid from "js/Grid/Grid";
import Link from "js/Link/Link";
import SectionHeader from "js/SectionHeader/SectionHeader";

import styles from "./Contact.module.css";

export default class Contact extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profiles: PropTypes.array.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired
    }).isRequired,
    summary: PropTypes.string.isRequired
  };

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
            <Profiles content={profiles} />
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
