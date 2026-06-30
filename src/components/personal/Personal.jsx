import Navigation from "./Navigation";

import Hero from "./Hero";

import Story from "./sections/Story";

import Timeline from "./sections/Timeline";

import Interests from "./sections/Interests";

import Favorites from "./sections/Favorites";

import Creative from "./sections/Creative";


import BucketList from "./sections/BucketList";

import FunFacts from "./sections/FunFacts";

import Quote from "./sections/Quote";

import Contact from "./sections/Contact";

import ThankYou from "./sections/ThankYou";

import "./Personal.css";

function Personal() {
  return (
    <div className="personal-page">

      <Navigation />

      <Hero />

      <Story />

      <Timeline />

      <Interests />

      <Favorites />

      <Creative />


      <BucketList />

      <FunFacts />

      <Quote />

      <Contact />

      <ThankYou />

    </div>
  );
}

export default Personal;