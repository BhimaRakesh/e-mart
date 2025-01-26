import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
    const firstFiveFurniture =furnitureData.slice(0,5)
    
  return (
  <>
  FURNITURE
    <div className='proSection'>
      {
        
        firstFiveFurniture.map((item,index)=>{
          return(
            <div className='ImageBox' key={index}>
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
