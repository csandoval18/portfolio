import { useEffect, useState } from "react"
import ContactSVG from "../assets/contact.svg" // Ensure this path is correct
import { IoIosSend } from "react-icons/io"
import { GrContactInfo } from "react-icons/gr"
import emailjs from "emailjs-com"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    // Function to initialize EmailJS after the component mounts
    const initializeEmailJS = () => {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Initialize EmailJS with the public key
      emailjs.init(publicKey)
    }

    // Call the initialization function
    initializeEmailJS()

    // Clean-up function if needed
    return () => {
      // Optionally clean up any resources
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      name: name,
      email: email,
      message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (res) => {
        console.log("SUCCESS!", res.status, res.text)
        setStatus("SUCCESS")
        setName("")
        setEmail("")
        setMessage("")
      },
      (err) => {
        console.log("FAILED...", err)
        setStatus("FAILED")
      }
    )
  }

  return (
    <section className="Contact" id="Contact">
      <div className="category-header">
        <GrContactInfo />
        <h2>Contact</h2>
      </div>
      <div className="main-container container">
        <div className="central-form">
          <img className="svg-design" src={ContactSVG} alt="Contact" />
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
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
            {status === "SUCCESS" && (
              <p className="success">Message sent successfully!</p>
            )}
            {status === "FAILED" && (
              <p className="error">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
