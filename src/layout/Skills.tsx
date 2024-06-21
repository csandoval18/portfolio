import React from "react"
import Carousel from "../components/Carousel"
import { GiCyberEye } from "react-icons/gi"

interface SkillsProps {}

const techStack = {
  Languages: {
    header: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Ruby"],
  },
  FrameworksLibraries: {
    header: "Frameworks/Libraries",
    items: ["React", "Vue.js", "Angular", "Express", "Django", "Flask"],
  },
  Databases: {
    header: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"],
  },
  DevOps: {
    header: "Dev/Ops",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS",
      "Azure",
    ],
  },
}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section className="Skills">
      <div className="category-header">
        <GiCyberEye />
        <h2>Skills</h2>
      </div>
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

      <div className="skill-wrapper container">
        {Object.entries(techStack).map(([category, data]) => (
          <div key={category}>
            <h4>{data.header}</h4>
            <ul>
              {data.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
