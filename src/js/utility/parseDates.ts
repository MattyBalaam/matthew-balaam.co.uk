export type Obj = {
  startDate: string;
  endDate: string;
};

export default function parseDates(obj: Obj): any {
  const { startDate, endDate, ...props } = obj;
  return {
    ...props,
    end: new Date(endDate),
    key: startDate,
    start: new Date(startDate)
  };
}
