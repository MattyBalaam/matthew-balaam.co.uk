import React from "react";
import MD from "../Markdown/MD";
import NiceDate from "../NiceDate/NiceDate";
import Link from "../Link/Link";
import styles from "./Role.module.css";

type Props = {
  current: Boolean;
  start: Date;
  end: Date;
  highlights: string[];
  position: string;
  name: string;
  url?: string;
};

const Role = ({
  current,
  start,
  end,
  highlights,
  position,
  name,
  url
}: Props) => (
  <section className={`${styles.role} grid__sub divider`}>
    <header className={`${styles.header} grid__sub-info`}>
      <p>
        <NiceDate date={start} />
        <> – </>
        {current ? <span>Current</span> : <NiceDate date={end} />}
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

export default Role;
