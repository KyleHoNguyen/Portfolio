import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftazure,
  SiGit,
  SiVisualstudiocode,
  SiDocker,
  SiFigma,
  SiApachesolr,
  SiDynatrace,
  SiStrapi,
  SiWindows,
  SiLinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachesolr />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDynatrace />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStrapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
