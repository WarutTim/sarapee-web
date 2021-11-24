import React from "react";
import { Nav } from "react-bootstrap";

function Hometab(props) {
  return (
    <Nav variant="tabs" defaultActiveKey={props.activetab}>
      <Nav.Item>
        <Nav.Link href="/home" style={{ color: "black" }}>
          ลงทะเบียน
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#1" style={{ color: "black" }}>
          ประเมินภาพบำบัด
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#2" style={{ color: "black" }}>
          ประเมินกิจกรรมบำบัด
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/icf" style={{ color: "black" }}>
          ICF
        </Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>
  );
}

export default Hometab;
