import axios from "axios";
import { useContext, useEffect, useState } from "react";

export const AuthContext = useContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)


    const login = async(inputs) =>{
      const res = await axios.post('http://localhost:8800/api/auth/login',inputs)
      setCurrentUser(res.data)  
    }

    const logout = async(inputs)=>{
        await axios.post('http://localhost:8800/api/auth/logout',inputs)
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,logout,login}} >
            {children}
        </AuthContext.Provider>
    )
}