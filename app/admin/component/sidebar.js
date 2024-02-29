import React from 'react'
import Link from 'next/link'

const sidebar = () => {
  return (
    <div className='w-1/6 drop-shadow-lg bg-white h-[calc(100vh-3rem)]'>
        <div className="linkDiv px-6 py-3 active">
            <Link href="/admin" className='text-lg'>Home</Link>
        </div>
        <div className="linkDiv px-6 py-3">
            <Link href="/admin/addproject" className='text-lg'>Add project</Link>
        </div>
        <div className="linkDiv px-6 py-3">
            <Link href="/admin/addwork" className='text-lg'>Add workhistory</Link>
        </div>
    </div>
  )
}

export default sidebar