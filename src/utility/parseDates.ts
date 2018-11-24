export type Obj = {
  startDate: string;
  endDate: string;
};

export default function parseDates(obj: Obj): any {
  const { startDate, endDate, ...props } = obj;
  const current = endDate.toLowerCase() === "current";
  return {
    ...props,
    current,
    end: !current && new Date(endDate),
    key: startDate,
    start: new Date(startDate)
  };
}
