import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)
    const creatuser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const update = (name,pURL) =>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: pURL
          })
    }

    const logOut = () =>{
        return signOut(auth)
    }

     useEffect(() =>{
      const unsubscrib =  onAuthStateChanged(auth,loggedUser =>{
            console.log('users loged in ' ,loggedUser)
            setUser(loggedUser)
        })
        return () =>{
            unsubscrib()
        }
     },[])
    const AuthInfo  = {
        user,
        creatuser,
        login,
        update,
        logOut
    }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;