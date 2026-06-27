import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

// Images
import logo from "../../assets/logos/ns-logo.png";
import cloud from "../../assets/images/cloud.png";
import sakura from "../../assets/images/sakura.png";
import proAvatar from "../../assets/images/professional-avatar.png";
import personalAvatar from "../../assets/images/personal-avatar.png";

function Landing() {
  const navigate = useNavigate();
  return (
    <motion.section
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >


      {/* Logo */}

      <motion.img
        src={logo}
        alt="NS Logo"
        className="landing-logo"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Name */}

      <motion.h1
        className="landing-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        NANDINI SINGH
      </motion.h1>

      {/* Subtitle */}

      <motion.h2
        className="landing-subtitle"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Full Stack Developer • UI Developer
      </motion.h2>

      {/* Description */}

      <motion.p
        className="landing-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        Every journey tells a different story.
        <br />
        Choose how you'd like to know me.
      </motion.p>

      {/* Avatar + Buttons */}

      <div className="journey-container">

        {/* Professional */}

        <div className="journey-card">

          <motion.img
            src={proAvatar}
            alt="Professional Avatar"
            className="avatar"
            initial={{
              opacity: 0,
              y: 120,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 1,
              type: "spring",
            }}
          />

         <motion.button
  className="professional-btn"
  onClick={() => navigate("/professional")}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
  whileTap={{
    scale: 0.96,
  }}
>
  Professional Journey
</motion.button>

        </div>

        {/* Personal */}

        <div className="journey-card">

          <motion.img
            src={personalAvatar}
            alt="Personal Avatar"
            className="avatar"
            initial={{
              opacity: 0,
              y: 120,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.3,
              duration: 1,
              type: "spring",
            }}
          />

          <motion.button
  className="personal-btn"
  onClick={() => navigate("/personal")}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
  whileTap={{
    scale: 0.96,
  }}
>
  Personal Journey
</motion.button>

        </div>

      </div>

    </motion.section>
  );
}

export default Landing;