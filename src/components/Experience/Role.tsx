import React from "react";
import Paragraphs from "../Paragraphs/Paragraphs";
import NiceDate from "../NiceDate/NiceDate";
import Link from "../Link/Link";

import classes from "../../utility/classes";

import styles from "./Role.module.css";
import { gridStyles } from "../Grid/Grid";

type Props = {
  start: Date;
  end?: Date;
  highlights: string[];
  position: string;
  name: string;
  url?: string;
};

const Role = ({ start, end, highlights, position, name, url }: Props) => (
  <section className={classes([styles.role, gridStyles.sub, "divider"])}>
    <header className={classes([styles.header, gridStyles.subInfo])}>
      <p>
        <NiceDate date={start} />
        <> – </>
        {!!end ? <NiceDate date={end} /> : <span>Current</span>}
      </p>
      <p className={styles.title}>{position}</p>
      <p className={styles.name}>{name}</p>
      {url && <Link className={styles.website} to={url} children={url} />}
    </header>
    <section className={gridStyles.subDescription}>
      <Paragraphs source={highlights} />
    </section>
  </section>
);

export default Role;
