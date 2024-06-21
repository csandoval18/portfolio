import React from "react"
import { FaPiedPiper } from "react-icons/fa"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="Footer">
      <div className="tri-col">
        <div className="footer-block"></div>
        <div className="footer-block"></div>
        <div className="footer-block"></div>
      </div>
      <div className="logo">
        <a href="/" className="logo">
          <FaPiedPiper />
          CAS
        </a>
      </div>
    </footer>
  )
}

export default Footer
