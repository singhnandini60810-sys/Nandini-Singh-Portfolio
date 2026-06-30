import { motion } from "framer-motion";

function Quote() {

  return (

    <section id="quote">

      <motion.div

        className="quote-card"

        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
        }}

      >

        <div className="quote-icon">
          ✨
        </div>

        <h2>
          हृदयम् जीवनम्
        </h2>

        <p>
          — My Personal Motto
        </p>

      </motion.div>

    </section>

  );

}

export default Quote;