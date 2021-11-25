import React from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function HometabRight(props) {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey={props.activetab}
      lg={6}
      className="justify-content-end"
    >
      <Nav.Item>
        <Nav.Link as={Link} to="#1" style={{ color: "black" }} eventKey="#1">
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
