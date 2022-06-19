import React from 'react';
import './style.css';
import Logo from '../assets/shared/logo.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header'>
    <Container>
    <Navbar.Brand href="#home"><img src={Logo} alt='logo' /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav  className="ms-auto">
        <Nav.Link href="/home"><span>00</span> home</Nav.Link>
        <Nav.Link href="/destination"><span>01</span> DESTINATION</Nav.Link>
        <Nav.Link href="/crew"><span>02</span> CREW</Nav.Link>
        <Nav.Link href="/technology"><span>03</span> TECHNOLOGY</Nav.Link>
        {/*<Nav.Link href="/passengers"><span>04</span> Passengers</Nav.Link>*/}
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header;