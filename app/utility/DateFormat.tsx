const dateOptions = {
	weekday: "long",
	year: "numeric",
	month: "short",
	day: "numeric",
} as const;

const dateFormat = new Intl.DateTimeFormat("en-GB", dateOptions);

export function getLongDate(date: Date) {
	return dateFormat.format(date);
}

export function getYear(date: Date) {
	return date.getFullYear().toString();
}
