import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
    const firstFiveFurniture =furnitureData.slice(0,5)
    
  return (
  <>
  FURNITURE
    <div className='proSection'>
      {
        
        firstFiveFurniture.map((item)=>{
          return(
            <div className='ImageBox'>
            <img className='proImage' src={item.image} alt="furniture"/>
            </div>
          )
        })
      }
    </div>
  </>
  )
}

export default Furniture
