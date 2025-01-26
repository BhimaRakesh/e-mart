import React from 'react'
import { womanData } from '../data/woman'

const WomenDressing = () => {
    const firstFiveWomenDress =womanData.slice(0,5)
  return (
   <>
   WOMEN'S WEAR
    <div className='proSection'>
    {
      
      firstFiveWomenDress.map((item ,index)=>{
        return(
          <div className='ImageBox' key={index}>
          <img className='proImage' src={item.image} alt="womenDresses"/>
          </div>
        )
      })
    }
  </div>
   </>
  )
}

export default WomenDressing
