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
    const [activeForm, setActiveForm] = useState('project'); // Could be 'project' or 'experience'

    // Function to determine which form to render
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
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <td className='border-e border-white'>1</td>
                                <td className='border-e border-white'>apple</td>
                                <td className='border-e border-white'>ecommerse</td>
                                <td className='border-e border-white'>modern</td>
                                <td className='border-e border-white'><p className='truncate'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facilis voluptatem amet dolorem impedit eos illo fugiat vel eligendi. Ducimus qui cumque in recusandae accusantium quo vero accusamus non ullam. </p></td>
                                <td className='border-e border-white'>mongo,next,react</td>
                                <td className='border-e border-white'><a href="#">view</a></td>
                                <td className='border-e border-white'><select name="" id="">
                                    <option value="">select</option>
                                    <option value="false">false</option>
                                    <option value="true">true</option>
                                </select></td>
                                <td>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                        onClick={() => { setModalOpen(true); setActiveForm('project'); }}>Edit</button>
                                </td>
                            </tr>
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
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <td className='border-e border-white'>1</td>
                                <td className='border-e border-white'>apple</td>
                                <td className='border-e border-white'>frontend devloper</td>
                                <td className='border-e border-white'><p className='truncate'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facilis voluptatem amet dolorem impedit eos illo fugiat vel eligendi. Ducimus qui cumque in recusandae accusantium quo vero accusamus non ullam. </p></td>
                                <td className='border-e border-white'>12 jan 2022</td>
                                <td className='border-e border-white'>12 jan 2023</td>
                                <td>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                        onClick={() => { setModalOpen(true); setActiveForm('experience'); }}>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        {renderForm()}
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