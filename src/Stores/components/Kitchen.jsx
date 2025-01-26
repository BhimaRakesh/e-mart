import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
    const firstFiveKitchen =kitchenData.slice(0,5)
    
  return (
    <>
    KITCHEN
    <div className='proSection'>
    {
      
      firstFiveKitchen.map((item)=>{
        return(
          <div className='ImageBox'>
          <img className='proImage' src={item.image} alt="kitchen"/>
          </div>
        )
      })
    }
  </div>
    </>
  )
}

export default Kitchen
