import React from "react"
import { MdPictureAsPdf } from "react-icons/md"
import resumePng from "/images/resume-2024.png"

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = () => {
  return (
    <section className="Resume" id="Resume">
      <div className="category-header">
        <MdPictureAsPdf />
        <h2>Resume</h2>
      </div>
      <div className="resume-content container">
        <img src={resumePng} alt="" />

        <span>Grab a copy 😊</span>
        <a
          className="btn btn-primary"
          href="/documents/resume-2024.pdf"
          download="csandoval-resume.pdf"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
