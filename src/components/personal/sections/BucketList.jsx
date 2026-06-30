import { motion } from "framer-motion";

const bucketList = [

  {
    icon: "🇯🇵",
    title: "Visit Japan",
    status: "Dream",
  },

  {
    icon: "✈️",
    title: "Travel Around India",
    status: "Planning",
  },

  {
    icon: "💼",
    title: "Get My Dream Job",
    status: "In Progress",
  },

  {
    icon: "🌍",
    title: "Visit 10 Countries",
    status: "Future Goal",
  },

  {
    icon: "📚",
    title: "Keep Learning Every Year",
    status: "Forever",
  },

];

function BucketList() {

  return (

    <section id="bucket-list">

      <h2 className="personal-heading">
        My Bucket List
      </h2>

      <p className="personal-subtitle">
        Dreams I hope to turn into memories someday.
      </p>

      <div className="bucket-grid">

        {bucketList.map((item, index) => (

          <motion.div
            key={index}
            className="bucket-card"
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
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
          >

            <div className="bucket-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <span>{item.status}</span>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default BucketList;