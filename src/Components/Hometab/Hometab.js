import React from "react";
import { Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function Hometab(props) {
  return (
    <Nav variant="tabs" defaultActiveKey={props.activetab} lg={6}>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/registerpatien"
          style={{ color: "black" }}
          eventKey="registerpatien"
          fluid
        >
          ลงทะเบียน
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="#1" style={{ color: "black" }} eventKey="#1">
          ประเมินภาพบำบัด
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="#2" style={{ color: "black" }} eventKey="#2">
          ประเมินกิจกรรมบำบัด
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/icf" style={{ color: "black" }} eventKey="icf">
          ICF
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Hometab;
