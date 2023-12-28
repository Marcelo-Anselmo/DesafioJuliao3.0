import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
        <img src="./logo.svg" alt="" />
        <div className='banner__get'>
            <h1>Esteja por dentro das notícias de todo Brasil, em tempo Real!</h1>
            <Link to={'/login'}><button>Fique por dentro!</button></Link>
        </div>
    </div>
  );
};

export default Banner;
