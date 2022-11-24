import React, { createContext, useEffect, useState } from 'react';
import app from '../config/firebase.config';
import {getAuth,GoogleAuthProvider, createUserWithEmailAndPassword,updateProfile,signOut,
signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const signUpUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUser = (photo)=>{
        return updateProfile(auth.currentUser,{
            photoURL:photo
        })
    }
    const singIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
       return () =>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {signUpUser,singIn,updateUser,loading,setLoading,user,googleLogin,logOut};

    return (
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;