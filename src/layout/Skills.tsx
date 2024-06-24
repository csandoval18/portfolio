import React from "react"
import Carousel from "../components/Carousel"
import { GiCyberEye } from "react-icons/gi"

interface SkillsProps {}

const techStack = {
  Languages: {
    header: "Languages",
    items: {
      JavaScript: 80,
      TypeScript: 75,
      Python: 85,
      "C++": 65,
      "C#": 35,
      PHP: 40,
    },
  },
  FrameworksLibraries: {
    header: "Frameworks",
    items: {
      React: 80,
      "Vue.js": 35,
      Express: 60,
      Laravel: 40,
      ".Net": 35,
      Django: 20,
    },
  },
  CMS: {
    header: "CMS",
    items: {
      WordPress: 85,
      NopCommerce: 70,
      DotNetNuke: 70,
    },
  },
  Databases: {
    header: "Databases",
    items: {
      SQL: 70,
      PostgreSQL: 70,
      MongoDB: 40,
      Redis: 35,
    },
  },
  DevOps: {
    header: "Dev/Ops",
    items: {
      Docker: 50,
      Git: 70,
      AWS: 50,
      "Linux (Ubuntu)": 50,
      WSL2: 40,
    },
  },
  Design: {
    header: "Design",
    items: {
      Photoshop: 65,
      Illustrator: 65,
      Figma: 40,
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
          <h3>Software Engineering</h3>
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
      <div className="center-wrapper">
        <div className="skill-wrapper container">
          {Object.entries(techStack).map(([category, data]) => (
            <div key={category} className="skill-block">
              <h4>{data.header}</h4>
              <ul className="list-wrapper">
                {Object.entries(data.items).map(([item, skill_wt]) => (
                  <li key={item}>
                    {item} : {skill_wt}
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
      </div>
    </section>
  )
}

export default Skills
