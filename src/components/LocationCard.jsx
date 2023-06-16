import React from 'react'
import { motion } from "framer-motion"
import map from "../assets/map.png"
export default function LocationCard({backgroundImage}) {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
                  className="w-full h-72 bg-cover bg-center  rounded-[45px]"
                  style={{
                    backgroundImage: `url(${map})`,
                  }}
                >
                </motion.div>
  )
}
