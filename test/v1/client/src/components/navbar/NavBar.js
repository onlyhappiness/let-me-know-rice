import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand > <Link to="/"> 밥줘! </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end" >
            <Nav.Item>
              <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/signUp">SignUp</Link></Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
