import React from 'react'
import css from './style.sass'

export default class FilmCard extends React.Component {

    render() {
        let filmCardStyle = {
            backgroundImage: 'url(' + this.props.filmImage + ')'
        }
        return (
            <a className={css.filmCard} style={filmCardStyle} href={this.props.filmURL} key={this.props.key}>
                <div className={css.filmContentContainer}>
                    <p className={css.filmTitle}>{this.props.filmName}</p>
                    <p className={css.filmDate}>{this.props.filmDate}</p>
                </div>
            </a>
        )
    }
}