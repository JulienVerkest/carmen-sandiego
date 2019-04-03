import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './index.css';

const Menu = ({user}) =>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Carmen Sandiego</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Game" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">About this game...</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">New game</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Save</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Quit</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Dossiers" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Config</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  export default Menu;