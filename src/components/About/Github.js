import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I've <strong className="purple">Coded</strong>
      </h1>
      <GitHubCalendar
        username="KyleHoNguyen"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <p style={{ textAlign: "center", marginTop: "15px" }}>
        <br/>
        As you can see, I'm trying to be more active :P. Check out my recent projects to see what I've been doing!
      </p>
    </Row>


  );
}

export default Github;
