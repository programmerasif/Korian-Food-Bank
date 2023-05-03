import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loading from '../assets/9997-infinity-loader.json'
import Lottie from "lottie-react";
import './private.css'

const PrivateRout = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <div className='d-flex justify-content-center align-items-center height'><Lottie animationData={loading} loop={true} style={{width : "200px"}}/></div>
    }

    if (user) {
        return children
    }
    return (
        <div>
             <Navigate to='/login' state={{from: location}}/>
             
        </div>
    );
    
    
};

export default PrivateRout;