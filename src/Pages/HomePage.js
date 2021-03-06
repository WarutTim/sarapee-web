import React, { useState } from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Row>
        <Col md={9} lg={10}>
          <Hometab />
        </Col>
        <Col md={3} lg={2}>
          <HometabRight activetab="home" />
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default HomePage;
