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
  SiRedis,
  SiSass,
  SiTypescript,
} from "react-icons/si"
import LazyIcon from "./LazyIcon"

interface CarouselProps {}


const Carousel: React.FC<CarouselProps> = () => {
  const icons = <>
    <LazyIcon><FaPython className="icon" /></LazyIcon>
    <LazyIcon><SiCplusplus className="icon" /></LazyIcon>
    <LazyIcon><BiLogoPostgresql className="icon" /></LazyIcon>
    <LazyIcon><SiRedis className="icon" /></LazyIcon>
    <LazyIcon><FaNode className="icon" /></LazyIcon>
    <LazyIcon><FaHtml5 className="icon" /></LazyIcon>
    <LazyIcon><SiSass className="icon" /></LazyIcon>
    <LazyIcon><SiJavascript className="icon" /></LazyIcon>
    <LazyIcon><FaReact className="icon" /></LazyIcon>
    <LazyIcon><FaAws className="icon" /></LazyIcon>
    <LazyIcon><FaDocker className="icon" /></LazyIcon>
    </>

  return (
    <div className="Carousel">
      <div className="logo-slider" 
      >
        <div className="logos-slide"
        >
        {icons}
        </div>
        <div className="logos-slide"
        >
        {icons}
        </div>
      </div>
    </div>
  )
}

export default Carousel
