import React from 'react'
import logo from "../assets/umbrella.png"
import { TiWeatherSunny } from "react-icons/ti";
import { FaCity } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className='bg-seconday m-4 p-4 rounded-2xl flex flex-col items-center '>
      <img className='w-10' src={logo} alt="" />

      <div className='pt-15'>
        <div className='flex flex-col justify-center items-center p-2 gap-2 mb-3'>
            <TiWeatherSunny className='text-white text-3xl' />
            <span className='text-white font-bold'>Weather</span>
        </div>
        <div className='flex flex-col justify-center items-center p-2 gap-2 mb-3'>
            <FaCity className='text-white text-2xl' />
            <span className='text-white font-bold'>Cities</span>
        </div>
        <div className='flex flex-col justify-center items-center p-2 gap-2 mb-3'>
            <FaMapLocation className='text-white text-2xl' />
            <span className='text-white font-bold'>Map</span>
        </div>
        <div className='flex flex-col justify-center items-center p-2 gap-2 mb-3'>
            <IoSettings className='text-white text-2xl' />
            <span className='text-white font-bold'>Setting</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
