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
          <img
            src={avatar}
            alt="Professional Avatar"
            className="hero-avatar"
          />
        </motion.div>

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
            Full Stack Developer
          </h2>

          <p className="about">
            Passionate developer focused on creating
            scalable web applications, modern user
            interfaces and meaningful digital
            experiences with clean design and
            efficient code.
          </p>

          <div className="socials">

            <a href="https://github.com/singhnandini60810-sys">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/nandiniisingh1008/">
              <FaLinkedin />
            </a>

            <a href="https://leetcode.com/u/9OzP5CylMS/">
              <SiLeetcode />
            </a>

            <a href="singhnandini60810@gmail.com">
              <FaEnvelope />
            </a>

            <a href="tel:7267906352">
              <FaPhoneAlt />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;