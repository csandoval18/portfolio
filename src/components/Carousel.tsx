import React, { useEffect, useRef } from "react"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaAws, FaDocker, FaNode, FaPython, FaReact } from "react-icons/fa"
import { SiCplusplus, SiJavascript, SiTypescript } from "react-icons/si"

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
          <SiJavascript className="icon" />
          <FaPython className="icon" />
          <FaReact className="icon" />
          <SiTypescript className="icon" />
          <SiCplusplus className="icon" />
          <AiOutlineConsoleSql className="icon" />
          <BiLogoPostgresql className="icon" />
          <FaAws className="icon" />
          <FaNode className="icon" />
          <FaDocker className="icon" />
          {/* <RiJavascriptLine className="icon" />
          <TbBrandTypescript className="icon" /> */}
        </div>
      </div>
    </div>
  )
}

export default Carousel
