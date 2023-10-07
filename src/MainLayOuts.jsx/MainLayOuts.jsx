import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

export default function MainLayOuts() {
  return (
    <div className='max-w-6xl mx-auto m-4'>
         <NavBar/>
         <Outlet/> 
    </div>
  )
}
