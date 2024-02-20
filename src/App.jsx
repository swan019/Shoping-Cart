import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HiAcademicCap } from "react-icons/hi";
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Components/Cart';



function App() {
  

  return (
   <div className='p-5'>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

   </div>
  )
}

export default App
