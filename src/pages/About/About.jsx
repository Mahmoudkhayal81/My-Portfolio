import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm <span>Mahmoud Mostafa</span>, a passionate <strong>Frontend Developer</strong> 
          with experience in building responsive and user-friendly web applications.
          Skilled in <strong>React.js, JavaScript, HTML, CSS, and modern UI frameworks</strong>.
          I love turning creative ideas into functional web solutions with a focus on 
          performance and great user experience.
        </p>

        <div className="about-info">
          <div className="info-box">
            <h3>🎓 Education</h3>
            <p>Studying Economics with a strong focus on technology and self-learning web development.</p>
          </div>
          <div className="info-box">
            <h3>💼 Experience</h3>
            <p>Freelance Frontend Developer working on projects like restaurant websites 
            and movie recommendation platforms.</p>
          </div>
          <div className="info-box">
            <h3>⚡ Skills</h3>
            <p>React.js, JavaScript (ES6+), TailwindCSS, Git/GitHub, Responsive Design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
