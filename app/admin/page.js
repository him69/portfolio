import React from 'react'
import Topbar from './component/topbar'
import Sidebar from './component/sidebar'
import '@/styles/globals.css'
const page = () => {
    return (
        <div>
            <Topbar />
            <div className="flex">
                <Sidebar />
                
                <div className="mainDiv p-6">
                <p className='text-center font-bold text-3xl'>Projects</p>
                    <table className='table-auto'>
                        <tr><th>S.no</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Softwere</th>
                            <th>View Image</th>
                            <th>highlight</th></tr>
                        <tr>
                            <td>1</td>
                            <td>apple</td>
                            <td>ecommerse</td>
                            <td>modern</td>
                            <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facilis voluptatem amet dolorem impedit eos illo fugiat vel eligendi. Ducimus qui cumque in recusandae accusantium quo vero accusamus non ullam.</td>
                            <td>mongo,next,react</td>
                            <td><a href="#">view</a></td>
                            <td><select name="" id="">
                                <option value="">select</option>
                                <option value="false">false</option>
                                <option value="true">true</option>
                            </select></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default page