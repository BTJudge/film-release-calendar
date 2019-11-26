import React from "react";
import FilmCard from "./FilmCard";
import Film from "../Film";
import { style } from "typestyle";

const Classes = {
  filmCardCollection: style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  })
};

interface IFilmCardCollection {
  films: Array<Film>;
}

export default class FilmCardCollection extends React.Component<
  IFilmCardCollection,
  IFilmCardCollection
> {
  private films: Array<any> = [];

  render() {
    return (
      <div className={Classes.filmCardCollection}>
        {this.state.films.map(film => {
          return (<FilmCard film={film} />)
        })}
      </div>
    );
  }

  constructor(props: any) {
    super(props);
    this.state = {
      films: props.films
    };
  }
}
