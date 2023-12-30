import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <header className='header'>
        <img src='/rectnews.svg' alt="" />
        <ul>
            <li><a href="/signup">Seja membro</a></li>
            <li><a href="#noticias">Last news</a></li>
            <a href="/login"><button>Login</button></a>
        </ul>
    </header>
  )
}

export default Header