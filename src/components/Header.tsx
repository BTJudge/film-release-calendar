import React from 'react';
import { style } from 'typestyle';

const Classes = {
  hero: style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1em'
  }),
  heroTitle: style({
    marginTop: '1em',
    textAlign: 'center'
  }),
  heroDescription: style({
    marginBottom: '1em',
    textAlign: 'center'
  }),
  githubIcon: style({
    fontSize: '2em',
    color: 'white'
  })
}

export default class Header extends React.Component {
  render() {
    return (
      <div className={Classes.hero}>
        <h1 className={Classes.heroTitle}>Film Release Calendar</h1>
        <p className={Classes.heroDescription}>
          Click a film, generate a Google Calendar event.
        </p>
        <a href='https://github.com/BTJudge/Film_Release_Calendar'>
          <i className={`fab fa-github ${Classes.githubIcon}`} />
        </a>
      </div>
    );
  }
}
