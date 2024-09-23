import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET'S COVER <span className="purple"> WHO I AM </span> FIRST
            </h1>
            <p className="home-about-body">
              My name is Kyle Ho-Nguyen, and I am an aspiring <b className="purple"> Software Engineer. </b>
              <br />
              <br /> I am graduating from the<b className="purple"> University of Florida </b> in Dec. 2025. WOOO Go Gators! <br />
              <br />
              I am interested in <b className="purple">Full-Stack Development </b> and also in areas related to {" "}<b className="purple">Automation/ Scripting. </b>
              <br />
              <br /> My goal is to change lives with <b className="purple">Innovative Software </b> and<b className="purple"> Advanced Technologies.</b>
              <br />
              <br /> Be sure to check the rest of my portfolio!

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>REACH OUT!</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KyleHoNguyen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kylehonguyen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kyle.honguyen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
