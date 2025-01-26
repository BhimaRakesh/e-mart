import React from 'react'
import { acData } from '../data/ac'

const Ac = () => {

    const firstFiveAC =acData.slice(0,5)
  return (
   <>
   AC
   <div className='proSection'>
    {
      
      firstFiveAC.map((item)=>{
        return(
          <div className='ImageBox'>
          <img className='proImage' src={item.image} alt="AC"/>
          </div>
        )
      })
    }
  </div></>
  )
}

export default Ac
