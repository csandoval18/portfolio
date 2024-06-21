import React from "react"
import Carousel from "../components/Carousel"
import Education from "./Education"
import Skills from "./Skills"
import Contact from "./Contact"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="Home">
      <section className="Hero">
        <div className="hero-layout">
          <div className="title">
            <div className="header-wrapper">
              <h1>
                <span className="first-name">Chirstian</span>{" "}
                <span className="first-last-name">Alvites</span>{" "}
                <span className="second-last-name">Sandoval</span>
              </h1>
              <div className="hero-btns-layout">
                <a className="btn btn-primary" href="/contact">
                  Learn More
                </a>
                <a className="btn btn-border" href="/contact">
                  Contact Info
                </a>
              </div>
            </div>
          </div>
          <div className="design"></div>
        </div>
      </section>

      <section className="Intro container">
        <h2>Software Engineer</h2>
        <div className="card">
          <h3>Skills</h3>
          <p className="intro-p">
            As a passionate and dedicated Software Engineer, I specialize in
            designing and developing high-quality software solutions. My journey
            in technology has equipped me with a diverse skill set and a deep
            understanding of various programming languages, frameworks, and
            tools. Below are some of the technologies I excel in, each playing a
            crucial role in my ability to create innovative and efficient
            applications.
          </p>
        </div>
      </section>

      <Carousel />
      <Skills />
      <Education />
      <Contact />
    </section>
  )
}

export default Home
