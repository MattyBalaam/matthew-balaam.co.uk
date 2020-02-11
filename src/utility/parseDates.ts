interface DateObject {
  startDate: string;
  endDate: string;
  current?: boolean;
}

const parseDates = ({
  startDate,
  endDate,
  current = endDate.toLowerCase() === "current"
}: DateObject) => ({
  current,
  end: !current && new Date(endDate),
  key: startDate,
  start: new Date(startDate)
});

export default parseDates;
