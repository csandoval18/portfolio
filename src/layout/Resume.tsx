import React from "react"
import { MdPictureAsPdf } from "react-icons/md"
import resumePng from "/images/resume-2024.png"
import resumePdf from "/documents/resume-2024.pdf"

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = () => {
  return (
    <div className="Resume">
      <div className="category-header">
        <MdPictureAsPdf />
        <h2>Resume</h2>
      </div>
      <div className="resume-content">
        <img src={resumePng} alt="" />

        <h3>Grab a copy 😊</h3>
        <a
          className="btn btn-primary"
          href="/documents/resume-2024.pdf"
          download="csandoval-resume.pdf"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Resume
