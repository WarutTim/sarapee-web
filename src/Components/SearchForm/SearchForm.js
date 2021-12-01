import React, { useState, useEffect } from "react";

import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Table,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { auth, db } from "../../Config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
function SearchForm() {
  // DB
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  // Get DB ID

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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td></td>
                    <td>{user.idCard}</td>
                    <td>{user.subDistrict}</td>
                    <td>
                      {user.fname} {user.lname}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <Button
                        className="w-100"
                        variant="primary"
                        style={{ borderRadius: "15px", padding: ".5rem" }}
                      >
                        <Link
                          to={`/infopatient/${user.id}`}
                          activeClassName="active"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          ดูข้อมูล
                        </Link>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
