import React from 'react'

export default function ProjectCard({url, text}) {
  return (
    <div>
    <img
      alt=""
      src={url}
      className="h-52 mb-1 w-64 rounded-[45px] object-cover"
    ></img>
    <p className="text-xl text-white ">{text}</p>
  </div>
  )
}
