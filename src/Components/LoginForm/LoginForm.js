import React from "react";

import { Container, Form, FloatingLabel, Button, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <Container
      className="d-grid h-100"
      style={{ minHeight: "50vh", placeItems: "center center" }}
    >
      <form className="text-center w-50">
        <h1 className="p-3">เข้าสู่ระบบ</h1>

        <FloatingLabel controlId="floatingInputGrid" label="ชื่อผู้ใช้งาน">
          <Form.Control
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="รหัสผ่าน">
          <Form.Control
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <Row>
          <a href="#" style={{ textDecoration: "none", textAlign: "left" }}>
            ลืมรหัสผ่าน
          </a>
        </Row>
        <br></br>
        <Button
          className="w-50"
          variant="primary"
          type="submit"
          style={{ borderRadius: "15px", padding: ".5rem" }}
        >
          เข้าสู่ระบบ
        </Button>
        <br></br>
        <br></br>
        <p>
          ไม่มีบัญชี?
          <Link to="/register" style={{ textDecoration: "none" }}>
            สร้างบัญชีใหม่
          </Link>
        </p>
      </form>
    </Container>
  );
}

export default LoginForm;
