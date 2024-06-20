import React from "react"
import blob from "../assets/blob.svg"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="Home">
      <section className="Hero">
        <div className="hero-layout">
          <div className="title">
            <h1>Chirstian Alvites Sandoval</h1>
          </div>
          <div className="design"></div>
          {/* <div className="blob-wrapper">
            <img src={blob} alt="Blob svg" />
          </div> */}
        </div>
      </section>

      <div className="container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          corporis molestias eligendi, nam quasi ullam, consectetur perspiciatis
          adipisci accusamus odit nesciunt architecto distinctio ad ipsam neque
          esse maiores pariatur repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          corporis molestias eligendi, nam quasi ullam, consectetur perspiciatis
          adipisci accusamus odit nesciunt architecto distinctio ad ipsam neque
          esse maiores pariatur repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          corporis molestias eligendi, nam quasi ullam, consectetur perspiciatis
          adipisci accusamus odit nesciunt architecto distinctio ad ipsam neque
          esse maiores pariatur repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          corporis molestias eligendi, nam quasi ullam, consectetur perspiciatis
          adipisci accusamus odit nesciunt architecto distinctio ad ipsam neque
          esse maiores pariatur repellat.
        </p>
      </div>
    </section>
  )
}

export default Home
