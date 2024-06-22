import React from "react"
import { LiaUniversitySolid } from "react-icons/lia"
import { PiGraduationCapFill } from "react-icons/pi"

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <section className="Education">
      <div className="category-header">
        <PiGraduationCapFill />
        <h2>Education</h2>
      </div>
      <div className="education-content container">
        <h3>
          <LiaUniversitySolid />
          University of Wisconsin - <span>Whitewater</span>
        </h3>
        <p>Major: Bachelors of Science - Computer Science</p>
        <p>GPA: 3.4</p>

        <h4>Relevant Courses</h4>
        <ul>
          <li>Data Structures</li>
          <li> Theory of Algorithms</li>
          <li> Server-Side Scripting</li>
          <li>Advanced Web App Development</li>
          <li>Theory of Computation</li>
          <li>Visual Design for Digital Media</li>
          <li>JavaScript/DHTML</li>
          <li>Software Engineering</li>
          <li>Web Server and Unix Administration</li>
          <li>Computer Organization/ System</li>
        </ul>
      </div>
    </section>
  )
}

export default Education
