import React, { useEffect, useRef } from "react"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { BiLogoPostgresql } from "react-icons/bi"
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa"
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCplusplus,
  SiJavascript,
  SiSass,
  SiTypescript,
} from "react-icons/si"

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const logoSliderRef = useRef<HTMLDivElement>(null)
  const logosSlideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (logosSlideRef.current && logoSliderRef.current) {
      const copy = logosSlideRef.current.cloneNode(true)
      logoSliderRef.current.appendChild(copy)
    }
  }, [])

  return (
    <div className="Carousel">
      <div className="logo-slider" ref={logoSliderRef}>
        <div className="logos-slide" ref={logosSlideRef}>
          <FaPython className="icon" />
          <SiCplusplus className="icon" />
          <AiOutlineConsoleSql className="icon" />
          <BiLogoPostgresql className="icon" />
          <SiAdobephotoshop className="icon" />
          <SiAdobeillustrator className="icon" />
          <FaNode className="icon" />
          <FaHtml5 className="icon" />
          <FaCss3Alt className="icon" />
          <SiSass className="icon" />
          <SiJavascript className="icon" />
          <SiTypescript className="icon" />
          <FaReact className="icon" />
          <FaAws className="icon" />
          <FaDocker className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
