import type { ReactNode } from "react";
import styles from "./Item.module.css";

interface Props {
	children: ReactNode;
}

const Item = ({ children }: Props) => (
	<li className={styles.item}>
		<span className={styles.itemText}>{children}</span>
	</li>
);

export default Item;
