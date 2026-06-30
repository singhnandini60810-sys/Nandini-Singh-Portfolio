import { motion } from "framer-motion";

function ThankYou() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <section id="thank-you">

      <motion.div

        className="thankyou-card"

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
          duration: 0.8,
        }}

      >

        <div className="thankyou-icon">
          💜
        </div>

        <h2>
          Thank You for Visiting!
        </h2>

        <p>

          I truly appreciate you taking the time to explore my journey.

          <br /><br />

          Every project, every achievement and every experience has shaped who I am today.

          <br /><br />

          I hope you enjoyed getting to know both the professional and personal side of me.

        </p>

        <motion.button

          className="back-top-btn"

          whileHover={{
            scale: 1.05,
            y: -4,
          }}

          whileTap={{
            scale: 0.96,
          }}

          onClick={scrollToTop}

        >

          ↑ Back to Top

        </motion.button>

      </motion.div>

    </section>

  );

}

export default ThankYou;