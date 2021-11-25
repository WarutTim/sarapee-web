import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";
import RegisterPatienForm from "../Components/RegisterPatientForm/RegisterPatienForm";

import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Hometab activetab="home" />
        </Col>
        <Col lg={6}>
          <HometabRight />
        </Col>
      </Row>
      <RegisterPatienForm />
      <Footer />
    </div>
  );
}

export default HomePage;
