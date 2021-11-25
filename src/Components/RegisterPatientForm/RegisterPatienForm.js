import React, { useState, useEffect } from "react";

import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Card,
  Button,
  Image,
} from "react-bootstrap";

import ImageBlank from "./img/Profile.png";

function RegisterPatienForm() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  if (!images.length) {
    imageURLs[0] = ImageBlank;
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <Container className="d-grid p-3">
      <Form>
        <h4>ข้อมูลเวชทะเบียนผู้พิการ</h4>
        <br></br>
        <Row>
          <Col lg={6}>
            <FloatingLabel controlId="floatingInputGrid" label="HN">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={6}>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="วันที่มีบัตรคนพิการ"
            >
              <Form.Control
                type="date"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="คำนำหน้าชื่อ">
              <Form.Select style={{ borderRadius: "15px" }}>
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="นามสกุล">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="เลขบัตรประชาชน">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="วันเกิด">
              <Form.Control
                type="date"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="อายุ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="หมู่เลือด">
              <Form.Select style={{ borderRadius: "15px" }}>
                <option>O</option>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="สถานภาพ">
              <Form.Select style={{ borderRadius: "15px" }}>
                <option>โสด</option>
                <option>สมรส</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <br></br>
        <h4>ที่อยู่</h4>
        <br></br>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ที่อยู่">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="หมู่">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ตรอก/ซอย ถนน">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="หมู่บ้าน">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="ตำบล">
              <Form.Select style={{ borderRadius: "15px" }}>
                <option>ขัวมุง</option>
                <option>ชมภู</option>
                <option>ไชยสถาน</option>
                <option>ดอนแก้ว</option>
                <option>ท่ากว้าง</option>
                <option>ท่าวังตาล</option>
                <option>ป่าบง</option>
                <option>ยางเนิ้ง</option>
                <option>สันทราย</option>
                <option>สารภี</option>
                <option>หนองผึ้ง</option>
                <option>หนองแฝก</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="อำเภอ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                value="สารภี"
                readOnly
              />
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="จังหวัด">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                value="เชียงใหม่"
                readOnly
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="รหัสไปรษณีย์">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <br></br>
        <h4>ญาติ</h4>
        <br></br>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="คำนำหน้าชื่อ">
              <Form.Select style={{ borderRadius: "15px" }}>
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="นามสกุล">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="ความสัมพันธ์">
              <Form.Select style={{ borderRadius: "15px" }}>
                <option>บิดา</option>
                <option>มารดา</option>
                <option>ผู้ปกครอง</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="เบอร์โทร">
              <Form.Control
                type="text"
                placeholder=" "
                style={{ borderRadius: "15px" }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row>
          <Col lg={4}>
            <Card
              className="text-center"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              <Card.Body>
                <Col>
                  {imageURLs.map((imageSrc) => (
                    <Image src={imageSrc} style={{minHeight:"20.2rem",maxHeifht:"20.2rem"}} thumbnail/>
                  ))}
                  <br></br>
                  <br></br>
                  <Form.Control
                    type="file"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                    multiple
                    accept="image/*"
                    onChange={onImageChange}
                    label="อัพโหลดรูปภาพ"
                  />
                  <br></br>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card
              className="text-center"
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
            >
              <Card.Body>
                <Col>
                  <FloatingLabel controlId="floatingSelect" label="สิทธิรักษา">
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option>ไม่มี</option>
                      <option>UCF (สิทธิบัตรทอง)</option>
                      <option>OFC (สิทธิข้าราชการ)</option>
                      <option>SSS (สิทธิประกันสังคม)</option>
                      <option>LGO (สิทธิ อปท)</option>
                      <option>SSI (สิทธิประกันสังคมทุพพลภาพ)</option>
                      <option>อื่น ๆ</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>

                <Col>
                  <FloatingLabel controlId="floatingInputGrid" label="แพ้ยา">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="โรคประจำตัว"
                  >
                    <Form.Control
                      type="text"
                      placeholder=" "
                      style={{ borderRadius: "15px" }}
                    />
                  </FloatingLabel>
                  <br></br>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="อุปกรณ์ช่วยเดิน"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option>ไม่มี</option>
                      <option>Tripod</option>
                      <option>Wheel Chair</option>
                      <option>Walker</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="อุปกรณ์ติดตัวกลับบ้าน"
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option>ไม่มี</option>
                      <option>NG</option>
                      <option>FOLEY</option>
                      <option>Trancheaostomy</option>
                      <option>Colostomy</option>
                      <option>Skintraction</option>
                      <option>Bipap</option>
                      <option>Syringdriver</option>
                      <option>เครื่องผลิต O2</option>
                      <option>เครื่อง Suction</option>
                      <option>อื่น ๆ</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <Col lg={4}>
            <Card style={{ borderRadius: "10px" }}>
              <Card.Body>
                <Col>
                  <Form.Check type="checkbox" label="ทางการมองเห็น" />
                </Col>
                <br></br>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="ทางการได้ยินหรือสื่อความหมาย"
                  />
                </Col>
                <br></br>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="ทางการเคลื่อนไหวหรือทางร่างกาย"
                  />
                  <br></br>
                  <Col>
                    <Form.Check type="checkbox" label="ทางจิตใจหรือพฤติกรรม" />
                  </Col>
                  <br></br>
                  <Col>
                    <Form.Check type="checkbox" label="ทางสติปัญญา" />
                    <br></br>
                    <Col>
                      <Form.Check type="checkbox" label="ทางการเรียนรู้" />
                      <br></br>
                      <Col>
                        <Form.Check type="checkbox" label="ออทิสติก" />
                      </Col>
                    </Col>
                  </Col>
                </Col>
              </Card.Body>
            </Card>

            <Col>
              <br></br>
              <Button
                className="w-100"
                variant="primary"
                type="submit"
                style={{
                  borderRadius: "15px",
                  padding: "1.1rem",
                }}
              >
                บันทึกข้อมูล
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default RegisterPatienForm;
