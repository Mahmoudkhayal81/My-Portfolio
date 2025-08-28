import React, { useEffect } from "react";
import "./Home.css";
import sampleImg from "../../assets/sample.jpg";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("fade-in");
      });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <img src={sampleImg} alt="Mahmoud Mostafa" className="profile-img"/>
          <h1 className="home-title">Hi, I'm <span>Mahmoud Mostafa</span></h1>
          <h3 className="home-subtitle">Frontend Developer</h3>
          <p className="home-desc">
            Passionate Frontend Developer building responsive, dynamic, and user-friendly web applications.
          </p>
          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline-light">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default Home;
