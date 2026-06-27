import { motion } from "framer-motion";

function ThankYou() {
  return (
    <motion.div

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      style={{
        textAlign: "center",
        padding: "100px 20px"
      }}
    >

      <h1>Thank You</h1>

      <p>
        Thank you for taking the time to explore my professional journey.
        I appreciate your visit and look forward to connecting with you.
      </p>

    </motion.div>
  );
}

export default ThankYou;