import { motion } from "framer-motion";
import "./Hero.css";

import personalAvatar from "../../assets/images/personal-avatar.png";

function Hero() {
  return (
    <section className="personal-hero">

      <div className="hero-left">

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hi,
          <br />
          I'm Nandini 🌸
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
        >
          Welcome to my personal world.
          <br />
          Beyond coding, this is where you'll discover
          my hobbies, creativity, memories, dreams,
          favorite things and little moments that make me... me.
        </motion.p>

        <motion.a
          href="#timeline"
          className="hero-button"
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          Explore My Story
        </motion.a>

      </div>

      <motion.div
        className="hero-right"
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
      >

        <motion.img
          src={personalAvatar}
          alt="Personal Avatar"
          className="hero-avatar"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </motion.div>

      {/* Floating Decorations */}

      <motion.div
        className="bubble bubble1"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        🌸
      </motion.div>

      <motion.div
        className="bubble bubble2"
        animate={{
          y: [0, -35, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="bubble bubble3"
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="bubble bubble4"
        animate={{
          y: [0, -28, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
        }}
      >
        💜
      </motion.div>

    </section>
  );
}

export default Hero;