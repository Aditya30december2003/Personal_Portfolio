import React from 'react'
import  {useEffect, useState} from 'react'
import Aditya from '../assets/imgs/hero.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className='flex flex-col items-center'>
    <div id='home' className=' top-100 lg:grid lg:grid-cols-2 xl:flex xl:justify-between flex  mt-[8rem] max-w-[1080px] 2xl:max-w-[1400px] mx-auto scrollbar-thumb-orange'>
        <div className='left text-purple-700 w-full sm:text-center' data-aos="fade-up">
        <h1 className='font-bold text-[2.3rem] lg:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem] w-[85%] mx-auto text-center lg:text-left'>Hello 👋 ,<br /> I am Aditya, <br /> Web and Software Developer</h1>
        <p className='about mt-6 font-bold text-purple-500/60 text-[1.5rem] 2xl:text-[2rem] w-[85%] text-center mx-auto lg:text-left'>
        <TypeAnimation
            sequence={[
              10,
              'Welcome to my personal portfolio!',
              10,                   // No pause
              'Weaving the webs tapestry, one captivating website at a time, with a grand vision in mind.', // Second text (if any)
              0,                   // No pause
              // content.subheadingC, // Third text (if any)
              // 0,
              // content.subheadingD,
              // 0,
              // content.subheadingE,
            ]}
            wrapper="span"
            speed={10}
            className="text-6x1 font-bold"
            repeat={Infinity}
          />
        </p>
        </div>
        {/* image */}
        <div className='hidden md:block md:mx-auto lg:mt-[-1.5rem]'>
          <img className='2xl:h-[65vh] xl:h-[70vh]  md:object-cover w-[90%]' data-aos='fade-up' src={Aditya} alt="" />
        </div>
    </div>
    <a href="https://aditya30december2003.github.io/Link_Tree/" target="_blank" className='w-[74%] mx-auto flex items-center text-white bg-purple-500 px-7 py-3 mt-4 hover:bg-white hover:text-purple-500 border-purple-500 border-2 rounded-[0.5rem] 2xl:mt-[3rem]'>        
    <button className='mx-auto'>
    <p className='text-center mx-auto text-xl'>Link Tree</p>
   </button>
   </a>
   </div>
  )
}

export default Hero
