import React from 'react'
import  {useEffect, useState} from 'react'
import hi from '../assets/imgs/hi.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div id='home' className=' top-0 lg:grid lg:grid-cols-2 flex flex-col gap-6 mt-[7rem] max-w-[1080px] mx-auto scrollbar-thumb-orange'>
        <div className='left text-purple-700 w-full  sm:text-center' data-aos="fade-up">
        <h1 className='font-bold text-[2.3rem] lg:text-[3.2rem] w-[85%] mx-auto text-center lg:text-left'>Hello 👋 ,<br /> I am Aditya, <br /> Front-end Web Developer</h1>
        <p className='about mt-6 font-bold text-purple-500/60 text-[1.1rem] w-[85%] text-center mx-auto lg:text-left'>Welcome to my personal portfolio!Weaving the web's tapestry, one captivating website at a time, with a grand vision in mind.</p>
        <a href="https://aditya30december2003.github.io/Link_Tree/" target="_blank">
        <button className='w-3/4 lg:ml-[8%] mx-auto flex items-center text-white bg-purple-500 px-7 py-3 mt-4 hover:bg-white hover:text-purple-500 border-purple-500 border-2 rounded-[0.5rem]'>
         <p className='text-center mx-auto'>Link-Tree</p>
        </button>
        </a>
        </div>
        <div className='right hidden md:block md:mx-auto lg:mt-[-1.5rem] '>
          <img className='lg:h-[90vh] md:object-cover' data-aos='fade-up' src={hi} alt="" />
        </div>
    </div>
  )
}

export default Hero
