import React from 'react'
import axios from 'axios'
import Loader from '../loader'
import FilmCard from './filmCard'
import css from './style.sass'

export default class FilmCardCollection extends React.Component {

    films = []

    constructor(props) {
        super(props);
        this.state = {
            content: <Loader />,
            errorState: false,
            errorMessage: ''
        };
    }

    async componentDidMount() {
        await this.fetchFilms();
        this.produceContent();
    }

    async fetchFilms() {
        let dummyData
        try {
            let res= await axios.get('https://fhquowiokb.execute-api.us-east-2.amazonaws.com/Test')
            this.films = res.data.films
            console.log(this.films)
        }
        catch(error) {
            this.setState({...this.state,
                isFetching: false,
                error: true,
                errorMessage: 'Ooops. Something seems to be broken. Sorry about that.'
            })
        }
    }

    produceContent() {
        console.log(this.films)
        let newContent = []
        this.films.forEach(film => {
            newContent.push(
                <FilmCard
                        key={film.filmId} 
                        filmName={film.filmName}
                        filmImage={film.filmImage}
                        filmURL={film.filmURL}
                        filmDate={film.filmDate}
                        />
            )
        });
        this.setState({...this.state,
            content: newContent
        })
    }

    render() {
        return (
            <div  id={css.filmCardCollection}>
                {this.state.content}
            </div>
        )
    }
}