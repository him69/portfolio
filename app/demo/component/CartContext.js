'use client'
import React, { createContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [itemList, setItemList] = useState(['bag', 'shoe', 'mobile', 'purse']);

    const updateOrRemove = (index) => {
        const newList = itemList.filter((item, i) => i !== index);
        setItemList(newList);
    };
    const addItem=(item)=>{
        setItemList([...itemList,item]);
    }
    return (
        <CartContext.Provider value={{ itemList, updateOrRemove,addItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
