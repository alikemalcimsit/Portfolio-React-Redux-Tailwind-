import React from 'react'

export default function ColorfulCards({backgroundColor,headText,text}) {
  return (
    
        <div style={{backgroundColor:`${backgroundColor}`}} className={`w-1/3 h-[209px] text-white rounded-[45px]  flex justify-center items-center`}>
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">{headText}</h2>
                <h3 className="text-xl">{text}</h3>
              </div>
            </div>
   
  )
}
