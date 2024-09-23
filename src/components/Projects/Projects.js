import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import BoardGamers from "../../Assets/Projects/BoardGamers.png"
import LeetCodeJourney from "../../Assets/Projects/LeetCodeJourney.png"
import UFDirectoryApp from "../../Assets/Projects/UFDirectoryApp.png"
import CodeSparks from "../../Assets/Projects/CodeSparks.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeSparks}
              isBlog={false}
              title="Code-Sparks"
              description="Code-Sparks is an application to teach K-12 students how to code. My responsibility was to design and implement the Admin Role for the organization. This meant handling admin user authentication, admin main page, navigation bar, and all users of the application."
              tools="React.js, Node.js, Bootstrap 5, Strapi, Docker, Git, and VS Code"
              ghLink="https://github.com/Group4F/Sapphire-Project12-4f"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UFDirectoryApp}
              isBlog={false}
              title="UF Directory App"
              description="The UF Directory App is a dynamic web application designed to showcase over 100 buildings in Gainesville using a university database."
              tools="HTML, CSS, JavaScript, Node.js with Express, and VS Code"
              ghLink="https://github.com/UFWebApps2-0/bootcamp-3-introduction-to-frontend-development-with-react-KyleHoNguyen"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BoardGamers}
              isBlog={false}
              title="Board-Gamers"
              description="Board-Gamers is a recommendation system for over 1,000 board games, utilizing advanced sorting algorithms to personalize suggestions. The project, developed by a team of three, enhances user interaction through Dear ImGui and organizes a large dataset using Object-Oriented Programming for efficient data management."
              tools="C++, Git, Dear ImGui, and VS Code"
              ghLink="https://github.com/KyleHoNguyen/Board-Gamers"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeetCodeJourney}
              isBlog={false}
              title="LeetCode Tracker"
              description="LeetCode Tracker is a simple compilation of Python Scripts that accurately tracks LeetCode Progress based on manually written markdown files. This repository is great for those keeping notes of their progress!"
              tools="Python, VS Code, and Git"
              ghLink="https://github.com/KyleHoNguyen/Leetcode-Notes"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
