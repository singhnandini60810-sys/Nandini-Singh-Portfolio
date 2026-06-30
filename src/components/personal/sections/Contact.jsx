import { motion } from "framer-motion";

function Contact() {

  return (

    <section id="contact">

      <h2 className="personal-heading">
        Let's Stay Connected
      </h2>

      <p className="personal-subtitle">
        Thanks for stopping by. Feel free to connect with me anywhere.
      </p>

      <motion.div

        className="contact-grid"

        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: .7,
        }}

      >

        <a
          href="mailto:singhnandini60810@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">📧</div>

          <h3>Email</h3>

        

        </a>

        <a
          href="https://www.linkedin.com/in/nandiniisingh1008/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">💼</div>

          <h3>LinkedIn</h3>


        </a>

        <a
          href="https://github.com/singhnandini60810-sys"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">💻</div>

          <h3>GitHub</h3>


        </a>

        <a
          href="https://www.instagram.com/whoiz_nandu?igsh=MWUyOThzZ3JsYzZvNw=="
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">🌸</div>

          <h3>Instagram</h3>

        </a>

      </motion.div>

    </section>

  );

}

export default Contact;