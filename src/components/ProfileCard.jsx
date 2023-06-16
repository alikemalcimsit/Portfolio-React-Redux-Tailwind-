import React from 'react'
import pp from "../assets/pp.jpg"
export default function ProfileCard({image}) {
  return (
    <>
         <img
                className="w-1/2 rounded-2xl md:rounded-[45px] object-cover h-[190px]  md:h-[495px]"
                alt=""
                src={pp}
              ></img>
    </>
  )
}
