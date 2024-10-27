import classes from "../../utility/classes";

import Paragraphs from "../Paragraphs/Paragraphs";
import Profiles from "./Profiles";
import Grid, { gridStyles } from "../Grid/Grid";
import { Linkatron } from "../Linkatron/Linkatron";
import SectionHeader from "../SectionHeader/SectionHeader";

import styles from "./Contact.module.css";
import type { Resume } from "~/schema";

export type Props = Resume["basics"];

const Contact = ({
	email,
	image,
	location: { address, city, postalCode },
	name,
	phone,
	profiles,
	summary,
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
					<Linkatron>{email}</Linkatron>
				</p>
				<Profiles profiles={profiles} />
				<p>{phone}</p>
			</div>
			<div className={classes([gridStyles.main, gridStyles.sub])}>
				<p className={gridStyles.subInfo}>
					{[address, city, postalCode]
						.filter((line) => !!line)
						.map((line) => (
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
