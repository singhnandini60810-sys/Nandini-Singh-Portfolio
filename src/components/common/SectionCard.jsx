import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";
import "./SectionCard.css";

function SectionCard({ title, children }) {

  const [open, setOpen] = useState(false);

  const { ref, inView } = useInView({

    triggerOnce: true,

    threshold: 0.15,

  });

  return (

    <motion.div

      ref={ref}

      className="section-card"

      initial={{
        opacity: 0,
        y: 70,
      }}

      animate={

        inView

          ? {
              opacity: 1,
              y: 0,
            }

          : {}

      }

      transition={{

        duration: .65,

        ease: "easeOut",

      }}

    >

      <button

        className={`section-header ${open ? "active" : ""}`}

        onClick={() => setOpen(!open)}

      >

        <span>{title}</span>

        <motion.div

          animate={{
            rotate: open ? 180 : 0,
          }}

          transition={{
            duration: .35,
          }}

        >

          <FaChevronDown />

        </motion.div>

      </button>

      <AnimatePresence>

        {open && (

          <motion.div

            className="section-content"

            initial={{
              opacity: 0,
              height: 0,
            }}

            animate={{
              opacity: 1,
              height: "auto",
            }}

            exit={{
              opacity: 0,
              height: 0,
            }}

            transition={{
              duration: .4,
            }}

          >

            {children}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>

  );

}

export default SectionCard;