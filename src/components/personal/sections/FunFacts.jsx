import { motion } from "framer-motion";

const funFacts = [

  {
    emoji: "☕",
    title: "Coffee Lover",
    description:
      "A cup of coffee makes coding sessions much more enjoyable.",
  },

  {
    emoji: "🌙",
    title: "Night Owl",
    description:
      "Most of my creative ideas come late at night.",
  },

  {
    emoji: "🎧",
    title: "Music + Coding",
    description:
      "Coding feels incomplete without a good playlist.",
  },

  {
    emoji: "💜",
    title: "Purple Lover",
    description:
      "Lavender and pastel shades are my favorite aesthetic.",
  },

  {
    emoji: "🌸",
    title: "Always Curious",
    description:
      "I love learning new technologies and discovering creative ideas.",
  },

  {
    emoji: "✨",
    title: "Dream Big",
    description:
      "I believe every small step today builds a bigger future tomorrow.",
  },

];

function FunFacts() {

  return (

    <section id="fun-facts">

      <h2 className="personal-heading">
        Fun Facts About Me
      </h2>

      <p className="personal-subtitle">
        A few random things that describe my personality.
      </p>

      <div className="funfacts-grid">

        {funFacts.map((fact, index) => (

          <motion.div

            key={index}

            className="funfact-card"

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
              delay: index * 0.1,
              duration: 0.6,
            }}

            whileHover={{
              scale: 1.04,
              rotate: 1,
            }}

          >

            <div className="funfact-icon">

              {fact.emoji}

            </div>

            <h3>{fact.title}</h3>

            <p>{fact.description}</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default FunFacts;