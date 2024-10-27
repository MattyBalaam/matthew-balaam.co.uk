import { getYear, getLongDate } from "../../utility/DateFormat";

interface Props {
	date: Date;
}

const NiceDate = ({ date }: Props) => (
	<span title={getLongDate(date)}>{getYear(date)}</span>
);

export default NiceDate;
