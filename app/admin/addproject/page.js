import React from 'react'
import Topbar from '../component/topbar'
import Sidebar from '../component/sidebar'
import ProForm from '../component/proForm'


const page = () => {
    return (
        <div>
            <Topbar />
            <div className="flex">
                <Sidebar />

                <div className="mainDiv p-6 w-full">
                    <ProForm/>
                </div>
            </div>
        </div>
    )
}

export default page     