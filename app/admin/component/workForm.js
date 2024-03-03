'use client'
import React, { useState } from 'react';


const ExperienceForm = () => {
  const [formData, setFormData] = useState({
    compName: '',
    designation: '',
    from: '',
    to: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming the endpoint for creating work history is `/api/createWorkHistory`
    const endpoint = '/api/createworkhistory';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include credentials and other headers as needed
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (response.ok) {
        // Handle success
        console.log('Work History created successfully:', result);
        // You might want to clear the form or give feedback to the user
      } else {
        // Handle server-side validation errors or other issues
        console.error('Failed to create work history:', result.message);
        // Provide feedback to the user as needed
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error, possibly by showing an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="compName" className="block text-sm font-medium text-gray-400">Company Name</label>
        <input type="text" name="compName" id="compName" value={formData.compName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
      </div>
      <div>
        <label htmlFor="designation" className="block text-sm font-medium text-gray-400">Designation</label>
        <input type="text" name="designation" id="designation" value={formData.designation} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
      </div>
      <div>
        <label htmlFor="from" className="block text-sm font-medium text-gray-400">From</label>
        <input type="date" name="from" id="from" value={formData.from} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
      </div>
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-400">To</label>
        <input type="date" name="to" id="to" value={formData.to} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-400">Description</label>
        <textarea name="description" id="description" value={formData.description} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"></textarea>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Submit</button>
    </form>
  );
};

export default ExperienceForm;
