import React from "react";
import PropTypes from "prop-types";
import MarkdownParagraphs from "js/utility/MarkdownParagraphs";
import { NiceDate } from "js/utility/DateFormat";
import Link from "js/utility/Link";

export default class Role extends React.Component {
  static propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string
  };
  render() {
    const { start, end, highlights, position, name, url } = this.props;
    return (
      <section className="role grid__sub divider">
        <header className="role__header grid__sub-info">
          <p className="role__dates">
            <NiceDate className="role__start" date={start} />
            <> – </>
            <NiceDate className="role__end" date={end} />
          </p>
          <p className="role__title">{position}</p>
          <p className="role__name">{name}</p>
          {url && <Link className="role__website" to={url} children={url} />}
        </header>
        <section className="role__descripton grid__sub-description">
          <MarkdownParagraphs source={highlights} />
        </section>
      </section>
    );
  }
}
