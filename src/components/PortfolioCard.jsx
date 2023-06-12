import React from 'react'
import ProjectCard from './ProjectCard'

export default function PortfolioCard() {
  return (
    <div className="bg-[#1D1B1E] rounded-[45px] px-8 py-4 h-80 w-[900px]">
            <div className="flex items-center justify-between mb-3">
              <h6 className="text-white text-2xl font-bold">Portfolio</h6>
              <p className="text-[#838383] text-base">See All</p>
            </div>
            <div className="flex items-center justify-between mt-2 text-center">
             <ProjectCard url={"https://picsum.photos/1200"} text={"Hello World"}></ProjectCard>
             <ProjectCard url={"https://picsum.photos/1000"} text={"Hello World"}></ProjectCard>
             <ProjectCard url={"https://picsum.photos/1100"} text={"Hello World"}></ProjectCard>

            </div>
          </div>
  )
}
