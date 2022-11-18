import React from "react";
import { Container } from "react-bootstrap";

import { MattelNavBar } from "../components/MattelNavBar";
import { MattelFooter } from "../components/MattelFooter";
const Wrapper = ({ children }) => {
  return (
    <Container
      fluid
      className="min-vh-100"
      style={{ backgroundColor: "#c9c9c9", padding: 0 }}
    >
      <MattelNavBar />
      <Container
        style={{
          //just gave margin for visuals
          marginTop: 10,
          backgroundColor: "#ffffff",
          maxWidth: "1500px",
          padding: 0,
          // backgroundColor: "red",
        }}
      >
        {children}
      </Container>
      <MattelFooter />
    </Container>
  );
};

export default Wrapper;
