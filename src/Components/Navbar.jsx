import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Auth';

const Navbar = () => {
 const {isAuth, logout} = useContext(Authcontext)
    const navigate = useNavigate();
    const handlelogclick =() => {
        if(isAuth){
            logout();
            navigate("/")

        }   
        else {
            navigate("/login") 
        }
        
    }
  return (
    <div>Navbar :
        <Link to="/">Home</Link>
{/* {isAuth &&  */}
<Link to="feeds">Feeds</Link>
{/* } */}
{/* { isAuth && */}
<Link to="post">Post</Link>
{/* } */}
<button onClick={handlelogclick}>{isAuth ? "logout": "login"}</button>


    </div>
  )
}

export default Navbar