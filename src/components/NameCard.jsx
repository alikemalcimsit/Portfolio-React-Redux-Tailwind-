import React from 'react'

export default function NameCard({name, surname}) {
  return (
    <>
         <div className="bg-[#1D1B1E] flex items-center justify-center py-5 text-xl rounded-full text-center text-white font-semibold mb-4">
                  <p className="mr-1 text-[#8A888B]">{name}</p>
                  <p>{surname}</p>
                </div>
    </>
  )
}
