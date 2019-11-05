import React from 'react'
import css from './style.sass'

export default class Header extends React.Component {
    
    render() {
        return (
            <div className={css.hero}>
                <h1 className={css.title}>Film Release Calendar</h1>
                <p className={css.description}>
                    Click a film, generate a Google Calendar event.
                </p>
                <a href="https://github.com/BTJudge/Film_Release_Calendar">
                    <i className={'fab fa-github ' + css.githubIcon} />
                </a>
            </div>
        )
    }
}