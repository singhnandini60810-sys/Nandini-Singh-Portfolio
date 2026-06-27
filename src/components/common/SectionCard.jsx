import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./SectionCard.css";
function SectionCard({ title, children }) {

  const [open, setOpen] = useState(false);

  return (

    <div className="section-card">

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
              duration: .45,
            }}
          >

            {children}

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

}

export default SectionCard;