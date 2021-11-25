import React from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function HometabRight(props) {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey={props.activetab}
      className="justify-content-end"
      fluid
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/home" style={{ color: "black" }} eventKey="home">
          หน้าแรก
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/changepassword" style={{ color: "black" }} eventKey="changepassword">
          เปลี่ยนรหัสผ่าน
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/search" style={{ color: "black" }} eventKey="search">
          ค้นหา
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HometabRight;
