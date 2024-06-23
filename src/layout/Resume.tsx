import React from "react"
import { MdPictureAsPdf } from "react-icons/md"

interface ResumeProps {}

const Resume: React.FC<ResumeProps> = () => {
  return (
    <div className="Resume">
      <div className="category-header">
        <MdPictureAsPdf />
        <h2>Resume</h2>
      </div>
    </div>
  )
}

export default Resume
