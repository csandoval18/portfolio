import React from "react"
import { GrContactInfo } from "react-icons/gr"

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section className="Contact">
      <div className="category-header">
        <GrContactInfo />

        <h2>Contact</h2>
      </div>
    </section>
  )
}

export default Contact
