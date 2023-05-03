import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FcBusinessman, FcFactoryBreakdown } from "react-icons/fc";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

import './nave.css'

const Nave = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);
  
  const handelLogOut = () => {
    logOut()
      .then(() => console.log('ber hoice'))
      .catch(err => console.log(err))

  }

  return (
    <div>
      {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" ><h3>Korian-Food-Bank  <FcFactoryBreakdown /></h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <div className='d-flex flex-md-column flex-sm-row'>
              <div>
                <div>{!user == true ? <p><FaUserCircle style={{ fontSize: "30px" }} /> </p> : <img src={user.photoURL} alt="" style={{ width: "50px" }} className="rounded-circle" />}</div>
                <div className='me-3'><Link to='/'>Home</Link></div>
                <div className='me-3'><Link to='/'>Blog</Link></div>
              </div>
              {
                !user == true ? <div> <Link to='login'> <Button variant="danger">Login</Button></Link>
                  <Link to='register'> <Button variant="danger">Register</Button></Link></div> : <Button onClick={handelLogOut}>logOut</Button>
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 */}



     {/*  */}





      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><h3>Korian-Food-Bank  <FcFactoryBreakdown /></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <div className='ms-auto d-flex gap-3 align-items-center'>
        <div>{!user == true ? <p><FcBusinessman style={{ fontSize: "40px" }} className=' '/> </p> : <img src={user.photoURL} alt="" style={{ width: "50px" }} className="rounded-circle me-4" />}</div>
                {/* 
                 */}
                  
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