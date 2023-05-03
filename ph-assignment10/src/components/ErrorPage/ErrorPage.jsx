import React from 'react';
import Lottie from "lottie-react";
import notFound  from '../../assets/91191-404-notfound.json'


const ErrorPage = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Lottie animationData={notFound} loop={true} style={{width: "600px"}}/>
        </div>
    );
};

export default ErrorPage;