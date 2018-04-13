import React from 'react';

const Technologies = props => (
  <article className="technology grid">
    <h2 className="technology__header section-header">Technologies</h2>
    <ul className="technology__list section__content">
      {props.technologies.map((item, i) => {
        return (<li key={i} className="technology__item">
          <span className="technology__item-text">{item}</span>
        </li>)
      })}
    </ul>
  </article>
);

export default Technologies;