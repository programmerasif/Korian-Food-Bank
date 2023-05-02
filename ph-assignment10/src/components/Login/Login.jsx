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
             <Form onSubmit={handelLogin}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required placeholder="Password" name='password'/>
      </Form.Group>
      <Form.Group className="mb-3" >
        Dont Have An Account? <Link to='/register'><span>Register</span></Link>
      </Form.Group>
      <button className='btn btn-danger w-100'>Log-in</button>
    </Form>
        </div>
    );
};

export default Login;