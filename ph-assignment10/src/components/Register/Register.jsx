import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const  {creatuser,update} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [errmsg ,setErrorMsg] = useState('')
  
  // console.log(location.state.from?.pathname);
    const handelRegister = event =>{
        event.preventDefault();
        setErrorMsg('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
          setErrorMsg('Password should be more than 6 letter')
        }
        creatuser(email,password)
        .then(res =>{
          const creatUsers = res.user;
          update(name,photoURL)
          navigate(location?.state?.from?.pathname || '/')
          console.log(creatUsers);
        })
        .catch(err =>{
          console.log(err);
          setErrorMsg('Email is already Used')
        })
    }
    return (
        <div className='d-flex '>
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
      <p className='text-danger'>{errmsg}</p>
      <button className='btn btn-danger w-100' type='submit'>Register</button>
    </Form>
        </div>
        </div>
    );
};

export default Register;