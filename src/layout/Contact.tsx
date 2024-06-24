import { useState } from "react"
import ContactSVG from "../assets/contact.svg" // Make sure to have a contact.svg file in your project
import { IoIosSend } from "react-icons/io"
import { GrContactInfo } from "react-icons/gr"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section className="Contact" id="Contact">
      <div className="category-header">
        <GrContactInfo />
        <h2>Contact</h2>
      </div>
      <div className="main-container">
        <div className="central-form">
          <img className="svg-design" src={ContactSVG} />
          <h2>Contact</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="btn-wrapper">
              <button type="submit" className="submit-btn">
                Send
                <IoIosSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
