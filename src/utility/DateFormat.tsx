const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
};

const dateFormat = new Intl.DateTimeFormat("en-GB", dateOptions);

export function getLongDate(date: Date): string {
  return dateFormat.format(date);
}

export function getYear(date: Date): string {
  return date.getFullYear().toString();
}
