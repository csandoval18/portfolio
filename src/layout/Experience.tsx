import React from "react"
import { CgToolbox } from "react-icons/cg"

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section className="Experience">
      <div className="category-header">
        <CgToolbox />
        <h2>Experience</h2>
      </div>
    </section>
  )
}

export default Experience
