import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { BiCopyright } from "react-icons/bi"
import { FaPiedPiper } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="Footer container" id="Footer">
      <div className="top-footer">
        <a href="/" className="logo">
          <FaPiedPiper />
          CAS
        </a>

        <div className="block">
          <h5>Contact</h5>
          <p>
            <b>Phone: </b>
            <a href="tel:6082095268">(608)209-5268</a>
          </p>
          <p>
            <b>Email: </b>
            <a href="mailto:christian_alvites@outlook.com">
              christian_alvites@outlook.com
            </a>
          </p>
        </div>
        <div className="block">
          <h5>Follow Me</h5>
          <div className="social-icons">
            <a href="/">
              <AiFillGithub />
            </a>
            <a href="#">
              <GrInstagram />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">
        <BiCopyright /> Author: Christian Alvites Sandoval. MIT Liscense. Date
        Released: 6/21/2024
      </p>
    </footer>
  )
}

export default Footer
