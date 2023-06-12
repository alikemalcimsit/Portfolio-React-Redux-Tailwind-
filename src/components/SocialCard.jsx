import React from 'react'
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import SocialButton from './SocialButton';
export default function SocialCard() {
  return (
    <div className="flex bg-[#1D1B1E] items-center justify-between rounded-full py-3 mt-4 px-2 ">
  <SocialButton image={github}></SocialButton>
  <SocialButton image={mail}></SocialButton>
  <SocialButton image={linkedin}></SocialButton>
  <SocialButton image={instagram}></SocialButton>
  </div>
  )
}
