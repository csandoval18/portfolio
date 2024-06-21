import React, { useEffect, useRef } from "react"

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
      <div className="logo-slider" data-v-4ef8651c="" ref={logoSliderRef}>
        <div className="logos-slide" data-v-4ef8651c="" ref={logosSlideRef}>
          <img
            src="https://i.ibb.co/Vv5rkDK/api-partner-verzon.png"
            data-v-4ef8651c=""
          />
          <img
            src="https://i.ibb.co/J399KDg/api-partner-netflix.png"
            data-v-4ef8651c=""
          />
          <img
            src="https://i.ibb.co/TKT0F5L/api-partner-yelp.png"
            data-v-4ef8651c=""
          />
          <img
            src="https://i.ibb.co/HG6KR89/api-partner-adobe.png"
            data-v-4ef8651c=""
          />
          <img
            src="https://i.ibb.co/hMSJ1sg/api-partner-ring.png"
            data-v-4ef8651c=""
          />
          <img
            src="https://i.ibb.co/4RWQcMS/api-partner-nespresso.png"
            data-v-4ef8651c=""
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel
