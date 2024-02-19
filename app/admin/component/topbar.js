import React from 'react'

const topbar = () => {
  return (
    <div className='topbar w-full flex justify-between bg-orange-300 px-6 py-4'>
      <div> <p className='font-extrabold'>Admin Panel</p></div>
      <div><a href="#">logout</a></div>
    </div>
  )
}

export default topbar