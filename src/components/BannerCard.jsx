import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export default function BannerCard({text,buttonText}) {
  return (
    <div className="h-64 mb-4 pl-10 w-full pt-5 flex justify-center relative items-center bg-[#1D1B1E] rounded-[45px]">
    <h1 className="text-6xl w-full font-semibold tracking-wider leading-[1.15] mb-10 text-white">
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
      <button className="font-medium bg-[#8226FD] text-xl px-5 py-4 rounded-full absolute left-3/4 top-2/3 z-50 text-white">
       
        {buttonText}
      </button>
    </div>
  </div>
  )
}
