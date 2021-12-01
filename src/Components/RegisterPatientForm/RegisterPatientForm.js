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

import { auth, db } from "../../Config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { collection, addDoc, getDocs } from "firebase/firestore";

import ImageBlank from "./img/Profile.png";

function RegisterPatienForm() {
  // Auth
  let navigate = useNavigate();
  const [userAuth, setuserAuth] = useState({});
  onAuthStateChanged(auth, (currentuserAuth) => {
    setuserAuth(currentuserAuth);
  });
  if (!userAuth) {
    navigate("/");
  }

  // Image Preview
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

  // DB
  const [users, setUsers] = useState();
  const usersCollectionRef = collection(db, "users");

  // Data Db
  const [hnDb, setHnDb] = useState("");
  const [datePatientCardDb, setDatePatientCardDb] = useState("");
  const [preFixNameDb, setPrefixNameDb] = useState("นาย");
  const [idCardDb, setIdCardDb] = useState("");
  const [birthDayDb, setBirthDayDb] = useState("");
  const [fnameDb, setFnameDb] = useState("");
  const [lnameDb, setLnameDb] = useState("");
  const [ageDb, setAgeDb] = useState("");
  const [bloodTypeDb, setBloodTypeDb] = useState("O");
  const [statusDb, setStatusDb] = useState("โสด");
  const [addressDb, setAddressDb] = useState("");
  const [swineDb, setSwineDb] = useState("");
  const [alleyDb, setAlleyDb] = useState("");
  const [villageDb, setVillageDb] = useState("");
  const [subDistrictDb, setSubDistrictDb] = useState("ขัวมุง");
  const [relativePrefixNameDb, setRelativePrefixNameDb] = useState("นาย");
  const [relativeFnameDb, setRelativeFnameDb] = useState("");
  const [relativeLnameDb, setRelativeLnameDb] = useState("");
  const [relationShipDb, setRelationShipDb] = useState("บิดา");
  const [telephoneDb, setTelephoneDb] = useState("");
  const [rigthToTreatmentDb, setRigthToTreatmentDb] = useState("ไม่มี"); //สิทธิการรักษา
  const [drugAllergyDb, setDrugAllergyDb] = useState(""); //แพ้ยา
  const [congenitalDiseaseDb, setCongenitalDiseaseDb] = useState(""); //โรคประจำตัว
  const [walkingAidDb, setWalkingAidDb] = useState("ไม่มี");
  const [takeHomeEquDb, setTakeHomeEquDb] = useState("ไม่มี");

  //Order

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      hn: hnDb,
      datePatientCard: datePatientCardDb,
      prefixName: preFixNameDb,
      fname: fnameDb,
      lname: lnameDb,
      idCard: idCardDb,
      birthDay: birthDayDb,
      age: ageDb,
      bloodType: bloodTypeDb,
      status: statusDb,
      address: addressDb,
      swine: swineDb,
      alley: alleyDb,
      village: villageDb,
      subDistrict: subDistrictDb,
      district: "สารภี",
      province: "เชียงใหม่",
      postcode: "50140",
      relativePrefixName: relativePrefixNameDb,
      realativeFname: relativeFnameDb,
      realativeLname: relativeLnameDb,
      realationship: relationShipDb,
      telephone: telephoneDb,
      rigthToTreatment: rigthToTreatmentDb,
      drugAllergy: drugAllergyDb,
      congenitalDisease: congenitalDiseaseDb,
      walkingAid: walkingAidDb,
      takeHomeEqu: takeHomeEquDb,
    });
    alert("บันทึกข้อมูลแล้ว");
  };

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
                onChange={(e) => {
                  setHnDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setDatePatientCardDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="คำนำหน้าชื่อ">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setPrefixNameDb(e.target.value);
                }}
              >
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="ชื่อ">
              <Form.Control
                type="text"
                name="fname"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setFnameDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingInputGrid" label="นามสกุล">
              <Form.Control
                type="text"
                name="lname"
                placeholder=" "
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setLnameDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setIdCardDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setBirthDayDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setAgeDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="หมู่เลือด">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setBloodTypeDb(e.target.value);
                }}
              >
                <option value="O">O</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
              </Form.Select>
            </FloatingLabel>
            <br></br>
          </Col>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="สถานภาพ">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setStatusDb(e.target.value);
                }}
              >
                <option value="โสด">โสด</option>
                <option value="สมรส">สมรส</option>
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
                onChange={(e) => {
                  setAddressDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setSwineDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setAlleyDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setVillageDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="ตำบล">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setSubDistrictDb(e.target.value);
                }}
              >
                <option value="ขัวมุง">ขัวมุง</option>
                <option value="ชมภู">ชมภู</option>
                <option value="ไชยสถาน">ไชยสถาน</option>
                <option value="ดอนแก้ว">ดอนแก้ว</option>
                <option value="ท่ากว้าง">ท่ากว้าง</option>
                <option value="ท่าวังตาล">ท่าวังตาล</option>
                <option value="ป่าบง">ป่าบง</option>
                <option value="ยางเนิ้ง">ยางเนิ้ง</option>
                <option value="สันทราย">สันทราย</option>
                <option value="สารภี">สารภี</option>
                <option value="หนองผึ้ง">หนองผึ้ง</option>
                <option value="หนองแฝก">หนองแฝก</option>
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
                value="50140"
                style={{ borderRadius: "15px" }}
                readOnly
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
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setRelativePrefixNameDb(e.target.value);
                }}
              >
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
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
                onChange={(e) => {
                  setRelativeFnameDb(e.target.value);
                }}
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
                onChange={(e) => {
                  setRelativeLnameDb(e.target.value);
                }}
              />
            </FloatingLabel>
            <br></br>
          </Col>

          <Col lg={3}>
            <FloatingLabel controlId="floatingSelect" label="ความสัมพันธ์">
              <Form.Select
                style={{ borderRadius: "15px" }}
                onChange={(e) => {
                  setRelationShipDb(e.target.value);
                }}
              >
                <option value="บิดา">บิดา</option>
                <option value="มารดา">มารดา</option>
                <option value="ผู้ปกครอง">ผู้ปกครอง</option>
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
                onChange={(e) => {
                  setTelephoneDb(e.target.value);
                }}
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
                    <Image
                      src={imageSrc}
                      style={{ minHeight: "20.2rem", maxHeifht: "20.2rem" }}
                      thumbnail
                    />
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
                    <Form.Select
                      style={{ borderRadius: "15px" }}
                      onChange={(e) => {
                        setRigthToTreatmentDb(e.target.value);
                      }}
                    >
                      <option value="ไม่มี">ไม่มี</option>
                      <option value="UCF (สิทธิบัตรทอง)">
                        UCF (สิทธิบัตรทอง)
                      </option>
                      <option value="OFC (สิทธิข้าราชการ)">
                        OFC (สิทธิข้าราชการ)
                      </option>
                      <option value="SSS (สิทธิประกันสังคม)">
                        SSS (สิทธิประกันสังคม)
                      </option>
                      <option value="LGO (สิทธิ อปท)">LGO (สิทธิ อปท)</option>
                      <option value="SSI (สิทธิประกันสังคมทุพพลภาพ)">
                        SSI (สิทธิประกันสังคมทุพพลภาพ)
                      </option>
                      <option value="อื่น ๆ">อื่น ๆ</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="แพ้ยา"
                    onChange={(e) => {
                      setDrugAllergyDb(e.target.value);
                    }}
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
                    controlId="floatingInputGrid"
                    label="โรคประจำตัว"
                    onChange={(e) => {
                      setCongenitalDiseaseDb(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setWalkingAidDb(e.target.value);
                    }}
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value="ไม่มี">ไม่มี</option>
                      <option value="Tripod">Tripod</option>
                      <option value="Wheel Chair">Wheel Chair</option>
                      <option value="Walker">Walker</option>
                    </Form.Select>
                  </FloatingLabel>
                  <br></br>
                </Col>

                <Col>
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="อุปกรณ์ติดตัวกลับบ้าน"
                    onChange={(e) => {
                      setTakeHomeEquDb(e.target.value);
                    }}
                  >
                    <Form.Select style={{ borderRadius: "15px" }}>
                      <option value="ไม่มี">ไม่มี</option>
                      <option value="NG">NG</option>
                      <option value="FOLEY">FOLEY</option>
                      <option value="Trancheaostomy">Trancheaostomy</option>
                      <option value="Colostomy">Colostomy</option>
                      <option value="Skintraction">Skintraction</option>
                      <option value="Bipap">Bipap</option>
                      <option value="Syringdriver">Syringdriver</option>
                      <option value="เครื่องผลิต Oxygen">
                        เครื่องผลิต Oxygen
                      </option>
                      <option value="เครื่อง Suction">เครื่อง Suction</option>
                      <option value="อื่น ๆ">อื่น ๆ</option>
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
                onClick={createUser}
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
