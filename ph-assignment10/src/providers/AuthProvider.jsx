import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loader,setLoader] = useState(true)
    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin = () =>{
        return signInWithPopup(auth, googleprovider)
    }
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const creatuser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const update = (name,pURL) =>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: pURL
          })
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

     useEffect(() =>{
      const unsubscrib =  onAuthStateChanged(auth,loggedUser =>{
            setUser(loggedUser)
            setLoader(false)
        })
        return () =>{
            unsubscrib()
        }
     },[])
    const AuthInfo  = {
        user,
        loader,
        creatuser,
        login,
        update,
        logOut,
        googleLogin,
        githubLogin
    }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;