import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";

import Datetime from "../Datetime/Datetime";

function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>
          <Datetime />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
