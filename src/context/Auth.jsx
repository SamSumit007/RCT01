import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
export const Authcontext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuth, setIsAuth] = useState(false);
    const {state} = useLocation();
    const navigate = useNavigate()
    
    const login =() =>{
        setIsAuth(true);
        if (state.from){
        navigate(state.from, {replace: true})
        }
        else {
            navigate("/") 
        }
    }
    const logout =() =>{
        setIsAuth(false)
        navigate("/")
    }
    return(
        <Authcontext.Provider value={{isAuth,login,logout}}>{children}
        </Authcontext.Provider>
    )
}