import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'

const Hero = props => {
  return (
    <div className='hero container'>
      <h1 className='hero-title'>{props.title}</h1>
      <h2 className='hero-subtitle'>{props.subtitle}</h2>
      <Button text={'Get in touch'} link={'/'} />
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Hero
