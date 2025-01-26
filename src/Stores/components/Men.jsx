import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const firstFiveMen =menData.slice(0,5)
    
      return (
      <>
      MEN'S WEAR
        <div className='proSection'>
          {
            
            firstFiveMen.map((item)=>{
              return(
                <div className='ImageBox'>
                <img className='proImage' src={item.image} alt="mens wear"/>
                </div>
              )
            })
          }
        </div>
      </>
      )
    }
    

export default Men
