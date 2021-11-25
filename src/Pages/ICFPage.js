import React from "react";

import Footer from "../Components/Footer/Footer";
import Hometab from "../Components/Hometab/Hometab";
import HometabRight from "../Components/Hometab/HometabRight";

import ICFForm from "../Components/ICFForm/ICFForm";

import { Row, Col } from "react-bootstrap"; 
function ICFPage() {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Hometab activetab="icf" />
        </Col>
        <Col lg={6}>
          <HometabRight />
        </Col>
      </Row>
      <ICFForm />
      <Footer />
    </div>
  );
}

export default ICFPage;
