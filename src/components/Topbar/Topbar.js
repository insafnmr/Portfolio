import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './topbar.scss'

export default function Topbar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bsPrefix="navbar" variant="light">
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#experience">Experiences</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
