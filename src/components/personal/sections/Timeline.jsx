import { motion } from "framer-motion";

function Timeline() {

  const timeline = [

    {
      year: "2006",
      title: "The Beginning 🌸",
      text: "Started my journey with curiosity and dreams.",
    },

    {
      year: "2023",
      title: "B.Tech Started 🎓",
      text: "Entered the world of Computer Science and Engineering.",
    },

    {
      year: "2026",
      title: "First Web Projects 💻",
      text: "Discovered my interest in frontend development and UI design.",
    },


    {
      year: "Future",
      title: "Dream Career ✨",
      text: "Aiming to become a Software Engineer while continuously learning and creating meaningful products.",
    },

  ];

  return (

    <section id="timeline">

      <h2 className="personal-heading">
        My Journey
      </h2>

      <p className="personal-subtitle">
        Every year taught me something new.
      </p>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div

            key={index}

            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}

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
              duration: .7,
            }}

          >

            <div className="timeline-card">

              <h3>{item.year}</h3>

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Timeline;