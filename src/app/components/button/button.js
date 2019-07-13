import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <a className='button' type='button' href={props.link} target='_blank'>{props.text}</a>
  )
}

Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
}

export default Button
