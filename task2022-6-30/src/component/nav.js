import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';

const Nav = () => {
    return (  
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}
 
export default Nav;