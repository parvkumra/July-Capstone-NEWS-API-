import React from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react"

function Display() {
    useGSAP(()=>{
      gsap.to('#he',{
        ease:'power1.inout',
        opacity:1,
        y:0,
        delay:1
      }) 
      gsap.fromTo('#het',{
       opacity:0,
       y:20,
      },{
        y:0,
        delay:2,
        opacity:1
      }) 
    })
  return (
    <div className='relative w-full h-2/6'>
      <video 
        style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
        src="src/assets/Hi.mp4" 
        autoPlay 
        loop 
        muted 
      />
      <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full'>
        <h1 id='he' className='opacity-0 text-6xl font-parv font-extrabold text-black'>CRISP</h1>
        <p id='het' style={{fontFamily:'Roboto'}} className='text-3xl font-bold text-black mt-6 pb-4'>FOR LATEST NEWS AND UPDATES . . .</p>
      </div>
    </div>
  );
}

export default Display;