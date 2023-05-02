import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    
    const handelLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div className='w-md-25 w-sm-50 mx-auto mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
             login
        </div>
    );
};

export default Login;