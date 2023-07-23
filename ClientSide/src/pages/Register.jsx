import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {

  const navigate= useNavigate();
  const [inputs,setInput] = useState({
    username: "",
    email : "",
    password : ""
  });

  const [error,setError]= useState('')
  
  const handleChange = (e) =>{
      setInput(prev =>({...prev,[e.target.name]:[e.target.value]}))
  }

  const handlesubmit = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:8800/api/auth/register",inputs);
      console.log("response ",res);
      navigate('/login');
    }catch(err){
      console.log("err",err)
      setError(err.response.data)
    }
  }

  console.log("error",error);
  console.log("register credentials",inputs);
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='Username' name='username' onChange={handleChange}/>
        <input required type='email' placeholder='Email' name='email' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handlesubmit}>Register</button>
        <p>{error ? error : " "}</p>
        <span> If already registred? <Link to={"/login"}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register;
