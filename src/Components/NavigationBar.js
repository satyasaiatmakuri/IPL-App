import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../Styles/Navgation.css'

function NavigationBar() {
  return (
    <div className='nav-bar'>
        <Navbar bg="light" expand="lg" className='nav-bar'>
  <Container>
    <Navbar.Brand href="/">  
        IPL Analyser</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/">Home</Link>
        <Link to="/Teams">Teams</Link>
        <Link to="/Contact">Contact US</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

  )
}

export default NavigationBar