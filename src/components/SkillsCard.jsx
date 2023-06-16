import React from 'react'
import { motion } from "framer-motion"
export default function SkillsCard({skills}) {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    className="bg-[#1D1B1E] h-14 md:h-16 mt-2 lg:mt-4 w-full lg:mb-6 mb-2 flex items-center justify-center gap-x-9 lg:gap-x-[5%] xl:gap-x-[8%]  rounded-2xl  md:rounded-full">
            {skills.map((skill,index)=>(
                <img key={index} src={skill} alt="" className="h-8 md:h-12"></img>
            ))}
           
          </motion.div>
  )
}
