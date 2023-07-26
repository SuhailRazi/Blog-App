import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)


    const login = async(inputs) =>{
      const res = await axios.post('http://localhost:8800/api/auth/login',inputs)
      console.log("loginresponse",res);
      setCurrentUser(res.data)  
    }

    const logout = async(inputs)=>{
        await axios.post('http://localhost:8800/api/auth/logout')
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}