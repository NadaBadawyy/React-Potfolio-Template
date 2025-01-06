import React from 'react'
import style from './footer.module.css'
export default function Footer() {
  return (
    <>
    <footer className=' '>
      <div className={`p-5 text-white ${style.bg}`}>
      <div className=" container ">
      <div className="row text-center">
        <div className="col-md-4 p-5">
          <div className="item">
            <h4>LOCATION</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4 p-5 text-center">
          <h4 >AROUND THE WEB</h4>
          <div className="icons d-flex align-items-center text-center justify-content-center">
            <div className=" mx-2 icon border-white border rounded-circle p-2 d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-facebook"></i>
            </div>
            <div className=" mx-2 icon border-white border rounded-circle p-2 d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-twitter"></i>
            </div>
            <div className=" mx-2 icon border-white border rounded-circle p-2 d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className=" mx-2 icon border-white border rounded-circle p-2 d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-globe"></i>
            </div>
             
            
            
          </div>
        </div>
        <div className="col-md-4 p-5">
          <div className="item">
            <h4>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>
      </div>
    </div>   
    </div>
    <div className={`text-center text-white p-4 ${style.dbg}`}>
      <p className='m-0'>Copyright © Your Website 2021</p>
    </div>
    </footer>
    

    </>
  )
}
