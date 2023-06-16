import React from 'react'
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import SocialButton from './SocialButton';
import { motion } from "framer-motion"
export default function SocialCard() {
  return (
    <motion.div
    className="grid grid-cols-2 justify-items-center lg:flex h-[190px]   bg-[#1D1B1E] items-center rounded-2xl lg:rounded-full lg:h-[20%] w-full justify-center  md:h-[495px] lg:py-3 lg:mt-4 lg:px-2 "
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}> 
  <SocialButton image={github}></SocialButton>
  <SocialButton image={mail}></SocialButton>
  
  <SocialButton image={linkedin}></SocialButton>
  <SocialButton image={instagram}></SocialButton>
  </motion.div>
  )
}
