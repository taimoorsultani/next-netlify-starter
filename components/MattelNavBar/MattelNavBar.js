import React, { useState, useRef } from 'react';
import {
  Container,
  Image,
  Form,
  Button,
  Breadcrumb,
  NavDropdown,
  Nav,
  Row,
  Col,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

const MattelNavBar = () => {
  const expand = false;
  const componentRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Container fluid className="Laptop">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            style={{ width: 70, margin: 10 }}
            src="/logo.png"
            roundedCircle
          />
        </div>
        <hr className="solid" style={{ width: '100%', margin: 0 }} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gridTemplateRows: '50px',
            marginTop: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 100,
              flexshrink: 2,
            }}
          >
            <Nav>
              <NavDropdown title="Shop">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Brand">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">New</Nav.Link>
            </Nav>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '30px',
            }}
          >
            {!showSearch && (
              <Button
                size="lg"
                bsPrefix="searchButton"
                onClick={() => setShowSearch(true)}
              >
                <BiSearch size={35} />
                Search
              </Button>
            )}

            {showSearch && (
              <Form className="d-flex" ref={componentRef}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
              </Form>
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '70px',
            marginTop: '10PX',
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item href="#">HOME</Breadcrumb.Item>
            <Breadcrumb.Item href="#">EMAIL PREFERENCES</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>

      <Container fluid className="Mobile">
        <Row style={{ margin: 0 }}>
          <Col style={{ display: 'flex' }}>
            <Button
              size="lg"
              bsPrefix="searchButton"
              onClick={() => setShowSearch(true)}
            >
              <BiSearch size={50} />
            </Button>
          </Col>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                style={{ width: 60, margin: 10 }}
                src="/logo.png"
                roundedCircle
              />
            </div>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Navbar key={expand} expand={expand} style={{ border: 0 }}>
              <Container fluid>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <hr className="solid" style={{ width: '100%', margin: 0 }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '20px',
            marginTop: '10PX',
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item href="#">HOME</Breadcrumb.Item>
            <Breadcrumb.Item href="#">EMAIL PREFERENCES</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
    </>
  );
};

export default MattelNavBar;
