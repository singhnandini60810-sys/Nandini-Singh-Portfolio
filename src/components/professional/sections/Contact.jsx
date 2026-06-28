import SectionCard from "../../common/SectionCard";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  return (

    <section id="Contact">

      <SectionCard title="Let's Connect">

        <div className="contact-grid">

          {/* Email */}

          <div className="contact-card">

            <FaEnvelope className="contact-icon" />

            <h3>Email</h3>

            <p>Feel free to reach out anytime.</p>

            <a
              href="mailto:singhnandini60810@gmail.com"
              className="view-btn"
            >
              Send Email
            </a>

          </div>

          {/* GitHub */}

          <div className="contact-card">

            <FaGithub className="contact-icon" />

            <h3>GitHub</h3>

            <p>Explore my projects and repositories.</p>

            <a
              href="https://github.com/singhnandini60810-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Visit GitHub
            </a>

          </div>

          {/* LinkedIn */}

          <div className="contact-card">

            <FaLinkedin className="contact-icon" />

            <h3>LinkedIn</h3>

            <p>Let's connect professionally.</p>

            <a
              href="https://www.linkedin.com/in/nandiniisingh1008/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              Connect Now
            </a>

          </div>

          {/* Phone */}

          <div className="contact-card">

            <FaPhoneAlt className="contact-icon" />

            <h3>Phone</h3>

            <p>Available for opportunities.</p>

            <a
              href="tel:+917267906352"
              className="view-btn"
            >
              +91 7267906352
            </a>

          </div>

          {/* Location */}

          <div className="contact-card">

            <FaMapMarkerAlt className="contact-icon" />

            <h3>Location</h3>

            <p>Currently based in</p>

            <button className="view-btn">
              Lucknow, Uttar Pradesh
            </button>

          </div>

        </div>

      </SectionCard>

    </section>

  );

}

export default Contact;