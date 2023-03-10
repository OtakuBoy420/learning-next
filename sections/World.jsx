"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={`${styles.innerWidth} flex flex-col`}>
      <TypingText title="| People around the world" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div viewport={{ once: true }} variants={fadeIn("up", "tween", 0.3, 1)} className="relative mt-[68px] flex w-full">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-8 h-8 sm:w-16 sm:h-16 p-1 md:p-2 rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="Avatar" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-8 h-8 sm:w-16 sm:h-16 p-1 md:p-2 rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="Avatar" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-8 h-8 sm:w-16 sm:h-16 p-1 md:p-2 rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="Avatar" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
