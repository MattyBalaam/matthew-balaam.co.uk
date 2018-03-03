import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bodyText} from './bodyText';


class Paragraphs extends Component {

  render (){
    return (
      <>
        {this.props.content.map(line => {
          return (
            <p>{line}</p>
          )
        })}
      </>
    )
  }
}


class Contact extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const content = this.props.content;
    const lastAddressI = content.address.length;
    return (
      <div className="contact">

        <a className="contact__email" href={`mailto:${content.email}`}>{content.email}</a>
        <p className="contact__phone">{content.phone}</p>
        <a className="contact__twitter" href={`https://twitter.com/${content.twitter}`}>{content.twitter}</a>
        {/* // could perhaps maps through these and key name from key ^^  */}
        <p className="contact__address">
          {
            content.address.map((line, i) => {
              if (i < lastAddressI) {
                line += ' ';
              }
            return (
              <span key={i} className={"contact__address-line"}>{line}</span>
            )
          })}
        </p>
      </div>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentWillMount() {
    this.setState({
      bodyText: bodyText,
    })
    console.log('figure out why fragments aren’t working');
  }

  render() {
    const body = this.state.bodyText;
    return (
      <div className="App">
        <header className="contact">
          <h1 className="">{body.name.first} {body.name.surname}</h1>
          <Contact content={body.contact} />
          <Paragraphs content={body.summary} />
        </header>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
