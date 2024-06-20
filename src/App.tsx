import Footer from "./layout/Footer"
import Home from "./layout/Home"
import Nav from "./layout/Nav"

function App() {
  return (
    <main>
      <div className="grain-texture">
        <Nav />
        <Home />
        <Footer />
      </div>
      <svg width="0" height="0">
        <defs>
          <filter id="grain-texture">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.5"
              result="turbulence"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.3 0"
              result="reducedTurbulence"
            />
            <feComposite
              in="reducedTurbulence"
              in2="SourceGraphic"
              operator="in"
              result="composite"
            />
            <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
          </filter>
        </defs>
      </svg>
    </main>
  )
}

export default App
