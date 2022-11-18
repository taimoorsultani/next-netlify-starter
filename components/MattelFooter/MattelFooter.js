import React from 'react';

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  ListGroup,
  Accordion,
} from 'react-bootstrap';
const MattelFooter = () => {
  return (
    <>
      <Container
        style={{
          maxWidth: '1500px',
          paddingLeft: 70,
          paddingTop: 30,
        }}
      >
        <Row>
          <Col lg={12}>
            <p style={{ fontSize: 'large' }}>
              <strong>
                Be the first to know about new products & receive special
                offers.
              </strong>
            </p>
          </Col>
          <Col lg={4} xs={6} style={{ padding: 0, marginTop: 0 }}>
            <Form>
              <Form.Group>
                <Form.Control
                  style={{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 0,
                  }}
                  size="lg"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={4} xs={6} style={{ padding: 0, margin: 0 }}>
            <Button
              size="lg"
              style={{
                margin: 0,
                backgroundColor: ' #3e3d3d ',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 25,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 25,
              }}
            >
              Sign Up
            </Button>
          </Col>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Col lg={1} sm={1} xs={1} style={{ padding: 0, width: 20 }}>
            <Form>
              <Form.Check type="checkbox" id="custom-switch" />
            </Form>
          </Col>
          <Col lg={5} sm={11} xs={11} style={{ margin: 0 }}>
            <p>
              By submitting email, I confirm I want to receive emails from
              Mattel Creations and other trusted Mattel brands and programs.
              Click to read Mattel's
              <a>Terms & Conditions</a> and Privacy Statement.
            </p>
          </Col>
        </Row>

        <div className="Laptop">
          <Row>
            <Col>
              <ListGroup className="listFooter">
                <ListGroup.Item>
                  <p className="ListFooterTitle">Shop & Learn</p>
                </ListGroup.Item>
                <ListGroup.Item>Gift Cards</ListGroup.Item>
                <ListGroup.Item>Mattel Creations</ListGroup.Item>
                <ListGroup.Item>Mattel Playroom</ListGroup.Item>
                <ListGroup.Item>Mattel Kids</ListGroup.Item>
                <ListGroup.Item>Gifts</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <ListGroup className="listFooter">
                <ListGroup.Item>
                  <p className="ListFooterTitle">Customer Service</p>
                </ListGroup.Item>
                <ListGroup.Item>FAQs</ListGroup.Item>
                <ListGroup.Item>Warranty</ListGroup.Item>
                <ListGroup.Item>Contact Us</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <ListGroup className="listFooter">
                <ListGroup.Item>
                  <p className="ListFooterTitle">HelpFul Links</p>
                </ListGroup.Item>
                <ListGroup.Item>Instructions</ListGroup.Item>
                <ListGroup.Item>Replacement Parts</ListGroup.Item>
                <ListGroup.Item>Submit Product Ideas</ListGroup.Item>
                <ListGroup.Item>Recall & Safety</ListGroup.Item>
                <ListGroup.Item>Careers</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <ListGroup className="listFooter">
                <ListGroup.Item>
                  <p className="ListFooterTitle">About Us</p>
                </ListGroup.Item>
                <ListGroup.Item>About Mattel</ListGroup.Item>
                <ListGroup.Item>Mattel Corporate</ListGroup.Item>
                <ListGroup.Item>Substainability</ListGroup.Item>
                <ListGroup.Item>Toy Store Locations</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col>
              <ListGroup className="listFooter">
                <ListGroup.Item>
                  <p>Terms of Sale</p>
                </ListGroup.Item>
                <ListGroup.Item>Privacy Statement</ListGroup.Item>
                <ListGroup.Item>Cookies & Technology</ListGroup.Item>
                <ListGroup.Item>Terms & Conditions</ListGroup.Item>
                <ListGroup.Item>
                  Do Not Sell My Personal Information(ADCHOICES)
                </ListGroup.Item>
                <ListGroup.Item>
                  © {new Date().getFullYear()} Mattel
                </ListGroup.Item>
              </ListGroup>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Image style={{ width: 60, margin: 10 }} src="/privacy.png" />
              </div>
            </Col>
          </Row>
        </div>

        <div className="Mobile">
          <Row>
            <Col lg={12} sm={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="ListFooterTitle">Shop & Learn</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listFooter">
                      <ListGroup.Item>Gift Cards</ListGroup.Item>
                      <ListGroup.Item>Mattel Creations</ListGroup.Item>
                      <ListGroup.Item>Mattel Playroom</ListGroup.Item>
                      <ListGroup.Item>Mattel Kids</ListGroup.Item>
                      <ListGroup.Item>Gifts</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={12} sm={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="ListFooterTitle">Customer Service</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listFooter">
                      <ListGroup.Item>FAQs</ListGroup.Item>
                      <ListGroup.Item>Warranty</ListGroup.Item>
                      <ListGroup.Item>Contact Us</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={12} sm={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="ListFooterTitle">HelpFul Links</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listFooter">
                      <ListGroup.Item>Instructions</ListGroup.Item>
                      <ListGroup.Item>Replacement Parts</ListGroup.Item>
                      <ListGroup.Item>Submit Product Ideas</ListGroup.Item>
                      <ListGroup.Item>Recall & Safety</ListGroup.Item>
                      <ListGroup.Item>Careers</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={12} sm={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="ListFooterTitle">About Us</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup className="listFooter">
                      <ListGroup.Item>About Mattel</ListGroup.Item>
                      <ListGroup.Item>Mattel Corporate</ListGroup.Item>
                      <ListGroup.Item>Substainability</ListGroup.Item>
                      <ListGroup.Item>Toy Store Locations</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col>
              <ListGroup className="listFooter">
                <ListGroup.Item>
                  <p>Terms of Sale</p>
                </ListGroup.Item>
                <ListGroup.Item>Privacy Statement</ListGroup.Item>
                <ListGroup.Item>Cookies & Technology</ListGroup.Item>
                <ListGroup.Item>Terms & Conditions</ListGroup.Item>
                <ListGroup.Item>
                  Do Not Sell My Personal Information(ADCHOICES)
                </ListGroup.Item>
                <ListGroup.Item>
                  © {new Date().getFullYear()} Mattel
                </ListGroup.Item>
              </ListGroup>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Image style={{ width: 60, margin: 10 }} src="/privacy.png" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MattelFooter;
