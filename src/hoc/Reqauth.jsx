import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../context/Auth';

const Reqauth = ({children}) => {
    const {isAuth} = useContext(Authcontext);
   const  {pathname} = useLocation();
    if(isAuth){
  return children;
   
  
} else {
    return <Navigate to="/login" 
    state={{from: pathname}} replace />
}
}
export default Reqauth