import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watches = () => {
<<<<<<< HEAD
=======

    const firstFiveImages = watchData.slice(0,5)

  return (
    <>
    <h2>Watches</h2>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                        <Link to='/watch'>
                         <img className='proImage' src={item.image} alt="" />
                        </Link>
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}
>>>>>>> f3949155b159b6378e3c1394403c608820ee6bbd

    const firstFiveImages = watchData.slice(0,5)

  return (
    <>
    <h2>Watches</h2>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                        <Link to='/watch'>
                         <img className='proImage' src={item.image} alt="" />
                        </Link>
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Watches