import type * as Route from "./+types.home";

import type { MetaFunction } from "react-router";
import { zResume } from "~/schema";

import jsonData from "~/json/cv.json";
import Download from "~/components/Download/Download";
import Cube from "~/components/Cube/Cube";
import Contact from "~/components/Contact/Contact";
import Technologies from "~/components/Technologies/Technologies";
import Experience from "~/components/Experience/Experience";
import Education from "~/components/Education/Education";

import * as styles from "./home.module.css";

export const meta: MetaFunction = () => {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
};

export const loader = async () => {
	return zResume
		.required({
			basics: true,
			skills: true,
			work: true,
			education: true,
		})
		.parse(jsonData);
};

export default function Index({ loaderData }: Route.ComponentProps) {
	const { basics, skills, work, education } = loaderData;

	return (
		<>
			<Download />
			<Cube className={styles.cv}>
				<article className={styles.cvGrid}>
					<Contact {...basics} />
					<Technologies tech={skills[0].keywords} />
					<Experience work={work} />
					<Education education={education} />
				</article>
			</Cube>
		</>
	);
}
