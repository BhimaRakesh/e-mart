import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {
const firstFiveImages = mobileData.slice(0,5)


  return (
   <>
   MOBILES
    <div>
        <div className="proSection">
      {
      firstFiveImages.map((item ,index)=>{
        return(
            <div className="ImageBox" key={index}>
            <img className="proImage"src = {item.image} alt = "g"/>
            </div>
        )
      })}
      </div>
    </div>
   </>
  )
}

export default Mobiles
