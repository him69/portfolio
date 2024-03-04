'use client'
import React, { useState, useEffect} from 'react';

const proForm = ({ projectData, onClose }) => {
  const initialState = {
    projImage: '',
    projType: '',
    projCat: '',
    description: '',
    software: '',
    highlightProject: false,
  };

  const [formData, setFormData] = useState(initialState);

  // Populate form data when projectData is provided
  useEffect(() => {
    if (projectData) {
      setFormData({
        projImage: projectData.projImage || '',
        projType: projectData.projType || '',
        projCat: projectData.projCat || '',
        description: projectData.description || '',
        software: projectData.software || '',
        highlightProject: projectData.highlightProject || false,
      });
    } else {
      setFormData(initialState); // Reset form if no projectData is present
    }
  }, [projectData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine the endpoint and method based on the presence of projectData._id
    const endpoint = projectData && projectData._id
      ? `/api/projects/${projectData._id}`
      : '/api/createproject';
    const method = projectData && projectData._id ? 'PUT' : 'POST';

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        console.log(`Project ${projectData && projectData._id ? 'updated' : 'created'} successfully:`, result);
        if (projectData && projectData._id) {
          onClose(); // Close the modal and potentially refresh the list
        }
      } else {
        console.error(`Failed to ${projectData && projectData._id ? 'update' : 'create'} project:`, result.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">{projectData && projectData._id ? 'Update' : 'Create'}</button>
  </form>
  )
}

export default proForm