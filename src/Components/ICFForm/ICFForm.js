import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

function ICFForm() {
  return (
    <Container className="d-grid p-3">
      <Form>
        <Row>
          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">
                  Body functions and stractures
                </h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Injury severity and neurologic level"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Cognition">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Fitness">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Upper extremities"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>

          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Participation</h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Quality of life"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Community Participation"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Social Engagement"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Work / Employment"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Activities</h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Mobility in the home and community"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="ADL">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Physical avtivity and exercise"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>

          <Col lg={6}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Enviromental Factors</h4>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Wheelchair design and seating configuration"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Home, Comunity, and work barriers"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Transportation"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h4 className="text-center p-2">Personal Factors</h4>
                <FloatingLabel controlId="floatingInputGrid" label="Age">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Skill">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="BMI">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Gender">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel controlId="floatingInputGrid" label="Ethnicity">
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Duration of impairment"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Maritial and socioeconomic stauts"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    style={{ borderRadius: "15px" }}
                  />
                </FloatingLabel>
                <br></br>
              </Card.Body>
            </Card>
            <br></br>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col lg={6}>
            <Button
              className="w-100"
              variant="primary"
              type="submit"
              style={{
                borderRadius: "15px",
                padding: ".75rem",
              }}
            >
              บันทึกข้อมูล
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ICFForm;
