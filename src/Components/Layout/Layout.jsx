import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import style from './layout.module.css'

export default function Layout() {
  return (
    <>
    
    <div className=" ">
    <div className=''>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    
    </div>

    </>
    
  )
}
