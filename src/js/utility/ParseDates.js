export default function parseDates(obj) {
  return obj.map(props => {
    const { startDate, endDate, ...role } = props;
    return {
      ...role,
      end: new Date(endDate),
      key: startDate,
      start: new Date(startDate)
    };
  });
}
