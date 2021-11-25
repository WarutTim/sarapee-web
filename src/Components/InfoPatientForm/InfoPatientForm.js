import React from "react";
import {
  Container,
  Col,
  Row,
  Image,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import ImageBlank from "./img/Profile.png";

function InfoPatientForm() {
  return (
    <Container className="p-3">
      <h4 className="text-center p-3">ข้อมูลผู้พิการ</h4>
      <Row>
        <Col lg={12} className="p-3">
          <Image src={ImageBlank} className="mx-auto d-block" thumbnail></Image>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Row>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="HN">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="ID">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <br></br>
          </Row>

          <Row>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="เพศ">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="วันเกิด">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="อายุ">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="หมู่เลือด">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="สถานะ">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="ญาติชื่อ">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="ความสัมพันธ์">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
            <Col md={4}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="เบอร์โทรติดต่อ"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FloatingLabel controlId="floatingInputGrid" label="ที่อยู่">
                <Form.Control
                  type="text"
                  placeholder=" "
                  style={{ borderRadius: "15px" }}
                  readOnly
                />
              </FloatingLabel>
              <br></br>
            </Col>
          </Row>
        </Col>
      </Row>

      <h4 className="p-3">ข้อมูลผู้รับบริการ</h4>
      <Row>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="ลำดับที่">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="อาการสำคัญ">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="การวินิจฉัยโรค">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="สาเหตุอาการ">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="คะแนน BI">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="สิทธิรักษา">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="อุปกรณ์ช่วยเดิน">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="ความพิการ">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="อุปกรณ์ที่ได้รับ">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
              readOnly
            />
          </FloatingLabel>
          <br></br>
        </Col>
      </Row>

      <Row>
        <h4 className="p-3">เลือกพิมพ์</h4>
        <Col md={4}>
          <Form.Check type="checkbox" label="ประเมินกายภาพบำบัด" />
          <br></br>
        </Col>
        <Col md={4}>
          <Form.Check type="checkbox" label="ประเมินกิจกรรมบำบัด" />
          <br></br>
        </Col>
        <Col md={4}>
          <Form.Check type="checkbox" label="ประเมิน ICF" />
          <br></br>
        </Col>
      </Row>
      <Row>
        <Container>
          <Col className="text-center">
            <Button
              className="w-50"
              variant="primary"
              type="submit"
              style={{
                borderRadius: "15px",
                padding: "1.1rem",
              }}
            >
              พิมพ์
            </Button>
          </Col>
        </Container>
      </Row>
    </Container>
  );
}

export default InfoPatientForm;
