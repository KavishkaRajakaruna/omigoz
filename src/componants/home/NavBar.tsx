import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {ReactComponent as Logo} from '../../logo.svg';


import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Navbar.Brand href="/">
        <Logo
          width="35"
          height="35"
          className="d-inline-block align-top"
        />
          OMiGOZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/mail_generator">Mail Generator</Nav.Link>
            {/* <Nav.Link href="#pricing">Profiler</Nav.Link> */}
            </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Contact Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}


export default NavBar;