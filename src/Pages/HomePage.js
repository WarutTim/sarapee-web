import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";


import { Col, Row } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <Hometab  />
        </Col>
        <Col lg={4}>
          <HometabRight activetab="home" />
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default HomePage;