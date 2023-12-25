import React, { useState } from 'react'
import './index.scss';

const Follow = (props) => {

    let active
    let action

    const [notFollow, setNotFollow] = useState([true])
    if(notFollow){
        action = 'Seguir'
        active = { background:'linear-gradient(128deg, rgba(81,11,84,1) 0%, rgb(115, 7, 165) 0%, rgb(73, 10, 110) 12%, rgba(213,18,213,1) 98%, rgba(189,17,189,1) 100%, rgba(0,0,0,1) 100%)',
        color:'white'}
    }else{
        action = 'Seguindo'
        active = {background:'white', color: 'black'}
    }


  return (
    <div className='follow'>
        
        <div className='follow__indentimg'>
            <img src={props.logo} alt="" />
        </div>
        <p>{props.empresa}</p>
        <button 
        style={active}
        onClick={() => {
            setNotFollow(!notFollow)}}>{action}
        </button>
        
    </div>
  )
}

export default Follow