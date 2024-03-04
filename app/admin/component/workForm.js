'use client'
import React, { useState,useEffect } from 'react';


const ExperienceForm = ({ workData, onClose }) => {
  const formatDateForInput = (dateString) => {
    return new Date(dateString).toISOString().split('T')[0];
  };
  
  const [formData, setFormData] = useState({
    compName: workData ? workData.compName : '',
    designation: workData ? workData.designation : '',
    from: workData ? workData.from : '',
    to: workData ? workData.to : '',
    description: workData ? workData.description : '',
  });

  // Update formData when workData changes (e.g., when editing a different record)
  useEffect(() => {
    if (workData) {
      setFormData({
        compName: workData.compName || '',
        designation: workData.designation || '',
        from: workData.from ? formatDateForInput(workData.from) : '',
        to: workData.to ? formatDateForInput(workData.to) : '',
        description: workData.description || '',
      });
    } else {
      setFormData({
        compName: '',
        designation: '',
        from: '',
        to: '',
        description: '',
      });
    }
  }, [workData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Determine whether to create a new record or update an existing one
    const endpoint = workData ? `/api/workhistory/${workData._id}` : '/api/createworkhistory';
    const method = workData ? 'PUT' : 'POST';
  
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
  
      if (response.ok) {
        console.log(`${workData ? 'Updated' : 'Created'} successfully:`, result);
        if (workData && workData._id) {
          onClose(); // Close the modal and potentially refresh the list
        }
      } else {
        // If the server responds with an error status, handle it here
        console.error(`Failed to ${workData ? 'update' : 'create'}:`, result.message);
        // Display an error message or take other actions based on the error
      }
    } catch (error) {
      console.error('An error occurred during the fetch operation:', error);
      // Handle network errors or other errors not related to the server's response
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
