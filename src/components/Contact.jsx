import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import {AiOutlinePhone} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import  {useEffect, useState} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div id='contact' className='mt-5   max-w-[1080px] mx-auto'>
      <div className='text-center'>
      <p className='font-bold text-purple-500'>Contact Me</p>
      <h1 className='text-white font-bold text-[2.5rem] w-full mx-auto'>Get in Touch</h1>
      </div>
      <div className="content grid grid-cols-1 lg:grid-cols-2">
      <form action="https://formsubmit.co/el/kolupu" method="POST">
        <div className="left mt-4 flex flex-col gap-3" data-aos='fade-up'>
      
        <div className='flex flex-col justify-between py-3 gap-3'>
        <input type="text" placeholder='Name' className='px-2 py-3 w-3/4 mx-auto outline-none border-2  rounded-[0.5rem] border-purple-300/40' />
        <input type="text" placeholder='Email' className='px-2 py-3 w-3/4 mx-auto outline-none  border-2 rounded-[0.5rem] border-purple-300/40' />
        </div>

        <input type="text" placeholder='Subject' className='px-2 py-3 w-3/4 mx-auto  outline-none border-2 rounded-[0.5rem] border-purple-300/40' />

        <textarea placeholder='text' className='p-2 w-3/4 mx-auto h-48 outline-none border-2 rounded-[0.5rem] border-purple-300/40' />

        <button className='flex items-center bg-purple-500 w-3/12 mx-auto px-9 py-3 rounded-[2rem] mb-2 justify-around'>
         <FaPaperPlane color='white'/>
        <p className='text-white'>Send</p>  
        </button>
        
        </div>

        </form>


        <div className="right bg-purple-300 mt-4 p-3 rounded-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" data-aos='fade-down'>
         <ul className='py-4 text-white flex flex-col gap-20 mx-2 md:mx-10 '>

          <li className='flex flex-col gap-2 lg:flex-row items-center lg:space-x-20 w-full '>
           <FaLocationDot size={70} color='white' className='bg-purple-500 p-3 rounded-[100%] text-white'/>
           <div className='mx-auto'>
           <p className='w-full  text-xl font-bold text-white text-center lg:text-left '>Location:</p>
           <p className='font-bold  md:w-full text-[0.8rem] md:text-sm text-center md:text-left'>Manipal University Jaipur, Hostel , Dahmi Kalan , Jaipur</p>
           </div>
          </li>

          <li className='flex flex-col gap-2 lg:flex-row items-center lg:space-x-20 w-full '>
           <AiOutlinePhone size={70} color='white' className='bg-purple-500 p-3 rounded-[100%] text-white'/>
           <div className='mx-auto'>
           <p className='w-full  text-xl font-bold text-white text-center lg:text-left '>Phone:</p>
           <p className='font-bold  md:w-full text-[0.8rem] md:text-sm text-center md:text-left'>(+91) 9414848662</p>
           </div>
          </li>

          <a href="mailto:adityasmjain@gmail.com" target="_blank">
          <li className='flex flex-col gap-2 lg:flex-row items-center lg:space-x-20 w-full '>
           <BiLogoGmail size={70} color='white' className='bg-purple-500 p-3 rounded-[100%] text-white'/>
           <div className='mx-auto'>
           <p className='w-full  text-xl font-bold text-white text-center lg:text-left '>Email:</p>
           <p className='font-bold  md:w-full text-[0.8rem] md:text-sm text-center md:text-left'>adityasmjain@gmail.com</p>
           </div>
          </li>
          </a>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
