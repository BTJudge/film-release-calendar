import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import FilmCardCollection from '../components/filmCardCollection'

class Home extends React.Component {

    render() {
        return (
            <div>
              <Head>
                <title>Film Release Calendar</title>
                <link rel='icon' href='/images/favicon/favicon.ico' />
                <link rel='stylesheet' href='stylesheets/style.css' />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
              </Head>
              <Header />
              <FilmCardCollection />
            </div>
        )   
    }
}

export default Home