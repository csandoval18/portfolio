import React, { useState } from "react"
import { GrContactInfo } from "react-icons/gr"
// import { GrContactInfo } from "react-icons/gr"

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  // let fadeInScreenHandler = (screen: any) => {
  //   if (screen.fadeInScreen !== props.id) return
  //   Animations.animations.fadeInScreen(props.id)
  // }

  // ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [banner, setBanner] = useState<string>("")
  const [bool, setBool] = useState<Boolean>(false)

  return (
    <section className="Contact">
      <div className="category-header">
        <GrContactInfo />

        <h2>Contact</h2>
      </div>
      <div className="main-container fade-in">
        {/* // id={props.id || ""}> */}
        {/* <ScreenHeading subHeading={"Send me a message"} title={"Contact Me"} /> */}
        <div className="central-form">
          <div className="row">
            <h2 className="title">
              {/* <TypeAnimation
              cursor={true}
              repeat={1}
              sequence={["Send your message here:", 2000]}
            /> */}
            </h2>
          </div>
          <div className="back-form">
            <div className="img-back">
              {/* <img src={contactMeBG} alt="unable to load" /> */}
            </div>
            <form
            // onSubmit={async (e) => {
            //   e.preventDefault()
            //   try {
            //     let data = {
            //       name,
            //       email,
            //       message,
            //     }
            //     setBool(true)
            //     const res = await axios.post(
            //       "http://localhost:5000/contact",
            //       data
            //     )
            //     if (
            //       name.length === 0 ||
            //       email.length === 0 ||
            //       message.length === 0
            //     ) {
            //       setBanner(res.data.msg)
            //       setBool(false)
            //     } else if (res.status === 200) {
            //       setBanner(res.data.msg)
            //       setBool(false)

            //       //reset inputs vars
            //       setName("")
            //       setEmail("")
            //       setMessage("")
            //     }
            //   } catch (error) {
            //     console.log("Error: " + error)
            //   }
            // }}
            >
              <p>{banner}</p>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="message">Message</label>
              <textarea
                // @ts-ignore
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="btn-wrapper">
                <button className="submit-btn" type="submit">
                  Send
                </button>
                {bool ? (
                  <b className="load">
                    {/* <img src={load} alt="unable to load" /> */}
                  </b>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
