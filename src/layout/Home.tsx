import React from "react"
import blob from "../assets/blob.svg"
import heroImg from "../assets/images/artboard4.png"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="Home">
      <section className="Hero">
        <div className="hero-layout">
          <div className="title">
            <div className="header-wrapper">
              <h1>
                <span className="first-name">Chirstian</span>{" "}
                <span className="first-last-name">Alvites</span>{" "}
                <span className="second-last-name">Sandoval</span>
              </h1>
            </div>
          </div>
          <div className="design">
            <img src={heroImg} alt="heroImg" />
          </div>
          {/* <div className="blob-wrapper">
            <img src={blob} alt="Blob svg" />
          </div> */}
        </div>
      </section>

      <div className="container home-content">
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
