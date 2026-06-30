import { motion } from "framer-motion";

const favorites = [

  {
    emoji: "🌸",
    title: "Favorite Color",
    value: "Lavender • Brown",
  },

  {
    emoji: "🍕",
    title: "Favorite Food",
    value: "Indian • Ice cream",
  },

  {
    emoji: "☕",
    title: "Favorite Drink",
    value: "Cold Coffee",
  },

  {
    emoji: "🎵",
    title: "Favorite Music",
    value: "Bollywood • Instrumentals",
  },

  {
    emoji: "🎬",
    title: "Favorite Anime",
    value: "Your Name • Demon Slayer • Haikyuu",
  },

  {
    emoji: "🌍",
    title: "Dream Destination",
    value: "Japan 🇯🇵",
  },

];

function Favorites() {

  return (

    <section id="favorites">

      <h2 className="personal-heading">
        Favorite Things
      </h2>

      <p className="personal-subtitle">
        A few little things that make me smile.
      </p>

      <div className="favorites-grid">

        {favorites.map((item, index) => (

          <motion.div

            key={index}

            className="favorite-card"

            initial={{
              opacity: 0,
              scale: .9,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: index * .08,
            }}

            whileHover={{
              y: -10,
            }}

          >

            <div className="favorite-icon">

              {item.emoji}

            </div>

            <h3>{item.title}</h3>

            <p>{item.value}</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Favorites;