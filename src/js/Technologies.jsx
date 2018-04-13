import React from 'react';
import PropTypes from 'prop-types';

const Technologies = ({tech}) => (
  <article className="technology grid">
    <h2 className="technology__header section-header">Technologies</h2>
    <ul className="technology__list section__content">
      {tech.map((item, i) => TechnologyItem(item, i))}
    </ul>
  </article>
);

const TechnologyItem = (item, i) => (
  <li key={i} className="technology__item">
    <span className="technology__item-text">{item}</span>
  </li>
);

Technologies.propTypes = {
  tech: PropTypes.array.isRequired,
}

TechnologyItem.propTypes = {
  i: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
}

export default Technologies;