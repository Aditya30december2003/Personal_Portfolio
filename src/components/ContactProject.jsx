import React from 'react'
import {FaCode} from 'react-icons/fa'
import  {useEffect, useState} from 'react'


import Aos from 'aos'
import 'aos/dist/aos.css'

const ContactProject = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className='bg-purple-600 my-20 flex'>
    <div className='w-full max-w-[1080px] mx-auto px-20 py-10' data-aos='fade-up'>
      <h1 className='text-[2rem] font-bold pt-6 text-white text-center md:text-left'>Have a Project in Mind?</h1>
      <p className='text-white  w-full text-[1rem] py-4 font-bold text-center md:text-left'>I am passionate frontend web developer with a strong focus on creating visually appealing and highly functional websites. If you have a project in mind or need assistance with anything related to web development, you're in the right place.</p>
      <div className=' w-full text-center md:text-left flex gap-4'>
      <a href="mailto:adityasmjain@gmail.com" target="_blank">
      <button className='font-bold text-purple-600 bg-white my-7 rounded-[2rem] text-bold py-3 px-5'>Contact Me</button>
      </a>
      <a href="https://portfolioaditya-eight.vercel.app/" target="_blank">
      <button className='font-bold text-purple-600 bg-white my-7 rounded-[2rem] text-bold py-3 px-5'>Freelancing Portfolio</button>
      </a>
      <a href="https://www.fiverr.com/sellers/aditya30122003" target="_blank">
      <button className='font-bold text-purple-600 bg-white my-7 rounded-[2rem] text-bold py-3 px-5'>Contact me on Fiverr</button>
      </a>
      </div>
    </div>
    <div className='hidden md:block max-w-[520px] pr-52 py-20' data-aos='fade-down'>
     <FaCode size={150} color='white'  />
    </div>
    </div>
  )
}

export default ContactProject
