import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa"; // Bootstrap
import { SiExpress , SiReact} from "react-icons/si"; // Express.js

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
    </Row>
  );
}

export default Frameworks;
