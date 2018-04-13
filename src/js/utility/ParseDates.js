const parseDates = obj => obj.map(role => (
  {
    ...role,
    start: new Date(role.startDate),
    end: new Date(role.endDate),
  })
);

export default parseDates;



