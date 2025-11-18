interface FormattedDateProps {
  date: string;
}

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function FormattedDate(props: FormattedDateProps) {
  const date = new Date(props.date);

  return (
    <span title={dateFormat.format(date)} suppressHydrationWarning>
      {date.getFullYear().toString()}
    </span>
  );
}
