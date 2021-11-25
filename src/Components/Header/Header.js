import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Image,
} from "react-bootstrap";

import Logo from "./img/Logo.png";

import { Link } from "react-router-dom";

import Datetime from "../Datetime/Datetime";

function Header() {
  return (
    <Navbar bg="light" className="p-2">
      <Navbar.Brand>
        <Datetime />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>User :</Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Image src={Logo} style={{ width: "10rem" }}></Image>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
