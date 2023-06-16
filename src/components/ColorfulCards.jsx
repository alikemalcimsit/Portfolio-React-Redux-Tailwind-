import React from 'react'
import { motion } from "framer-motion"

export default function ColorfulCards({backgroundColor,headText,text}) {
  return (

        <motion.div 
        
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        style={{backgroundColor:`${backgroundColor}`}} className={`w-1/3 h-32 md:h-[209px] mx-1 text-white rounded-2xl md:rounded-[45px]  flex justify-center items-center`}>
              <div className="text-center ">
                <h2 className="text-3xl md:text-5xl font-bold lg:mb-4">{headText}</h2>
                <h3 className=" md:text-xl">{text}</h3>
              </div>
            </motion.div>
   
  )
}
