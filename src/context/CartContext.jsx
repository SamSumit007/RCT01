import React, { createContext } from "react";
export const CartContext = createContext();
export const CartProvider =({children})  =>{
    return <CartContext.Provider value={100}>{children}</CartContext.Provider>
} 