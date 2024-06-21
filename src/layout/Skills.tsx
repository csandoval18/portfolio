import React from "react"
import Carousel from "../components/Carousel"

interface SkillsProps {}

let skills = {
  languages = {
    cagegory: "",
  },
}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section className="Skills">
      <h2 className="center-heading">Skills</h2>

      <section className="intro container">
        <div className="card">
          <h3>Software Engineer</h3>
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

      <div className="skill-wrapper">
        <h4>Languages</h4>
      </div>
      <div className="skill-wrapper">
        <h4>Frameworks/Libraries</h4>
      </div>
      <div className="skill-wrapper">
        <h4>Databases</h4>
      </div>
      <div className="skill-wrapper">
        <h4>Dev/Ops</h4>
      </div>
    </section>
  )
}

export default Skills
