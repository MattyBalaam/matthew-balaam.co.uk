import type { ElementType, ReactNode } from "react";
import classes from "../../utility/classes";

import styles from "./Grid.module.css";

type Props = {
	children: ReactNode;
	className?: string;
	Component?: ElementType;
	tightBottom?: boolean;
};

const Grid = ({
	children,
	className,
	tightBottom = false,
	Component = "section",
}: Props) => (
	<Component
		className={classes([
			styles.grid,
			tightBottom ? styles.tightBottom : undefined,
			className && styles[className],
		])}
	>
		{children}
	</Component>
);

export { styles as gridStyles };

export default Grid;
