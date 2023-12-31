import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <img src='/rectnews.svg' alt="" />
        <ul>
            <li><Link to={'/signup'}>Seja membro</Link></li>
            <li><a href="#noticias">Last news</a></li>
            <Link to={'/login'}><button>Login</button></Link>
        </ul>
    </header>
  )
}

export default Header