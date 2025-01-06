import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)
  let x=createBrowserRouter([
    {path:"",element:<Layout/>, children:[
      {index:true,element:<Home/>},
      {path:"about", element: <About/>},
      {path:"contact", element: <Contact/>},
      {path:"portfolio", element: <Portfolio/>},
      {path:"*", element: <NotFoundPage/>},
    ]}
    
  ])
  return (
    <RouterProvider router={x}  >

    </RouterProvider>
  )
}

export default App
