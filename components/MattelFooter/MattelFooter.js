import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
const MattelFooter = () => {
  return (
    <>
      <Container
        className="foolterLapTop"
        style={{
          maxWidth: "1500px",
          paddingLeft: 70,
          paddingTop: 30,
        }}
      >
        <Row>
          <Col lg={12}>
            <p style={{ fontSize: "larger" }}>
              <strong>
                Be the first to know about new products & receive special
                offers.
              </strong>
            </p>
          </Col>
          <Row>
            <Col lg={4}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={4} style={{ backgroundColor: "red", margin: 0 }}>
              <Button style={{ margin: 0 }}>f</Button>
            </Col>
          </Row>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default MattelFooter;
