import { motion } from "framer-motion";
import "./Hero.css";

import logo from "../../assets/logos/ns-logo.png";
import avatar from "../../assets/images/professional-avatar.png";
import background from "../../assets/images/professional-bg.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay"></div>

      <motion.img
        src={logo}
        alt="Logo"
        className="hero-logo"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="hero-content">

        {/* Avatar */}

        <motion.div
          className="hero-left"
          initial={{
            x: -120,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >

          <motion.img
            src={avatar}
            alt="Professional Avatar"
            className="hero-avatar"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

        </motion.div>

        {/* Text */}

        <motion.div
          className="hero-right"
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: .2,
          }}
        >

          <p className="hero-tag">
            PROFESSIONAL JOURNEY
          </p>

          <h1>
            Nandini Singh
          </h1>

          <h2>
           Aspiring Full Stack Developer | Data Analytics Enthusiast
          </h2>

          <p className="about">
            Passionate Full Stack Developer focused on building
            modern, responsive and user-friendly web applications.
            I enjoy transforming ideas into meaningful digital
            experiences through clean code and thoughtful design.
          </p>

          {/* CTA Buttons */}

          <div className="hero-buttons">

            <a
              href="#CV"
              className="hero-btn primary-btn"
            >
              View CV
            </a>

            <a
              href="#Contact"
              className="hero-btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}

          <div className="socials">

            <a
              href="https://github.com/singhnandini60810-sys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nandiniisingh1008/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/9OzP5CylMS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>

            <a href="mailto:singhnandini60810@gmail.com">
              <FaEnvelope />
            </a>

            <a href="tel:+917267906352">
              <FaPhoneAlt />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;