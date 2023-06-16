import React from 'react'

export default function ProjectCard({url, text}) {
  return (
    <div>
    <img
      alt=""
      src={url}
      className="h-28 md:h-52 mb-1 w-48 md:w-64 rounded-2xl md:rounded-[45px] object-cover"
    ></img>
    <p className=" md:text-xl text-sm text-white ">{text}</p>
  </div>
  )
}
