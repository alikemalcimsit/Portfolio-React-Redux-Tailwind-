import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion"
export default function UsernameCard({username}) {
  return (
     <motion.div
     
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{
       duration: 0.8,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
     }}
     className=" bg-[#1D1B1E] mb-2 lg:mb-0 text-start py-4 text-2xl rounded-full flex justify-between px-8 items-center text-[#8A888B]">
    <p>{username}</p>
    <RxHamburgerMenu></RxHamburgerMenu>
  </motion.div>
  )
}
