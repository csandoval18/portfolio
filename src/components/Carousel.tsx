interface CarouselProps {}
import cppIcon from '../assets/carousel-icons/cpp-icon.webp'
import dockerIcon from '../assets/carousel-icons/docker-icon.webp'
import golangIcon from '../assets/carousel-icons/golang-icon.webp'
import htmlIcon from '../assets/carousel-icons/html-icon.webp'
import jsIcon from '../assets/carousel-icons/js-icon.webp'
import tsIcon from '../assets/carousel-icons/ts-icon.webp'
import mongodbIcon from '../assets/carousel-icons/mongodb-icon.webp'
import postgresIcon from '../assets/carousel-icons/postgres-icon.webp'
import pythonIcon from '../assets/carousel-icons/python-icon.webp'
import reactIcon from '../assets/carousel-icons/react-icon.webp'
import redisIcon from '../assets/carousel-icons/redis-icon.webp'
import sassIcon from '../assets/carousel-icons/sass-icon.webp'
import LazyIcon from './LazyIcon'



const Carousel: React.FC<CarouselProps> = () => {
  const icons = <>
      <LazyIcon><img className="icon" src={cppIcon} alt="cpp-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={jsIcon} alt="js-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={tsIcon} alt="ts-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={pythonIcon} alt="python-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={golangIcon} alt="golang-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={reactIcon} alt="react-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={sassIcon} alt="sass-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={mongodbIcon} alt="mongodb-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={postgresIcon} alt="postgres-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={redisIcon} alt="redis-icon" /></LazyIcon>
      <LazyIcon><img className="icon" src={dockerIcon} alt="docker-icon" /></LazyIcon>
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
