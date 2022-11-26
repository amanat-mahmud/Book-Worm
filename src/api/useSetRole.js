import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export const useSetRole = async(email) =>{
    const {setUserRole} = useContext(AuthContext);
    const url =`http://localhost:5000/user?email=${email}`
    const response = await fetch(url)
    const data = await response.json();
    setUserRole(data.role);
} 