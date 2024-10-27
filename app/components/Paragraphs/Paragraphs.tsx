import styles from "./Paragraphs.module.css";
import { Linkatron } from "../Linkatron/Linkatron";

export interface Props {
	source: string | string[];
	className?: string;
}

const NEW_PARAGRAPH_INDICATOR = "\n\n";

const Paragraphs = ({ source, className }: Props) => {
	// Convert any strings containing double newline to separate paragraphs.
	const normalisedValues: string[] = (
		Array.isArray(source) ? source : [source]
	).flatMap((val: string) => val.split(NEW_PARAGRAPH_INDICATOR));

	return (
		<div className={className}>
			{normalisedValues.map((text: string) => (
				<p className={styles.paragraph} key={text}>
					<Linkatron>{text}</Linkatron>
				</p>
			))}
		</div>
	);
};

export default Paragraphs;
