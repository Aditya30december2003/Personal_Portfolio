import React from 'react'
import  {useEffect, useState} from 'react'
import {GrSettingsOption} from 'react-icons/gr'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BiLogoCss3 ,BiLogoTailwindCss , BiLogoReact , BiLogoSass} from 'react-icons/bi'
import {DiJavascript} from 'react-icons/di'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]) 

  return (
    <div id='skills' className='mt-[5rem] max-w-[1080px] mx-auto' >

      <div className='heading mx-auto  text-center'>
      <div><GrSettingsOption size={40}  className='mx-auto mt-4 text-purple-500/100' /></div>
      <h1 className='font-bold text-[2rem] w-full mx-auto mt-4 text-purple-500'>Skills & Technologies</h1>
      </div>

      <div className='content' data-aos="fade-up flex flex-row items-center"> 
      <h1></h1>
      <ul className='grid grid-cols-2 md:grid-cols-4 gap-10 p-12'>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.sanity.io/images/341tt5ml/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Html</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.sanity.io/images/341tt5ml/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Css</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.sanity.io/images/341tt5ml/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Javascript</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.sanity.io/images/341tt5ml/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>React</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://raw.githubusercontent.com/github/explore/b943d5d671b2c6bc956d601746139b1d724658bd/topics/appwrite/appwrite.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Appwrite</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.icon-icons.com/icons2/2148/PNG/512/tailwind_icon_131947.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>TailwindCss</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.sanity.io/images/341tt5ml/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Git</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-4 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>C++</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-6 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Nextjs</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-6 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png?f=webp" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>MongoDB</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-6 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsiSqrfaDRgfPMfLrWAQGiVxSlwmB_XQnLxg&s" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Prisma</p>
        </li>

        <li className='cursor-pointer '>
          <img className='mt-2 mx-auto w-28 bg-purple-100 p-6 rounded-[100%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] duration-700 hover:scale-110' src="https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion.webp" alt="" />
          <p className='text-center mt-2 font-bold text-purple-500 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-99'>Framer</p>
        </li>
       
      </ul>
      </div>
    </div>
  )
}

export default Skills
