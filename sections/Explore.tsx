'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { TypingText, ExploreCard, TitleText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

function Explore() {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText textStyles="text-center" title={<>Choose the world you want <br className="md:block hidden"/> to explore</>} />

      </motion.div>
    </section>
  )
}

export default Explore