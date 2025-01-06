import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './navbar.module.css'

export default function Navbar() {
  const [scroll, setScroll] = useState(0)
  function handleScroll(){
    if(window.scrollY>100){
      setScroll(1);
    }
    else{
      setScroll(0);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    
  },[])
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${logo.bg} text-uppercase ${(scroll)?'py-2':'py-3'} fixed-top mb-5`}>
  <div className="container">
    <Link className={` navbar-brand text-white text-decoration-none fw-bold   ${logo.sizeh}`}  to="">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse mt-3 " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4">
          <NavLink className={`nav-link nav-link text-white text-decoration-none fw-bold  p-2 ${logo.size} rounded `}aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item mx-3 ">
          <NavLink className={`  nav-link nav-link text-white text-decoration-none fw-bold p-2 ${logo.size} rounded `}aria-current="page" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className={`  nav-link nav-link text-white text-decoration-none fw-bold p-2 ${logo.size} rounded `}aria-current="page" to="contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
    </nav>
    
    </>
  )
}
