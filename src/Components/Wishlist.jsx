import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Wishlist = () => {
    const value = useContext(CartContext)
  return (
    <div>wishlist: {value}
    
    </div>
  )
}

export default Wishlist 