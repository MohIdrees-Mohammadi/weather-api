import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

const Layout = () => {
  return (
    <div className='bg-primary h-[100vh] flex gap-8'>
      {/* sidebar */}
      <Sidebar />


      {/* searchbar */}
      <div>
      <h1 className='text-white'>SearchBar</h1>
      <Outlet />
      </div>
      
    </div>
  )
}

export default Layout
