import React from 'react'

const Header = props => {
  return (
    <header className='header container'>
      <h1 className='logo'>Logo</h1>
      <nav className='navigation'>
        <ul>
          <li><a href='/'>Intro</a></li>
          <li><a href='/'>Projects</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
