import React from 'react'
import '@/styles/globals.css'
const page = () => {
  
  return (
    <div className='h-screen w-screen grid place-items-center '>
      <div className='p-6 border border-slate-950 w-1/4'>
        <form action="" method="post">
          <div>
            <div className='mb-2'><label htmlFor="" className='font-bold'>Email</label></div>
            <div><input type="email" name="" id="" className='px-2 py-2 border border-teal-200 w-full' placeholder='enter your email' /></div>
          </div>
          <div className='my-2'>
            <div className='mb-2'>
              <label htmlFor="" className='font-bold'>password</label>
            </div>
            <div>
              <input type="password"className='px-2 py-2 border border-teal-200 w-full' placeholder='Enter your Password' />
            </div>
            <div>
              <button className='w-full bg-black text-white p-3 mt-5'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page