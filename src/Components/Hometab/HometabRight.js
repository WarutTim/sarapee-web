import React from "react";
import { Nav, Col, Image,Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import Homepic from "./img/Home.png";
import Padlockpic from "./img/Padlock.png";
import Searchpic from "./img/Search.png";

function HometabRight(props) {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey={props.activetab}
      className="justify-content-end"
    >
      {/* HOMERIGHT */}
      <Col md={4}>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/home"
            style={{ color: "black" }}
            eventKey="home"
          >
            <Image src={Homepic} style={{ width: "1.5rem" }}></Image>
          </Nav.Link>
        </Nav.Item>
      </Col>
      <Col md={4}>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/changepassword"
            style={{ color: "black" }}
            eventKey="changepassword"
          >
            <Image src={Padlockpic} style={{ width: "1.5rem" }}></Image>
          </Nav.Link>
        </Nav.Item>
      </Col>
      <Col md={4}>
        <Nav.Item className="justify-content-end">
          <Nav.Link
            as={Link}
            to="/search"
            style={{ color: "black" }}
            eventKey="search"
          >
            <Image src={Searchpic} style={{ width: "1.5rem" }}></Image>
          </Nav.Link>
        </Nav.Item>
      </Col>
    </Nav>
  );
}

export default HometabRight;
