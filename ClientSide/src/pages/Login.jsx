import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext.jsx';


const Login = () => {
  const navigate= useNavigate()
  const [input,setInput] = useState({
    username: "",
    password: ""
  })
  const [error,setError] = useState('')

  const { currentUser } = useContext(AuthContext)
  console.log(currentUser);

  const handleChange = (e) =>{
    setInput((prev) =>({...prev,[e.target.name]:[e.target.value]}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post('http://localhost:8800/api/auth/login',input)
      console.log(res)
      navigate('/')
    } catch (err) {
      setError(err.response.data)
    }
  }

  console.log("inputs",input);
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' name='username' onChange={handleChange} placeholder='Username'/>
        <input type='password' name='password' onChange={handleChange} placeholder='password' />
        <button onClick={handleSubmit}>Login</button>
        <p>{error ? error: " "}</p>
        <span>Don't have an account? <Link to={"/register"}>Register</Link></span>
      </form>
    </div>
  )
}

export default Login;
