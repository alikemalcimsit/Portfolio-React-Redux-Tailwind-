import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
export default function UsernameCard({username}) {
  return (
     <div className=" bg-[#1D1B1E] text-start py-4 text-2xl rounded-full flex justify-between px-8 items-center text-[#8A888B]">
    <p>{username}</p>
    <RxHamburgerMenu></RxHamburgerMenu>
  </div>
  )
}
