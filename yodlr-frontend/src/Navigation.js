import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";



function Navigation(logout) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home">Yodlr</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link active" exact to="/">Home</NavLink>
            <NavLink className="nav-link active" exact to="/admin">Admin</NavLink>
            <NavLink className="nav-link active" exact to="/signup">SignUp</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;