import React from 'react'
import style from './about.module.css';
export default function About() {
  return (
    <>
      <div className={`${style.bg} p-5 mt-5 text-white   `}>
        <div className="p-md-5 mt-5 m-auto  ">
          <h1 className='text-uppercase fw-bolder p-4 text-center  '>about component</h1>
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
          <div className={`p-4 ${style.txt}`}>
            <p className='text-left mx-md-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='text-left mx-md-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>

      </div>
    </>
  )
}
