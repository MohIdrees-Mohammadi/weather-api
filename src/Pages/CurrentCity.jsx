import React from 'react'
import sunny from "../assets/sunny.png"
import TodayForcast from '../Components/TodayForcast'


const CurrentCity = () => {
  return (
    <div className='flex justify-center flex-col mt-4'>
      <div className='flex w-[60%] justify-between p-[1.5rem] pl-6 pr-6'>
        <div >
          <h2 className='text-white text-5xl font-bold mt-[2.1rem]'>Madrid</h2>
          <span className='text-gray-400 text-[12px] mt-2'>Chances of rain 90%</span>
          <h1 className='text-white text-6xl mt-9 font-extrabold'>31°</h1>
        </div>
        <img className='w-[15rem]' src={sunny} alt="weather_img" />
      </div>
      <div>
        <TodayForcast />
      </div>
      <div>AIr conditions</div>
    </div>
  )
}

export default CurrentCity
