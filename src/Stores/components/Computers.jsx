import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {

  const firstFiveComputers =computerData.slice(0,5)

  return (
  <>
  COMPUTERS
    <div className='proSection'>
      {
        
        firstFiveComputers.map((item, )=>{
          return(
            <div className='ImageBox'>
            <img className='proImage' src={item.image} alt="computers"/>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Computers
