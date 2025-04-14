import React from 'react'

const Searchbar = () => {
  return (
    <div className='mt-5 w-[100vw]'>
      <input 
      className='bg-seconday text-white p-1 pl-5 text-[15px] rounded-3xl w-[60%] '
       type="text" placeholder='Search...' />
    </div>
  )
}

export default Searchbar
