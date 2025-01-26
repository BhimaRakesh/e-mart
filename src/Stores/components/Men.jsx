
import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const Men = () => {
<<<<<<< HEAD
=======

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle">
        <h2>Men Fashion</h2>
      </div>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                      <Link to='/men'>
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

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle">
        <h2>Men Fashion</h2>
      </div>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                      <Link to='/men'>
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

export default Men