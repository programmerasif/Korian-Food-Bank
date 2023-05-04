import React, { useContext, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { FcBusinessman, FcFactoryBreakdown } from "react-icons/fc";
import {  NavLink, } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

import './nave.css'

const Nave = () => {
  const { user, logOut } = useContext(AuthContext)
  const [tooltips,setTooltip] = useState(true)
  
  
  const handelLogOut = () => {
    logOut()
      .then(() => console.log('ber hoice'))
      .catch(err => console.log(err))

  }

  const tooltip = () =>{
    setTooltip(false)
  }
  const tooltip2 = () =>{
    setTooltip(true)
  }

  return (
    <div>
     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><h3>Korian-Food-Bank  <FcFactoryBreakdown /></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className='ms-auto d-flex gap-3 align-items-center position-relative'>
        <div>{!user == true ? <p><FcBusinessman style={{ fontSize: "40px" }} /> </p> : <img src={user.photoURL} onMouseOver={tooltip} onMouseOut={tooltip2} alt="" style={{ width: "50px" }} className="rounded-circle me-4" />}</div>
                <h6 className='position-absolute bottom-50 end-50 border border-1 '>{!tooltips == true ? <span className='text-white'>{user?.displayName && user.displayName}</span> : '' }</h6>
                  
                  <NavLink to="/"
                className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-danger" : "text-white"} 
                style={{ textDecoration: 'none' }}
                >
                Home
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-danger" : "text-white"
                }
                style={{ textDecoration: 'none' }}
              >
                Blog
              </NavLink>

                {
                !user == true ? <div className='d-flex gap-3'>    <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-danger" : "text-white"
                }
                style={{ textDecoration: 'none' }}
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-danger" : "text-white"
                }
                style={{ textDecoration: 'none' }}
              >
                Register
              </NavLink></div> : <Button variant="danger" onClick={handelLogOut}>Log out</Button>
              }
        </div>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Nave;