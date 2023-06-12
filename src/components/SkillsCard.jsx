import React from 'react'

export default function SkillsCard({skills}) {
  return (
    <div className="bg-[#1D1B1E] h-16 mt-4 w-full mb-6 flex items-center justify-center gap-x-10 rounded-full">
            {skills.map((skill)=>(
                <img src={skill} alt="" className="h-12"></img>
            ))}
           
          </div>
  )
}
