import React from "react"
import { LiaUniversitySolid } from "react-icons/lia"
import { PiGraduationCapFill } from "react-icons/pi"

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
  return (
    <section className="Education" id="Education">
      <div className="category-header">
        <PiGraduationCapFill />
        <h2>Education</h2>
      </div>
      <div className="education-content container">
        <div className="education-card grain-texture">
          <div className="university-header">
            <h3>
              <LiaUniversitySolid />
              <span>
                University of Wisconsin -
                <span className="purple">Whitewater</span>
              </span>
            </h3>
          </div>
          <p>Major: Bachelor's of Science - Computer Science</p>
          <p>GPA: 3.45</p>

          <div className="courses">
            <h4>Relevant Courses</h4>
            <ul>
              <li>Data Structures</li>
              <li>Theory of Algorithms</li>
              <li>Server-Side Scripting</li>
              <li>Advanced Web App Development</li>
              <li>Theory of Computation</li>
              <li>Visual Design for Digital Media</li>
              <li>JavaScript & DHTML</li>
              <li>Software Engineering</li>
              <li>Web Server and Unix Administration</li>
              <li>Computer Organization/ System</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
