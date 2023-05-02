import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FcFactoryBreakdown } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Nave = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" ><h3>Deshi-Food-Bank  <FcFactoryBreakdown /></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <div className='d-fllex justify-content-between align-items-center gap-5 text-secondary'>
            <Link to='/'>Home</Link>
            <Link to='/'>Blog</Link>
            <Link to='login'> <Button variant="danger">Login</Button></Link>
            <Link to='register'> <Button variant="danger">Register</Button></Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Nave;