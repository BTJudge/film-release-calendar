import React from 'react';
import Film from '../Film'
import { style } from 'typestyle';

const Classes = {
  filmCard: style({
    width: '10rem',
    height: '14rem',
    fontWeight: 300,
    marginTop: '1em',
    backgroundSize: 'cover',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#fbfbfb',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    transition: 'opacity .25s ease-in-out'
  }),
  filmContentContainer: style({
    width: '100%',
    height: '100%',
    opacity: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    transition: 'opacity .25s ease-in-out',
    padding: '10px',
    $nest: {
      '&:hover': {
        opacity: 1
      }
    }
  }),
  filmTitle: style({
    marginBottom: '0.2em',
    fontWeight: 'bold'
  }),
  filmDate: style({})
}

interface IFilmCard {
  film: Film
}

export default class FilmCard extends React.Component<IFilmCard> {
  render() {
    let filmCardStyle = {
      backgroundImage: `url(${this.props.film.getImage()})`
    };
    let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <a
        className={Classes.filmCard}
        style={filmCardStyle}
        href={this.props.film.getUrl()}
        key={this.props.film.getId()}
      >
        <div className={Classes.filmContentContainer}>
          <p className={Classes.filmTitle}>{this.props.film.getName()}</p>
          <p className={Classes.filmDate}>{this.props.film.getDate().toLocaleDateString('en-GB', dateOptions)}</p>
        </div>
      </a>
    );
  }

  constructor(props: IFilmCard) {
    super(props);
    this.state = {
      film: props.film
    }
  }
}
