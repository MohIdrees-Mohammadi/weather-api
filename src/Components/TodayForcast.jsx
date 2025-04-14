import React from 'react'
import cloudy from "../assets/cloudy.png"
const TodayForcast = () => {
  return (
    <div className='bg-seconday w-[60%] rounded-2xl p-4'>
      <span className='text-gray-300'>Today's Forcast</span>
      <div className='flex gap-2 mt-4'>
        <div className=" flex flex-col justify-center items-center gap-2 border-r-1 border-gray-700 p-1" >
            <span className='text-gray-300 font-bold text-[12px]'>6:00 AM</span>
            <img className='w-[2rem]' src={cloudy} alt="" />
            <span className='text-gray-100 font-bold text-[18px]'>25°</span>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 border-r-1 border-gray-700 p-1" >
            <span className='text-gray-300 font-bold text-[12px]'>6:00 AM</span>
            <img className='w-[2rem]' src={cloudy} alt="" />
            <span className='text-gray-100 font-bold text-[18px]'>25°</span>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 border-r-1 border-gray-700 p-1" >
            <span className='text-gray-300 font-bold text-[12px]'>6:00 AM</span>
            <img className='w-[2rem]' src={cloudy} alt="" />
            <span className='text-gray-100 font-bold text-[18px]'>25°</span>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 border-r-1 border-gray-700 p-1" >
            <span className='text-gray-300 font-bold text-[12px]'>6:00 AM</span>
            <img className='w-[2rem]' src={cloudy} alt="" />
            <span className='text-gray-100 font-bold text-[18px]'>25°</span>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 border-r-1 border-gray-700 p-1" >
            <span className='text-gray-300 font-bold text-[12px]'>6:00 AM</span>
            <img className='w-[2rem]' src={cloudy} alt="" />
            <span className='text-gray-100 font-bold text-[18px]'>25°</span>
        </div>

        <div className=" flex flex-col justify-center items-center gap-2 border-r-1 border-gray-700 p-1" >
            <span className='text-gray-300 font-bold text-[12px]'>6:00 AM</span>
            <img className='w-[2rem]' src={cloudy} alt="" />
            <span className='text-gray-100 font-bold text-[18px]'>25°</span>
        </div>
      </div>

    

    </div>
  )
}

export default TodayForcast
