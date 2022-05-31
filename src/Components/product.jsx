import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const {isAuthorized} = useContext(AuthContext)
  return (
    <div>product: {isAuthorized ? "login" : "logout" }
        <Cart />
    </div>
  )
}

export default Product