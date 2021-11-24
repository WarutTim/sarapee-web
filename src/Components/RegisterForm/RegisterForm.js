import React from "react";

import {
  Container,
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
} from "react-bootstrap";

function RegisterForm() {
  return (
    <Container
      className="d-grid h-100"
      style={{ minHeight: "100vh", placeItems: "center center" }}
    >
      <form className="text-center w-50">
        <h1 className="p-3">สร้างบัญชีใหม่</h1>

        <FloatingLabel controlId="floatingSelect" label="คำนำหน้าชื่อ">
          <Form.Select style={{ borderRadius: "15px" }}>
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </Form.Select>
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
          <Form.Control
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="นามสกุล">
          <Form.Control
            type="email"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="ตำแหน่ง">
          <Form.Control
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="ตำบล">
          <Form.Control
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <FloatingLabel controlId="floatingInputGrid" label="อีเมล">
          <Form.Control
            type="text"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
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
        <FloatingLabel controlId="floatingInputGrid" label="ยืนยันรหัสผ่าน">
          <Form.Control
            type="password"
            placeholder=" "
            style={{ borderRadius: "15px" }}
          />
        </FloatingLabel>
        <br></br>
        <Button
          className="w-50"
          variant="primary"
          type="submit"
          style={{ borderRadius: "15px", padding: ".75rem",fontSize:"1rem" }}
        >
          สร้างบัญชีใหม่
        </Button>
      </form>
    </Container>
  );
}

export default RegisterForm;
