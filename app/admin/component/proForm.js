'use client'
import React, { useState } from 'react';

const proForm = () => {
    const [formData, setFormData] = useState({
        projImage: '',
        projType: '',
        projCat: '',
        description: '',
        software: '',
        highlightProject: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Assuming your API endpoint for creating a project is `/api/projects`
        const endpoint = '/api/createproject';
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // If you're dealing with cookies (for auth tokens), ensure credentials are included
            'Cookie': document.cookie // Only if your auth mechanism requires it
          },
          body: JSON.stringify(formData),
          credentials: 'include' // Necessary for including cookies in cross-origin requests
        };
    
        try {
          const response = await fetch(endpoint, options);
          const result = await response.json();
          if (response.ok) {
            console.log('Project created successfully:', result);
            // Here, you can add actions upon successful creation, like clearing the form or showing a success message
          } else {
            console.error('Failed to create project:', result.message);
            // Handle errors, such as displaying a notification to the user
          }
        } catch (error) {
          console.error('An error occurred:', error);
          // Handle the error, such as displaying a notification to the user
        }
    };
    
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="projImage" className="block text-sm font-medium text-gray-400">Project Image URL</label>
      <input type="text" name="projImage" id="projImage" value={formData.projImage} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
    </div>
    <div>
      <label htmlFor="projType" className="block text-sm font-medium text-gray-400">Project Type</label>
      <input type="text" name="projType" id="projType" value={formData.projType} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
    </div>
    <div>
      <label htmlFor="projCat" className="block text-sm font-medium text-gray-400">Project Category</label>
      <input type="text" name="projCat" id="projCat" value={formData.projCat} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
    </div>
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-400">Description</label>
      <textarea name="description" id="description" value={formData.description} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
    </div>
    <div>
      <label htmlFor="software" className="block text-sm font-medium text-gray-400">Software Used</label>
      <input type="text" name="software" id="software" value={formData.software} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"/>
    </div>
    <div>
      <label htmlFor="highlightProject" className="flex items-center">
        <input type="checkbox" name="highlightProject" id="highlightProject" checked={formData.highlightProject} onChange={handleChange} className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
        <span className="ml-2 text-sm font-medium text-gray-400">Highlight Project</span>
      </label>
    </div>
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
  </form>
  )
}

export default proForm