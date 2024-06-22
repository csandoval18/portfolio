import React from "react"
import Carousel from "../components/Carousel"
import { GiCyberEye } from "react-icons/gi"

interface SkillsProps {}

const techStack = {
  Languages: {
    header: "Languages",
    items: {
      JavaScript: 88,
      TypeScript: 80,
      Python: 88,
      "C++": 75,
      PHP: 60,
    },
  },
  FrameworksLibraries: {
    header: "Frameworks",
    items: {
      React: 85,
      "Vue.js": 80,
      Angular: 75,
      Express: 70,
      ".Net": 40,
      Django: 20,
    },
  },
  Databases: {
    header: "Databases",
    items: {
      MySQL: 90,
      PostgreSQL: 85,
      MongoDB: 80,
      SQLite: 75,
      Redis: 70,
    },
  },
  DevOps: {
    header: "Dev/Ops",
    items: {
      Docker: 88,
      Kubernetes: 85,
      Jenkins: 80,
      "GitHub Actions": 75,
      AWS: 90,
      Azure: 85,
    },
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
              {Object.entries(data.items).map(([item, skill_wt]) => (
                <li key={item}>
                  {item} : {skill_wt}{" "}
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: skill_wt + "%" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
