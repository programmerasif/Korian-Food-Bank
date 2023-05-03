import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FcFactoryBreakdown } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
    </div>
  );
};

export default Nave;