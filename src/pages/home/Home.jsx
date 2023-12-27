import React from 'react'
import './index.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import { CardNews } from '../../components/cardNews/CardNews'
import FolloSection from '../../components/follsection/FolloSection'
import { MOCK } from '../../MOCK/moc'

const Home = () => {


  return (
    <div className='home'>
      <Header />
      <Banner />
      <h2 id='followup'>Siga os principais portais de notícia</h2>
      <FolloSection/>
      <div id='noticias'> 
        <CardNews />

      </div>
    </div>
  );
};

export default Home;
