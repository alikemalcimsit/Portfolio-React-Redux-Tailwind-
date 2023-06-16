import React from 'react'
import { motion } from "framer-motion"
export default function NameCard({name, surname}) {
  return (
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
         <div className="bg-[#1D1B1E] flex items-center justify-center  py-5 text-xl rounded-full text-center text-white font-semibold mb-2 md:mb-4">
                  <p className="mr-1 text-[#8A888B]">{name}</p>
                  <p>{surname}</p>
                </div>
    </motion.div>
  )
}
