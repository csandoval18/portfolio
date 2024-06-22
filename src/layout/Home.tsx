import React from "react"
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

      <Skills />
      <Education />
      <Contact />
    </section>
  )
}

export default Home
