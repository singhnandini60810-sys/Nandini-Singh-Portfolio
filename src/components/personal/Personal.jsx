import { motion } from "framer-motion";

function Personal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 80 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
        fontWeight: "700",
      }}
    >
      Personal Page
    </motion.div>
  );
}

export default Personal;