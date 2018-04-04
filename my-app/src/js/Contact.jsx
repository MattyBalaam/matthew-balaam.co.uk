import React from 'react';
import Paragraphs from './utility/Paragraphs';
import Profiles from './Profiles';

function Contact(props) {
    return (
      <header className="contact">
        <div className="grid">
          <section className="contact__primary">
            <h1 className="section-header contact__name ">{props.name}</h1>
          </section>
        </div>
        <div className="grid">
          <div className="contact__primary">
            <p><a className="contact__email" href={`mailto:${props.email}`}>{props.email}</a></p>
            <Profiles content={props.profiles}/>
            <p className="contact__phone">{props.phone}</p>
          </div>
          <div className="grid__main grid__sub">
            <p className="contact__address grid__sub-info">
              <span className="contact__address-line">{props.location.address}</span>
              <span className="contact__address-line">{props.location.city}</span>
              <span className="contact__address-line">{props.location.postalCode}</span>
            </p>
            <section className="contact__summary grid__sub-description">
              <Paragraphs content={props.summary} />
            </section>
          </div>
        </div>
      </header>
    )
  }

  export default Contact;