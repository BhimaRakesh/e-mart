import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {

    const firstFiveAC =acData.slice(0,5)
  return (
   <>
   AC
   <div className='proSection'>
    {
      
      firstFiveAC.map((item , index)=>{
        return(
          <div className='ImageBox' key={index}>
          <img className='proImage' src={item.image} alt="AC"/>
          </div>
        )
      })
    }
  </div></>
  )
}

export default Ac
