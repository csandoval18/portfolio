import React, { useEffect, useRef } from "react"
import { IoLogoJavascript } from "react-icons/io"
import { RiJavascriptLine } from "react-icons/ri"
import { SiJavascript, SiTypescript } from "react-icons/si"

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
          <SiTypescript className="icon" />
          <RiJavascriptLine className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
