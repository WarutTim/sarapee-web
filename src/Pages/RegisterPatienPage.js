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
        <Col md={9} lg={10}>
          <Hometab activetab="registerpatien" />
        </Col>
        <Col md={3} lg={2}>
          <HometabRight />
        </Col>
      </Row>
      <RegisterPatienForm />
      <Footer />
    </div>
  );
}

export default RegisterPatienPage;
