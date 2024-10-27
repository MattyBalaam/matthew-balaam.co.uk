interface DateObject {
	startDate: string;
	endDate: string;
	current?: boolean;
}

const parseDates = ({
	startDate,
	endDate,
	current = endDate.toLowerCase() === "current",
}: DateObject) => ({
	end: !current ? new Date(endDate) : undefined,
	start: new Date(startDate),
});

export default parseDates;
