import React from 'react';
import {Navbar , Nav , Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Contact Us</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link><Link to ="/" style = {{ color:"white" , textDecoration:"none"}} >Home</Link></Nav.Link>  
          <Nav.Link> <Link to ="/contacts" style = {{ color:"white" , textDecoration:"none"}} >Contacts List</Link></Nav.Link>
          <Nav.Link> <Link to ="/add"  style = {{ color:"white" , textDecoration:"none"}}>Add</Link></Nav.Link> 
          
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

export default NavComponent