import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <img src='/rectnews.svg' alt="" />
        <ul>
            <li><Link to={'/signup'}><a>Seja membro</a></Link></li>
            <li><a href="#noticias">Last news</a></li>
            <Link to={'/login'}><a><button>Login</button></a></Link>
        </ul>
    </header>
  )
}

export default Header