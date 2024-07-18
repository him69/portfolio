'use client'
import React, { useContext, useState } from "react";
import CartContext from "./CartContext";



const DisplayList = () => {
    const { itemList, updateOrRemove, addItem } = useContext(CartContext)
    const [newItem, setNewItem] = useState('');
    const handleInput = () => {
        if (newItem) {
            addItem(newItem);
            setNewItem('')
        }
    }
    return (
        <>
            <ol>
                {itemList.map((item, index) => (
                    <li key={index} onClick={() => updateOrRemove(index)}>
                        {item}
                    </li>
                ))}
            </ol>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={handleInput}>Add Item</button>
        </>
    )
}
export default DisplayList;