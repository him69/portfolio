import React from 'react'
import Topbar from '../component/topbar'
import Sidebar from '../component/sidebar'
import ExperienceForm from '../component/workForm'

const page = () => {
    return (
        <div>
            <Topbar />
            <div className="flex">
                <Sidebar />

                <div className="mainDiv p-6 w-full">
                  <ExperienceForm/>
                </div>
            </div>
        </div>
    )
}

export default page     