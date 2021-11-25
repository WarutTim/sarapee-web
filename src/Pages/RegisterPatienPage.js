import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import RegisterPatienForm from "../Components/RegisterPatientForm/RegisterPatienForm";

import { Col, Row } from "react-bootstrap";

function RegisterPatienPage() {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <Hometab activetab="registerpatien" />
        </Col>
        <Col lg={4}>
          <HometabRight />
        </Col>
      </Row>
      <RegisterPatienForm />
      <Footer />
    </div>
  );
}

export default RegisterPatienPage;
