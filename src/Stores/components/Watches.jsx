import React from 'react'
import { watchData } from '../data/watch'

const Watches = () => {
 const firstFiveWatches =watchData.slice(0,5)
 
   return (
    <>
    WATCHES
     <div className='proSection'>
       {
         
         firstFiveWatches.map((item)=>{
           return(
             <div className='ImageBox'>
             <img className='proImage' src={item.image} alt="watches"/>
             </div>
           )
         })
       }
     </div>
    </>
   )
 }

export default Watches
