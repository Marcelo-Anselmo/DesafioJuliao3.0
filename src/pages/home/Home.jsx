import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import { CardNews } from '../../components/cardNews/CardNews'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <CardNews/>
    </div>
  )
}

export default Home