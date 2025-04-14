import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Searchbar from '../Components/Searchbar'

const Layout = () => {
  return (
    <div className='bg-primary h-[100vh] flex gap-8'>
      {/* sidebar */}
      <Sidebar />


      {/* searchbar */}
      <div>
      <Searchbar />
      <Outlet />
      </div>
      
    </div>
  )
}

export default Layout
