import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle, FaGooglePlusG } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate()
    const {login,googleLogin,githubLogin} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.state.from?.pathname);

    const handelLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
        .then(res =>{
          const creatUsers = res.user;
          console.log(creatUsers);
          navigate(location?.state?.from?.pathname || '/')
        })
        .catch(err =>{
          console.log(err);
        })
    }
    const handelGoogle = () =>{
      googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(location?.state?.from?.pathname || '/')
        console.log(user);
      })
      .catch(err => console.log(err))
    }

    const handelGitHub = () =>{
      githubLogin()
      .then((result) => {
        const user = result.user;
        navigate(location?.state?.from?.pathname || '/')
        console.log(user);
      })
      .catch(err => console.log(err))
    }
    return (
        <div className='d-flex align-items-center justify-content-center mt-5'>

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
    
    <div><button className='w-100 my-3 btn btn-primary' onClick={handelGoogle}>Log-In with Google <FaGoogle /> </button></div>
    <div><button className='w-100 btn btn-secondary' onClick={handelGitHub}>Log-In with GitHub <FaGithub /></button></div>
    
        </div>
        </div>
    );
};

export default Login;