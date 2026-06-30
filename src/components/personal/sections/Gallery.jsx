import { motion } from "framer-motion";

const gallery = [

  {
    image: "https://picsum.photos/500/500?1",
    title: "Beautiful Moments",
  },

  {
    image: "https://picsum.photos/500/500?2",
    title: "Travelling",
  },

  {
    image: "https://picsum.photos/500/500?3",
    title: "Photography",
  },

  {
    image: "https://picsum.photos/500/500?4",
    title: "Memories",
  },

  {
    image: "https://picsum.photos/500/500?5",
    title: "Nature",
  },

  {
    image: "https://picsum.photos/500/500?6",
    title: "Life",
  },

];

function Gallery(){

return(

<section id="gallery">

<h2 className="personal-heading">
Gallery
</h2>

<p className="personal-subtitle">
A collection of memories and beautiful moments.
</p>

<div className="gallery-grid">

{gallery.map((item,index)=>(

<motion.div

className="gallery-card"

key={index}

whileHover={{
scale:1.04
}}

>

<img
src={item.image}
alt={item.title}
/>

<div className="gallery-overlay">

<h3>{item.title}</h3>

</div>

</motion.div>

))}

</div>

</section>

);

}

export default Gallery;