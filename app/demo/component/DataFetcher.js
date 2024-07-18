'use client'
import React, { useEffect, useState } from "react";


const DataFacher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://dummy.restapiexample.com/api/v1/employees').then((response) => response.json()).then((data) => {
            setData(data.data);
            setLoading(false);
        })
    }, [])
    if (loading) {
        return <h2>Loading</h2>
    }
    return (
        <>
            <h2>
                post Data
            </h2>
            {data.map((item, index) => {
                return <li key={index}>{item.employee_name}</li>
            })}

        </>
    )
}

export default DataFacher;