import React, { useState } from "react"
import { FaPiedPiper } from "react-icons/fa"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="navbar container">
      <a href="/" className="logo">
        {/* <Image src="/logo-w.webp" alt="" width={100} height={60}></Image> */}
        <FaPiedPiper />
        CAS
      </a>
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
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Education</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
