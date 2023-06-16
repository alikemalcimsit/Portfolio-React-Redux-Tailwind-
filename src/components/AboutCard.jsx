import React from 'react'
import { motion } from "framer-motion"
export default function AboutCard() {
  return (
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="bg-[#1D1B1E] rounded-2xl md:rounded-[45px]  lg:mt-5 w-full lg:w-[85%]  lg:ml-[15%]  h-48  md:h-80">
            
            <div className="flex items-center justify-between mt-2 p-5  text-center">
         
              <div className="items-center justify-between">
               <div className="flex items-center justify-between mb-1 md:mb-4">
                
               <h6 className="text-white font-bold text-start   text-lg md:text-2xl ">About</h6>
               <p className="text-[#838383] md:text-lg text-sm">resume</p>
               </div>
                <p className="md:text-xl lg:text-base text-sm xl:line-clamp-none  line-clamp-6 md:line-clamp-[9]  text-[#8A888B] text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, sem ac ornare tempus, magna lorem fermentum leo, at venenatis sem erat id neque. Suspendisse eleifend ex odio, sed porttitor nibh tempus et. Vivamus eget vehicula nibh, sed tristique risus. Nulla tempus lorem non porttitor gravida. Nunc ut iaculis odio. Fusce tempus interdum iaculis. Integer nisi massa, faucibus quis feugiat tincidunt, viverra aliquam nibh. Ut non metus et purus cursus consectetur...</p>
              </div>
             
            </div>
          </motion.div>
  )
}
