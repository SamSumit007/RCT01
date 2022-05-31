import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext';
import Wishlist from './Wishlist'

const Navbar = () => {
    const {isAuthorized, login, logout} = useContext(AuthContext);
    const {buy} = useContext(AuthContext);
    const {isLight, toggleTheme} = useContext(ThemeContext);
  return (
    <div> Navbar
        <button onClick={()=> {
            if(isAuthorized) logout();
            else login("R", "Z")
        }}>{isAuthorized? "Login": "Logout"}</button>
        <button onClick={buy}> buy</button>
        <button onClick={toggleTheme}> {`make ${isLight ?  "Dark" : "Light" }`}</button>
       {isAuthorized && <Wishlist />}
        </div>
  )
}

export default Navbar