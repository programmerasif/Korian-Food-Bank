import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handelRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        console.log(name,email,password,photoURL);
    }
    return (
        <div className='w-md-25 w-sm-50 mx-auto mt-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
             <Form onSubmit={handelRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" required placeholder="Enter Your Name" name='name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" required placeholder="Enter Photo URL" name='photo'/>
        <Form.Text className="text-muted">
          We'll never share your Photo with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required placeholder="Password" name='password'/>
      </Form.Group>
      <Form.Group className="mb-3" >
        Already Have An Account? <Link to='/login'><span>Log-In</span></Link>
      </Form.Group>
      <button className='btn btn-danger w-100' type='submit'>Register</button>
    </Form>
        </div>
    );
};

export default Register;