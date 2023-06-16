import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion"
export default function PortfolioCard() {
  return (
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="bg-[#1D1B1E] rounded-2xl lg:rounded-[45px] px-5 lg:px-8  py-4 h-48 md:h-80 w-full  lg:w-[110%]">
            <div className="flex items-center justify-between md:mb-4 mb-1 lg:mb-3">
              <h6 className="text-white md:text-2xl text-lg font-bold">Portfolio</h6>
              <p className="text-[#838383] text-sm md:text-base">See All</p>
            </div>
            <div className="flex items-center gap-x-2 justify-between md:mt-2 text-center">
             <ProjectCard url={"https://picsum.photos/1200"} text={"Hello World"}></ProjectCard>
             <ProjectCard url={"https://picsum.photos/1000"} text={"Hello World"}></ProjectCard>
             <ProjectCard url={"https://picsum.photos/1100"} text={"Hello World"}></ProjectCard>

            </div>
          </motion.div>
  )
}
