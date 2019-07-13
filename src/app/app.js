import React from 'react'

import Header from './components/header/header'
import Hero from './components/hero/hero'

import '../stylesheets/main.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Hero
          title={'Hi, I\'m Gareth'}
          subtitle={'A software engineering graduate based in Peterborough.'}
        />
      </div>
    )
  }
}
