import React from "react"
import { PiGraduationCapFill } from "react-icons/pi"

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <section className="Education">
      <div className="category-header">
        <PiGraduationCapFill />
        <h2>Education</h2>
      </div>
    </section>
  )
}

export default Education
