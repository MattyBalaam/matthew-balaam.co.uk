import React from "react";
import MarkdownParagraphs from "../utility/MarkdownParagraphs";
import PropTypes from "prop-types";
import Profiles from "./Profiles";
import Link from "../utility/Link";

export default class Contact extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profiles: PropTypes.array.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired
  };

  render() {
    const {
      email,
      image,
      location: { address, city, postalCode },
      name,
      phone,
      profiles,
      summary
    } = this.props;
    return (
      <header className="contact">
        <div className="grid grid--tight-bottom">
          <section className="contact__primary">
            <h1 className="section-header contact__name ">{name}</h1>
          </section>
          <div className="grid__main grid__sub">
            <div className="contact__image-holder">
              <img className="contact__image" src={image} alt={name} />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="contact__primary contact__primary--methods">
            <p>
              <Link className="contact__email" to={email} children={email} />
            </p>
            <Profiles content={profiles} />
            <p className="contact__phone">{phone}</p>
          </div>
          <div className="grid__main grid__sub">
            <p className="contact__address grid__sub-info">
              <span className="contact__address-line">{address}</span>
              <span className="contact__address-line">{city}</span>
              <span className="contact__address-line">{postalCode}</span>
            </p>
            <MarkdownParagraphs
              className="contact__summary grid__sub-description"
              source={summary}
            />
          </div>
        </div>
      </header>
    );
  }
}
