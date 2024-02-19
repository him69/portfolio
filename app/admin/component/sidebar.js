import React from 'react'

const sidebar = () => {
  return (
    <div className='w-1/3 drop-shadow-lg bg-white h-[calc(100vh-3rem)]'>
        <div className="linkDiv px-6 py-3 active">
            <a href="#" className='text-lg'>Home</a>
        </div>
        <div className="linkDiv px-6 py-3">
            <a href="#" className='text-lg'>Add project</a>
        </div>
        <div className="linkDiv px-6 py-3">
            <a href="#" className='text-lg'>Add workhistory</a>
        </div>
    </div>
  )
}

export default sidebar