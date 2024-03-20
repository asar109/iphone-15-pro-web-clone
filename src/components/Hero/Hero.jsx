import React, { useState } from "react";
import { motion } from "framer-motion";
import { smallHeroVideo, heroVideo } from "../../utils";
const Hero = () => {
  // const [videoSource, setVideoSource] = useState(
  //   window.innerWidth < 768 ? smallHeroVideo : heroVideo
  // );
  return (
    <section className="w-full flex justify-center nav-height  flex-col">
      <div>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="hero-title"
        >
          iphone 15 Pro
        </motion.p>
      </div>
      <div className="hidden sm:block  md:w-10/12 w-9/12 mx-auto">
        <video
          className="pointer-events-none"
          autoPlay
          muted
          key={heroVideo}
          playsInline={true}
        >
          <source type="video/mp4" src={heroVideo} />
        </video>
      </div>
      <div className="block sm:hidden  md:w-10/12 w-9/12 mx-auto">
        <video autoPlay muted key={smallHeroVideo} playsInline={true}>
          <source type="video/mp4" src={smallHeroVideo} />
        </video>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="flex justify-center items-center flex-col w-full "
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p>From $999 or $41.62/mo. for 24 mo.<sup><a href="/">1</a></sup></p>
      </motion.div>
    </section>
  );
};

export default Hero;
