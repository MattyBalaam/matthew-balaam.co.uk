import React from "react";
import PropTypes from "prop-types";
import MD from "js/Markdown/MD";
import NiceDate from "js/NiceDate/NiceDate";
import Link from "js/Link/Link";
import styles from "./Role.module.css";

export default class Role extends React.Component {
  static propTypes = {
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string
  };
  render() {
    const { start, end, highlights, position, name, url } = this.props;
    return (
      <section className={`${styles.role} grid__sub divider`}>
        <header className={`${styles.header} grid__sub-info`}>
          <p>
            <NiceDate date={start} />
            <> – </>
            <NiceDate date={end} />
          </p>
          <p className={styles.title}>{position}</p>
          <p className={styles.name}>{name}</p>
          {url && <Link className={styles.website} to={url} children={url} />}
        </header>
        <section className="grid__sub-description">
          <MD source={highlights} />
        </section>
      </section>
    );
  }
}
