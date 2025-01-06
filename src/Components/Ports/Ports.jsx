import React from 'react'
import style from './pors.module.css'
export default function Ports(props) {
   const {src,onClick}=props
    
  return (
    <>
    
      <div className="col-md-4 " onClick={()=>{
        onClick()
      }} >
        <div className={`my-3 position-relative ${style.con}`}>
            <img src={src} alt="" className='w-100 rounded ' />
            <div className={`${style.layer} d-flex justify-content-center align-items-center `}>
            <i className={`fa-solid fa-heart  text-white ${style.i}`}></i>
            </div>
        </div>
      </div>
      
    </>
  )
}
