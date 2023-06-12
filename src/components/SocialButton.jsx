import React from 'react'

export default function SocialButton({image}) {
  return (
    <div>
        <img src={image} className="h-16 object-cover cursor-pointer" alt=""></img>
    </div>
  )
}
