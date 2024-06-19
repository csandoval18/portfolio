import React, { useState } from "react"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="navbar container">
      <a href="/" className="logo">
        {/* <Image src="/logo-w.webp" alt="" width={100} height={60}></Image> */}
        Logo
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
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
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
