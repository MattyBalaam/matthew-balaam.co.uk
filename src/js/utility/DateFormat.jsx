import React from 'react';

const dateOptions = {  
  weekday: "long", 
  year: "numeric", 
  month: "short",  
  day: "numeric"
};  

const dateFormat = new Intl.DateTimeFormat('en-GB', dateOptions);
const getLongDate = date => dateFormat.format(date);
const getYear = date => date.getFullYear();

const NiceDate = props => (
  <span {...props } title={getLongDate(props.date)}>
    {getYear(props.date)}
  </span>
)

export {NiceDate, getLongDate, getYear};