import React from 'react'
import { watchData } from '../data/watch'

const Watches = () => {
 const firstFiveWatches =watchData.slice(0,5)
 
   return (
    <>
    WATCHES
     <div className='proSection'>
       {
         
         firstFiveWatches.map((item ,index)=>{
           return(
             <div className='ImageBox' key={index}>
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
