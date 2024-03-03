'use client'
import React, { useState } from 'react';
import '@/styles/globals.css'

const page = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await fetch('/api/login', { // Ensure the URL matches your API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login Success:', data);
        // Handle login success, e.g., redirecting the user or storing the login token
      } else {
        console.error('Login Failed:', data.message);
        // Handle login failure, e.g., displaying an error message
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='h-screen w-screen grid place-items-center'>
    <div className='p-6 border border-slate-950 w-1/4'>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='mb-2'><label htmlFor="email" className='font-bold'>Email</label></div>
          <div><input type="email" id="email" className='px-2 py-2 border border-teal-200 w-full' placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        </div>
        <div className='my-2'>
          <div className='mb-2'>
            <label htmlFor="password" className='font-bold'>Password</label>
          </div>
          <div>
            <input type="password" id="password" className='px-2 py-2 border border-teal-200 w-full' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <button type="submit" className='w-full bg-black text-white p-3 mt-5'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default page