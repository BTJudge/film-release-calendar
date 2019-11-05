import React from 'react'
import css from './style.sass'

export default class Loader extends React.Component {
    render() {
        return (
            <div id={css.loader}>
            </div>
        )
    }
}
