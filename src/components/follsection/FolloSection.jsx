import React from 'react'
import './index.scss'
import Follow from '../follow/Follow'


const FolloSection = () => {
  return (
    <div className='follow_section'>
        <Follow logo='/g1-logo-7.png' empresa='G1' />
        <Follow logo='/terra-logo.png' empresa='Terra' />
        <Follow logo='/logo0uol.png' empresa='UOL' />
        <Follow logo='/logo-metropoles.png' empresa='Metrópoles' />
        <Follow logo='/logo-veja.png' empresa='VEJA' />
        <Follow logo='/logo-record.png' empresa='Record News' />
    </div>
  )
}

export default FolloSection