import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import { motion } from "framer-motion"
export default function BannerCard({text,buttonText}) {
  return (
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="h-44 md:h-64 mb-2 md:mb-4 pl-5 md:pl-10 w-full pt-5 flex justify-center relative items-center bg-[#1D1B1E] rounded-2xl md:rounded-[45px]">
    <h1 className="md:text-5xl xl:text-6xl h-1/2   text-3xl w-full font-semibold tracking-wider leading-[1.15] mb-16 lg:mb-10 text-white">
    Hi there! , I'm
 
    <Typewriter
    
            words={[ " Mobile Developer.", " Web Developer."," UI Designer."]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
     
    </h1>
    <div>
      <button className="font-medium bg-[#8226FD] md:text-xl text-sm  md:px-5 px-2 py-2  md:py-4 rounded-full absolute xl:left-3/4 left-2/3 top-2/3 z-50 text-white">
       
      {buttonText}
      </button>
    </div>
  </motion.div>
  )
}
