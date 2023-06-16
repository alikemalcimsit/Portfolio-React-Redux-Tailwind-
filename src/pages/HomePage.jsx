import React from 'react'
import BannerCard from '../components/BannerCard'
import ColorfulCards from '../components/ColorfulCards'
import SkillsCard from '../components/SkillsCard'
import PortfolioCard from '../components/PortfolioCard'
import UsernameCard from '../components/UsernameCard'
import ProfileCard from '../components/ProfileCard'
import NameCard from '../components/NameCard'
import LocationCard from '../components/LocationCard'
import SocialCard from '../components/SocialCard'
import AboutCard from '../components/AboutCard'
import vscode from "../assets/vscode.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import git from "../assets/git.png";
import flutter from "../assets/flutter.png";
import firebase from "../assets/firebase.png";
import figma from "../assets/figma.png";
import css from "../assets/css.png";

import Spline from '@splinetool/react-spline';
import useWindowSize from '../hooks/useWindowSize'




export default function HomePage() {
    const skills=[react,flutter,html,css,firebase,javascript,figma]
  

  const size = useWindowSize()
  console.log(size)
    
    return (
      <div>

{size.width >960 ? <div className=" flex  px-5 py-5 items-center justify-center ">
   
   <div className=" w-[55%]">
     {/* sol taraf */}
   
<BannerCard text={"I’m Flutter and Web Developer. I’m UI Designer."} buttonText={"Hire me 👋"}></BannerCard>
     <div className="flex space-x-6 text-center w-full">


     <ColorfulCards backgroundColor={"#00C399"} headText={"2+"} text={"years experience"}></ColorfulCards>
     <ColorfulCards backgroundColor={"#FFC13C"} headText={"54+"} text={"years experience"}></ColorfulCards>
     <ColorfulCards backgroundColor={"#FF6D7A"} headText={"5+"} text={"years experience"}></ColorfulCards>
     </div>
   
   <SkillsCard skills={skills}></SkillsCard>
    <PortfolioCard></PortfolioCard>
   </div>
   <div className="w-[45%] items-center justify-center">
     {/* sağ taraf */}
     <div className="w-full  pl-3 ">
      <UsernameCard username={"alikemalcmst"}></UsernameCard>
       <div className="flex mt-4">
        <ProfileCard image={"https://picsum.photos/1800"}></ProfileCard>
         <div className="w-1/2 ml-2 mt-4">
          <NameCard name={"Ali Kemal"} surname={"Cimşit"}></NameCard>
        <LocationCard backgroundImage={"https://picsum.photos/900"}></LocationCard>
           <SocialCard></SocialCard>
           
         </div>
         
       </div>
     </div>
    <AboutCard></AboutCard>
   </div>
 </div>:<div className='w-full px-2 py-5'>
 <UsernameCard username={"alikemalcmst"}></UsernameCard>
 
 
  <BannerCard  buttonText={"Hire me 👋"}></BannerCard>
 <div className='flex items-center gap-x-2 mb-2 '>
 <ProfileCard image={"https://picsum.photos/1800"}></ProfileCard>
<SocialCard></SocialCard>
 </div>

 <div className='flex '>
 <ColorfulCards backgroundColor={"#00C399"} headText={"2+"} text={"years experience"}></ColorfulCards>
     <ColorfulCards backgroundColor={"#FFC13C"} headText={"54+"} text={"years experience"}></ColorfulCards>
     <ColorfulCards backgroundColor={"#FF6D7A"} headText={"5+"} text={"years experience"}></ColorfulCards>
 </div>
 <AboutCard></AboutCard>
 <SkillsCard skills={size.width<=768 ? skills.slice(0,5) : skills.slice(0,7)}></SkillsCard>
  <PortfolioCard></PortfolioCard>
  
  </div>}
      </div>
    
  )
}
