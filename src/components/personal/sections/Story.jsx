import { motion } from "framer-motion";

function Story() {

  return (

    <section id="story">

      <h2 className="personal-heading">
        My Story
      </h2>

      <p className="personal-subtitle">
        The person behind the code.
      </p>

      <motion.div
        className="personal-card"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
      >

        <p>

          Hi! I'm <strong>Nandini Singh</strong>, a Computer Science student who
          enjoys building beautiful web experiences and continuously learning new
          technologies.

        </p>

        <br />

        <p>

          Outside coding, I enjoy discovering creative ideas, watching anime,
          listening to music, capturing memorable moments, exploring new places,
          and spending time with people who inspire me.

        </p>

        <br />

        <p>

          I believe growth comes from curiosity. Every project, every challenge,
          and every experience teaches me something valuable and shapes the
          person I'm becoming.

        </p>

        <br />

        <p>

          This page isn't about achievements or grades—it's about my journey,
          my interests, my dreams, and the little things that make me who I am.

        </p>

      </motion.div>

    </section>

  );

}

export default Story;