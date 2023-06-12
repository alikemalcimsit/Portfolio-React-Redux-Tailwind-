import React from 'react'

export default function LocationCard({backgroundImage}) {
  return (
    <div
                  className="w-full h-72 object-cover rounded-[45px]"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                  }}
                >
                </div>
  )
}
