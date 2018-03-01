import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  const body = {
    contact: {
      email: 'mattybalaam@gmail.com',
      twitter: '@matthewbalaam',
      phone: '07730 953 486',
      address: [
        'Flat 3, 11 Medina Villas',
        'Brighton and Hove',
        'BN3 2RJ'
      ]
    },
    summary: [
      'Strong front-end developer able to stretch to full-stack in a team. Restless learner with a keenness to discover “how does it work?”, and how to improve skills while following best practice.',
      'Main skill set in JavaScript, CSS and HTML, with extensive cross-browser knowledge. Always keen to develop and learn new approaches to working.',
      'Previous background in graphic design and multimedia with an eye for accuracy and the little details to make work stand-out. ',
    ],
    experience: [
      {
        company: 'Filmstro',
        title: 'Software developer',
        website: 'filmstro.com',
        dates: {
          start: '20170721', //toDo
          end: '20180323', //toDo
        },
        description: [
          'Full-stack developer at a startup working on cross-platform adaptive-music desktop app Filmstro Pro: A React/Redux app inside Electron communicating with a lower-level audio binary.',
          'Building new features, improving performance and fixing bugs. Providing input on UI and UX from prototype to final feature. Migrated build from Gulp to Webpack, writing automated end-to-end testing from specs by lead tester.',
          'Working on corporate website built using Laravel with the Voyager CMS, primarily helping with cross-browser consistency.',
          'Working using a Kanban Agile framework with daily stand-ups. Meeting with the product owner and 4 other devs to prioritise stories, tasks and bugs, sub-tasks then decided among devs.',
       ],
      }, {
        company: 'New Era Education Ltd.',
        title: 'Front-end developer',
        website: 'neweraed.co.uk',
        dates: {
          start: '20170720', //toDo
          end: '20130707', //toDo
        },
        description: [
          'Sole developer on all company public-facing websites using JavaScript, CSS (SASS/PostCSS) and webpack, with SilverStripe (PHP) providing an MVC framework (HTML templating, SQL, and an easy-to-use CMS for content editors.',
          'Working in a team on DB Primary, a safe, easy-to-use internet experience for pupils and teachers with a Java backend.',
          'Creating interactive learning materials and assessed games. Developing an easy-to-use activity builder tool allowing teachers to set their own quizzes and surveys.',
        ],
      }, {
        company: 'Freelance',
        title: 'Developer and designer',
        website: 'matthewbalaam.co.uk',
        dates: {
          start: '20091010', //toDO
          end: '20130707', //toDo
        },
        description: [
          'Building bespoke responsive websites with concise, accessible, standards compliant, device responsive HTML and CSS, JavaScript and PHP to work over all major browsers.',
          'Designing and developing interactive E-learning courses at all stages from art-direction to final built course.',
          'Creating a wide range of printed materials, emails and animated banners. Sourcing and liasing with print suppliers. ',
        ], 
      }, {
        company: 'Newsquest Media',
        title: 'Graphic designer',
        dates: {
          start: '20010708', //toDo
          end: '20091010', //toDo
        },
        description: [
          'Design conception through to final artworking on a very broad range of print and digital projects. Working in a collaborative design team. Liaising with all departments, as well as external clients and printers.',
        ],
      }, {
        company: 'Archant Media',
        title: 'Artworker',
        dates: {
          start: '19970102', //toDo
          end: '20010707', //toDo
        },
        description: [
          'Mostly print-based work using applications including Illustrator, Photoshop, Fireworks and QuarkXPress in a time-critical daily newspaper work environment.',
        ],        
      }
    ],
    education: {
      institution: 'Southampton Solent Univesity',
      course: 'BA (Hons) Media and Cultural Studies',
      dates: {
        start: '19930915',  //toDo
        end: '19960715', //toDo
      },
      description: [
       'The practical half of this degree covered web design, television and radio production, desktop publishing, journalism and photography. These creative practices were informed by studying strands of critical theory with an emphasis on how these can assist the creative process.' 
      ]
    },
    technologies: [
      'HTML', 
      'JavaScript', 
      'CSS',
      'React with Redux',
      'PostCSS, SASS, LESS',     
      'TypeScript, ES2016, Babel',
      'Node, npm, yarn',
      'Webpack',
      'PHP (SIlverStripe, Laravel)',
      'CMSs (SilverStripe, Voyager)',
      'Git',
    ]
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
