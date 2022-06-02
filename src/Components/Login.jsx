import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/Auth';

const Login = () => {
    const{ login} = useContext(Authcontext);
    const [logincreed, setLogincreed] =useState({});
    const handlechange = (e) =>{
        
     const {name, value} = e.target;
     setLogincreed({
         ...logincreed,
         [name]: value,
     })
    }

    const handlesub =(e) =>{
e.preventDefault();
login();
    }
  return (
      <div>
    Login
    <form  onSubmit={handlesub} style={{display: "flex",
flexDirection: "column",
    margin: "auto",
maxWidth: "200px"}}>
        <input name='email' type="email" placeholder='Enter mail...'
         onChange={handlechange}/>
        <input name='password' type="password" placeholder='Enter Passcode...'
        onChange={handlechange} />
        <button type='submit'  >Submit</button>

    </form>
    </div>
  )
}

export default Login