import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Looks like someone's interested :D
            <br/>
            <br/>
            As you may know, my name is <span className="purple">Kyle Ho-Nguyen </span>
            and I'm from <span className="purple"> Saint Petersburg, Florida.</span> {" "}
            I am a computer science major graduating from the <span className="purple"> University of Florida</span> in <span className="purple"> December  2025.</span> {" "}
            Currently, I am on the search for another internship before I graduate! At my last internship, I had the wonderful opportunity
            to work at Publix Technology, where I learned a lot about Microsoft Azure and Automation. However, throughout
            my college career, I've learned a lot about full-stack development, specifically in <span className="purple"> C++, Python, and Javascript.</span>
            <br />
            <br />
            Apart from programming, I love to 
          </p>
          <ul>
            <li className="about-activity">
               Play beach volleyball
            </li>
            <li className="about-activity">
               Experiment with food
            </li>
            <li className="about-activity">
                and, of course, play video games
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            If you want to know more, <span className="purple">reach out!</span> <br /> I'd love to talk :D
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
