import React from 'react'
import './index.scss'
import Follow from '../follow/Follow'


const FolloSection = () => {
  return (
    <div className='follow_section'>
        <Follow logo='/g1-logo-7.png' empresa='G1' />
        <Follow logo='/globo-logo.png' empresa='Globo.com' />
        <Follow logo='/logo0uol.png' empresa='UOL' />
        <Follow logo='/band-logo.png' empresa='Band Jornalismo' />
        <Follow logo='/logo-veja.png' empresa='VEJA' />
        <Follow logo='/espn-logo.png' empresa='ESPN.com.br' />
    </div>
  )
}

export default FolloSection