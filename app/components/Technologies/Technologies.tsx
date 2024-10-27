import Grid from "../Grid/Grid";
import SectionHeader from "../SectionHeader/SectionHeader";
import Item from "./Item";
import styles from "./Technologies.module.css";

import type { Resume } from "~/schema";

interface Props {
	tech: Resume["skills"][number]["keywords"];
}

const Technologies = ({ tech }: Props) => (
	<Grid Component="article">
		<SectionHeader>Technologies</SectionHeader>
		<ul className={`${styles.list} section__content`}>
			{tech.map((item) => (
				<Item key={item}>{item}</Item>
			))}
		</ul>
	</Grid>
);

export default Technologies;
