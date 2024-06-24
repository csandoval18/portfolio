import React, { useState } from "react"
import { FaPiedPiper } from "react-icons/fa"
import { Link } from "react-scroll"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="navbar container">
      <Link smooth={true} to="Hero" className="logo">
        <FaPiedPiper />
        CAS
      </Link>
      <div
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
        className={
          openMenu ? "navMenuWrapper" + " " + "open" : "navMenuWrapper"
        }
      >
        <ul className="navMenu">
          <li>
            <Link smooth={true} to="Skills" offset={-55}>
              Skills
            </Link>
          </li>
          <li>
            <Link smooth={true} to="Education" offset={-55}>
              Education
            </Link>
          </li>
          <li>
            <Link smooth={true} to="Experience" offset={-55}>
              Experience
            </Link>
          </li>
          <li>
            <Link smooth={true} to="Resume" offset={-55}>
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={openMenu ? "hamburgerBtn" + " " + "open" : "hamburgerBtn"}
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      >
        <div className="hamburger"></div>
      </div>
    </nav>
  )
}

export default Navbar
