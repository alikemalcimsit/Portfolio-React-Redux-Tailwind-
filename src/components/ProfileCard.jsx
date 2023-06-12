import React from 'react'

export default function ProfileCard({image}) {
  return (
    <>
         <img
                className="w-1/2 rounded-[45px] h-[480px]"
                alt=""
                src={image}
              ></img>
    </>
  )
}
