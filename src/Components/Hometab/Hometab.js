import React from "react";
import {Nav, Row, Col} from "react-bootstrap";

import { Link } from "react-router-dom";

function Hometab(props) {
  return (
    <Row>
      <Nav variant="tabs" defaultActiveKey={props.activetab}>
        <Col md={3} lg={3}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/registerpatient"
              style={{ color: "black" }}
              eventKey="registerpatient"
            >
              ลงทะเบียน
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col md={4} lg={3}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#1"
              style={{ color: "black" }}
              eventKey="#1"
            >
              ประเมินภาพบำบัด
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col md={4} lg={3}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="#2"
              style={{ color: "black" }}
              eventKey="#2"
            >
              ประเมินกิจกรรมบำบัด
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col md={1} lg={3}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/icf"
              style={{ color: "black" }}
              eventKey="icf"
            >
              ICF
            </Nav.Link>
          </Nav.Item>
        </Col>
      </Nav>
    </Row>
  );
}

export default Hometab;
