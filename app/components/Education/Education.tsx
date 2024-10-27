import parseDates from "../../utility/parseDates";
import Institution, { type InstitutionProps } from "./Institution";

export interface Props {
	education: InstitutionProps[];
}

const Education = ({ education }: Props) => (
	<>
		{education.map(({ startDate, endDate, ...instProps }) => (
			<Institution
				key={startDate}
				startDate={startDate}
				endDate={endDate}
				{...parseDates({ startDate, endDate })}
				{...instProps}
			/>
		))}
	</>
);

export default Education;
