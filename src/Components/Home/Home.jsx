import React from 'react'
import img from '../../assets/img1.svg'
import style from './home.module.css'
export default function Home() {
  return (
    <>
    <div className={`${style.bg}  mt-5 mb-0 p-5`}>
    <div className="container m-auto text-white">
      <div className="">
        <div className=" m-auto text-center">
          <img src={img} alt="img1" className={` w-100 ${style.img1} p-4`}/>
          <h2 className='text-uppercase fw-bolder fs-1 p-2'>start Framework</h2>
          <div className="d-flex justify-content-center  text-center mb-4 darktxt">
            <div
              className={`border-bottom border-white border-4 w mx-2`}
              id="border"
            ></div>
            <i class="fa-solid fa-star text-white"></i>
            <div
              className={`border-bottom border-white border-4 w mx-2`}
              id="border"
            ></div>
          </div>
          <p className='p-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
    </div>
    
    </>
  )
}
