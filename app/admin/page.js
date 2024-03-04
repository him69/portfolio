'use client'
import React, { useEffect, useState } from 'react'
import Topbar from './component/topbar'
import Sidebar from './component/sidebar'
import Modal from './component/modal'
import ProForm from './component/proForm'
import ExperienceForm from './component/workForm'
import '@/styles/globals.css'






const page = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeForm, setActiveForm] = useState('project');
    const [currentProject, setCurrentProject] = useState(null);
    const [currentWork, setCurrentWork] = useState(null);
    // Function to determine which form to render
    const handleEditProject = (project) => {
        setCurrentProject(project); // Set the current project to be edited
        setActiveForm('project'); // Set form type
        setModalOpen(true); // Open the modal
    };
    const handleEditWork = (work) => {
        setCurrentWork(work); // Set the current work to be edited
        setActiveForm('experience'); // Indicate that we're editing a work history
        setModalOpen(true); // Open the modal
      };
    const renderForm = () => {
        switch (activeForm) {
            case 'project':
                return <ProForm />;
            case 'experience':
                return <ExperienceForm />;
            default:
                return null; // or some default content
        }
    };
    // get all project
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/getallprojects', {
                method: 'GET',
                headers: {
                    // Include any necessary headers, such as authentication tokens
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProjects(data.Projects); // Assuming the response body has a 'Projects' field
            } else {
                // Handle errors or unsuccessful responses
                console.error('Failed to fetch projects');
            }
        };

        fetchProjects();
    }, []);
    // get all work
    const [workHistories, setWorkHistories] = useState([]);

    useEffect(() => {
        const fetchWorkHistories = async () => {
            try {
                const response = await fetch('/api/getallwork', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Include the cookie in the request if your API requires authentication
                        // 'Cookie': document.cookie,
                    },
                    credentials: 'include', // Necessary for including cookies in the request
                });
                if (response.ok) {
                    const data = await response.json();
                    setWorkHistories(data.wh); // Assuming the response has a 'wh' field with the work history data
                } else {
                    // Handle HTTP errors
                    console.error('Failed to fetch work histories');
                }
            } catch (error) {
                // Handle fetch errors
                console.error('An error occurred:', error);
            }
        };

        fetchWorkHistories();
    }, []);
    // get correct fromate of date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div>
            <Topbar />
            <div className="flex">
                <Sidebar />

                <div className="mainDiv p-6 w-full">
                    <p className='text-center font-bold'>Projects</p>
                    <table className='table-fixed w-full text-sm text-center text-gray-500 dark:text-gray-400'>
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr><th scope="col" className="px-6 py-3" >S.no</th>
                                <th scope="col" className="px-6 py-3" >Name</th>
                                <th scope="col" className="px-6 py-3" >Type</th>
                                <th scope="col" className="px-6 py-3" >Category</th>
                                <th scope="col" className="px-6 py-3" style={{ width: '120px' }}>Description</th>
                                <th scope="col" className="px-6 py-3" >Softwere</th>
                                <th scope="col" className="px-6 py-3" >View Image</th>
                                <th scope="col" className="px-6 py-3" >highlight</th>
                                <th scope="col" className="px-6 py-3" >action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='border-e border-white'>{index + 1}</td>
                                    <td className='border-e border-white'>{project.compName}</td>
                                    <td className='border-e border-white'>{project.projType}</td>
                                    <td className='border-e border-white'>{project.projCat}</td>
                                    <td className='border-e border-white'><p className='truncate'>{project.description}</p></td>
                                    <td className='border-e border-white'>{project.software}</td>
                                    <td className='border-e border-white'><a href={project.projImage}>view</a></td>
                                    <td className='border-e border-white'>{project.highlightProject.toString()}</td>
                                    <td>
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => handleEditProject(project)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className='table-fixed w-full text-sm text-center mt-6 text-gray-500 dark:text-gray-400'>
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr><th scope="col" className="px-6 py-3" >S.no</th>
                                <th scope="col" className="px-6 py-3" >Compnay name</th>
                                <th scope="col" className="px-6 py-3" >Designation</th>
                                <th scope="col" className="px-6 py-3" >Description</th>
                                <th scope="col" className="px-6 py-3" >From</th>
                                <th scope="col" className="px-6 py-3" >To</th>
                                <th scope="col" className="px-6 py-3" >action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {workHistories.map((work, index) => (
                                <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='border-e border-white'>{index + 1}</td>
                                    <td className='border-e border-white'>{work.compName}</td>
                                    <td className='border-e border-white'>{work.designation}</td>
                                    <td className='border-e border-white'><p className='truncate'>{work.description}</p></td>
                                    <td className='border-e border-white'>{formatDate(work.from)}</td>
                                    <td className='border-e border-white'>{formatDate(work.to)}</td>
                                    <td>
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => handleEditWork(work)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        {activeForm === 'project' ? (
                            <ProForm projectData={currentProject} onClose={() => setModalOpen(false)} />
                        ) : activeForm === 'experience' ? (
                            <ExperienceForm workData={currentWork} onClose={() => setModalOpen(false)} />
                        ) : null}
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                            onClick={() => setModalOpen(false)}
                        >
                            Close
                        </button>
                    </Modal>

                </div>
            </div>
        </div>
    )
}

export default page