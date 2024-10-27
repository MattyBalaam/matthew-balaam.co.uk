import Paragraphs from "../Paragraphs/Paragraphs";
import NiceDate from "../NiceDate/NiceDate";
import { Linkatron } from "../Linkatron/Linkatron";

import classes from "../../utility/classes";

import styles from "./Role.module.css";
import { gridStyles } from "../Grid/Grid";
import type { Resume } from "~/schema";

type Props = Resume["work"][number];

const Role = ({ start, end, highlights, position, name, url }: Props) => (
	<section className={classes([styles.role, gridStyles.sub, "divider"])}>
		<header className={classes([styles.header, gridStyles.subInfo])}>
			<p>
				<NiceDate date={start} />
				<> – </>
				{end ? <NiceDate date={end} /> : <span>Current</span>}
			</p>
			<p className={styles.title}>{position}</p>
			<p>{name}</p>
			{url && <Linkatron className={styles.website}>{url}</Linkatron>}
		</header>
		<section className={gridStyles.subDescription}>
			<Paragraphs source={highlights} />
		</section>
	</section>
);

export default Role;
