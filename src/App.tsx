import React from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import FilmCardCollection from "./components/FilmCardCollection";
import Film from "./Film";
import { style } from "typestyle";
import axios from "axios";

const Classes = {
  App: style({
    textAlign: "center"
  })
};

interface State {
  loading: boolean;
  filmArray: Array<Film>;
  errorState: boolean;
  errorMessage?: string;
}

export default class App extends React.Component<{}, State> {
  axiosSignal = axios.CancelToken.source();

  render() {
    return (
      <div className={Classes.App}>
        <Header />
        {this.state.loading ? (
          <Loader />
        ) : !this.state.errorState ? (
          <FilmCardCollection films={this.state.filmArray} />
        ) : (
          <p>{this.state.errorMessage}</p>
        )}
      </div>
    );
  }

  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      filmArray: new Array<Film>(),
      errorState: false
    };
  }

  componentDidMount() {
    this.fetchFilms();
  }

  componentWillUnmount() {
    this.axiosSignal.cancel();
  }

  async fetchFilms() {
    try {
      let {
        data: { films }
      } = await axios.get(
        "https://fhquowiokb.execute-api.us-east-2.amazonaws.com/Test",
        { cancelToken: this.axiosSignal.token }
      );

      this.setState({
        ...this.state,
        loading: false,
        filmArray: films.map(
          (film: any): Film => {
            return new Film(film);
          }
        )
      });
    } catch (error) {
      this.setState({
        ...this.state,
        loading: false,
        errorState: true,
        errorMessage: "Ooops. Something seems to be broken. Sorry about that."
      });
    }
  }
}
