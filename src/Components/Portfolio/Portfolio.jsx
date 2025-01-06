import React, { useState } from "react";
import {imgs} from './imgs.js'
import Ports from "../Ports/Ports";
import style from './portfolio.module.css'
export default function Portfolio() {
  

  const [imgg, setimgg] = useState("")
  return (
    < >
    <div className="">
    <div className="container-fluid ">
        <div className=" p-md-5 mt-5 m-auto ">
          <h1 className="pt-5 text-uppercase fw-bolder text-center darktxt ">
            portfolio component
          </h1>
          <div className="d-flex justify-content-center  text-center mb-4 darktxt ">
            <div
              className={`border-bottom bcolor border-4 w mx-2`}
              id="border"
            ></div>
            <i class="fa-solid fa-star"></i>
            <div
              className={`border-bottom bcolor border-4 w mx-2`}
              id="border"
            ></div>
          </div>
          <div className="row">
            {imgs.map((p)=>{
                return<Ports src={p.src} onClick={()=>{setimgg(p.src)}}/>
            })}
            
          </div>
        </div>
      </div>
      {(imgg.length)&&<div className={`${style.box}  d-flex  justify-content-center align-items-center  `} onClick={()=>{setimgg("")}}>
        
        <img src={imgg} alt="" className="img-fluid w-25" onClick={(e)=>{
          
          e.stopPropagation();
        }}/>
     
    </div>}
    </div>
     
    </>
  );
}
