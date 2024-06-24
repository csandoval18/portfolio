import React from "react"
import { CgToolbox } from "react-icons/cg"

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <section className="Experience">
      <div className="category-header">
        <CgToolbox />
        <h2>Experience</h2>
      </div>
      <div className="experience-content container">
        <h4>Front End Developer | Foremost Media:</h4>
        <span>Sep 2022 – June 2023</span>
        <ul>
          <li>
            Implemented client web user interfaces with attention to detail from
            website design templates.
          </li>
          <li>
            Updated and maintained client website assets, content, plugins,
            extensions, and libraries through CMS software such as NopCommerce,
            DNN, Wordpress, etc.
          </li>{" "}
          <li>
            Performed SEO maintenance on client websites, improving and
            generating structured data for website content. Modernized
            environment and UI of legacy and outdated client websites.
          </li>{" "}
          <li>
            Implemented dynamic web applications based on client requirements.
          </li>
        </ul>
        <h4> Student Developer | University of Wisconsin - Whitewater</h4>
        <span>Apr 2021 – May 2022</span> Developed and maintained web
        applications using Laravel, HTML, jQuery, and MySQL. The applications
        were for use of residence hall front desk workers, students, and staff.
        Developed and maintained University domain pages for the housing
        department using Ingeniux CMS. Troubleshoot problems and aiding students
        with personal account issues in the campus system.
      </div>
    </section>
  )
}

export default Experience
