import React from 'react'
import './index.scss'
import rect from '/rectnews.svg'

const Header = () => {
  return (
    <header className='header'>
        <img src={rect} alt="" />
        <ul>
            <li><a href="">Seja membro</a></li>
            <li><a href="#lastNews">Last news</a></li>
            <a href=""><button>Login</button></a>
        </ul>
    </header>
  )
}

export default Header