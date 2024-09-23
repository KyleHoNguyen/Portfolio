import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full-Stack Developer",
          "Automation Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 15,
      }}
    />
  );
}

export default Type;
