import React from "react"
import Education from "./Education"
import Skills from "./Skills"
import Contact from "./Contact"
import Resume from "./Resume"
import Experience from "./Experience"
import { Link } from "react-scroll"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="Home" id="Home">
      <section className="Hero" id="Hero">
        <div className="hero-layout">
          <div className="title">
            <div className="header-wrapper">
              <h1>
                <span className="first-name">Christian</span>{" "}
                <span className="first-last-name">Alvites</span>{" "}
                <span className="second-last-name">Sandoval</span>
              </h1>
              <div className="hero-btns-layout">
                <Link
                  className="btn btn-primary"
                  smooth={true}
                  to="Resume"
                  offset={-55}
                >
                  Get Resume
                </Link>
                <Link
                  className="btn btn-border"
                  smooth={true}
                  to="Footer"
                  offset={-55}
                >
                  Contact Info
                </Link>
              </div>
            </div>
          </div>
          <div className="design"></div>
        </div>
      </section>

      <Skills />
      <Education />
      <Experience />
      <Resume />
      <Contact />
    </section>
  )
}

export default Home
