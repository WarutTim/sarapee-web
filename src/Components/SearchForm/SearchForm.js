import React from "react";

import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Table,
} from "react-bootstrap";

function SearchForm() {
  return (
    <Container className="p-3">
      <Row>
        <Col lg={9}>
          <FloatingLabel controlId="floatingInputGrid" label="เลขบัตรประชาชน">
            <Form.Control
              type="text"
              placeholder=" "
              style={{ borderRadius: "15px" }}
            />
          </FloatingLabel>
          <br></br>
        </Col>
        <Col lg={3}>
          <FloatingLabel controlId="floatingSelect" label="รูปแบบ">
            <Form.Select style={{ borderRadius: "15px" }}>
              <option>ค่าเริ่มต้น</option>
              <option>เรียงตามบัตรประชาชน</option>
              <option>FOLEY</option>
            </Form.Select>
          </FloatingLabel>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>เลขบัตรประชาชน</th>
                <th>ตำบล</th>
                <th>ชื่อ-นามสกุล</th>
                <th>อาการสำคัญ</th>
                <th>การวินิจฉัยโรค</th>
                <th>สาเหตุอาการ</th>
                <th>คะแนน BI</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
