import { motion } from "framer-motion";

const interests = [
  {
    emoji: "💻",
    title: "Coding",
    text: "I enjoy building websites, learning modern technologies and solving real-world problems through code.",
  },

  {
    emoji: "🎵",
    title: "Music",
    text: "Music helps me relax, stay focused and keeps me motivated while working or studying.",
  },

  {
    emoji: "🌸",
    title: "Anime",
    text: "I enjoy anime for its storytelling, creativity, emotions and beautiful animation styles.",
  },

  {
    emoji: "📷",
    title: "Photography",
    text: "I love capturing beautiful moments, nature and memorable experiences through photographs.",
  },

  {
    emoji: "✈️",
    title: "Travelling",
    text: "Exploring new places, cultures and food inspires me and broadens my perspective.",
  },

  {
    emoji: "☕",
    title: "Coffee & Late Night Ideas",
    text: "Some of my best ideas appear with a cup of coffee and a peaceful night.",
  },
];

function Interests() {
  return (
    <section id="interests">

      <h2 className="personal-heading">
        My Interests
      </h2>

      <p className="personal-subtitle">
        Things that make me happy beyond academics and coding.
      </p>

      <div className="interests-grid">

        {interests.map((item, index) => (

          <motion.div
            className="interest-card"
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .1,
              duration: .6,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <div className="interest-icon">
              {item.emoji}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Interests;