import SectionCard from "../../common/SectionCard";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function ThankYou() {

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <section id="Thank-You">

      <SectionCard title="Thank You">

        <div className="thankyou">

          <h2>Thank You For Visiting My Portfolio!</h2>

          <p className="thank-text">

            I sincerely appreciate your time and interest in exploring my work.
            I am always open to learning, collaborating, and contributing to
            exciting opportunities. Feel free to connect with me anytime.

          </p>

          <div className="thank-social">

            <a
              href="mailto:singhnandini60810@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/singhnandini60810-sys"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nandiniisingh1008/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>

          <button
            className="top-btn"
            onClick={scrollToTop}
          >

            <FaArrowUp />

            Back To Top

          </button>

          <div className="footer-line"></div>

          <p className="copyright">

            Designed & Developed with{" "}

            <FaHeart
              style={{
                color: "#ef4444",
                margin: "0 5px",
              }}
            />

            by <strong>Nandini Singh</strong>

          </p>

          <p className="copyright">

            © 2026 All Rights Reserved.

          </p>

        </div>

      </SectionCard>

    </section>

  );

}

export default ThankYou;