import { motion } from "framer-motion";

const creativeWorks = [

  {
    title: "UI/UX Designs",
    icon: "🎨",
    description:
      "Modern user interface designs, responsive layouts and creative web concepts built during my learning journey.",
  },

  {
    title: "Graphic Designs",
    icon: "🖌️",
    description:
      "Posters, banners, social media creatives and digital artwork created using Canva and other design tools.",
  },

  {
    title: "Photography",
    icon: "📸",
    description:
      "Capturing beautiful moments, nature and everyday life through photographs that tell stories.",
  },

  {
    title: "Creative Ideas",
    icon: "💡",
    description:
      "Random concepts, project ideas, portfolio inspirations and experiments that fuel my creativity.",
  },

];

function Creative() {

  return (

    <section id="creative">

      <h2 className="personal-heading">
        Creative Corner
      </h2>

      <p className="personal-subtitle">
        A glimpse into the creative side of my personality.
      </p>

      <div className="creative-grid">

        {creativeWorks.map((item, index) => (

          <motion.div

            key={index}

            className="creative-card"

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
              delay: index * 0.15,
              duration: 0.6,
            }}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

          >

            <div className="creative-icon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Creative;