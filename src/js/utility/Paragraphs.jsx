import React from 'react';

const Paragraphs = props => (
  <div className="paragraphs">
    {props.content.map((line, i) => <p key={i} className="paragraphs__p" >{line}</p>)}
  </div>
);

export default Paragraphs;