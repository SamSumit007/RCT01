import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'

const navigate = useNavigate
const Navbar = () => {
    const handleOnClick = (id)=>{
      if (id === 1) {
        navigate("/products/1")
      }
    }
  return (
    <div> 
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="products">Products</Link>
      <button onClick={() =>handleOnClick(1)}>go 1</button>
      <button onClick={() =>handleOnClick(2)}>go 2</button>

        
        </div>
  )
}

export default Navbar