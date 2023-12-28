import React from 'react'
import './index.scss'
import Follow from '../follow/Follow'
import g1 from '/g1-logo-7.png'

const FolloSection = () => {
  return (
    <div className='follow_section'>
        <Follow logo={g1} empresa='G1' />
        <Follow logo='' empresa='G1' />
        <Follow logo={g1} empresa='G1' />
        <Follow logo={g1} empresa='G1' />
        <Follow logo={g1} empresa='G1' />
    </div>
  )
}

export default FolloSection