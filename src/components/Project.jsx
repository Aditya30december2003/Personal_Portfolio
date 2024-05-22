import React from 'react'
import  {useEffect, useState} from 'react'
import {GrProjects} from 'react-icons/gr'
import travel from '/src/assets/imgs/travel.png'
import food from '/src/assets/imgs/food.png'
import batflix from '/src/assets/imgs/batflix.png'
import disney from '/src/assets/imgs/disney.png'
import LinkedIn from '/src/assets/imgs/LinkedIn-Clone.png'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Project = () => {

  const [view , setView] = useState(false)

  const ViewProjects = () =>{
    setView(!view)
  }
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]) 
  return (
    <div id='project' className='mt-[10rem]  max-w-[1080px] mx-auto'>

    <div className="header  mx-auto  text-center">
    <GrProjects size={40}  className='mx-auto mt-4 text-purple-500/100' />
    <h1 className='font-bold text-[2rem] w-full mx-auto mt-4 text-purple-500'>Portfolio Projects</h1>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-36 px-5 mt-8' data-aos="fade-up">

    <a href="https://linkedin-ten-blond.vercel.app/" target="_blank">
      <div className='relative duration-700 hover:scale-110 cursor-pointer'>
        <img className='object-cover rounded-t-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]' src={LinkedIn} alt="" />
        <div className='absolute rounded-t-[1rem] top-0 left-0 w-full h-full bg-blue-500/30 cursor-pointer'></div>
        <div className='absolute right-2 cursor-pointer top-2  z-10'><BsFillArrowUpRightCircleFill color='white' size={30} /></div>
        <div className='absolute left-0 bottom-[-5.5rem] md:bottom-[-5rem] z-10 p-3 bg-white w-full rounded-b-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
        <h1 className='text-[1rem] md:text-[1.3rem] text-black font-bold'>LinkedIn-Clone</h1>  
        <p className='text-black text-[0.7rem] lg:text-[0.8rem] md:text-[0.7rem] font-bold'>🚀 Check out my latest project: a React.js and Appwrite-powered LinkedIn clone! Sign up, log in, and create posts just like on LinkedIn. It's a full-stack app designed for seamless networking and professional connections. Explore it now!</p>
        </div>
      </div>
      </a>

      <a href="https://aditya30december2003.github.io/Hotstar/" target="_blank">
      <div className='relative duration-700 hover:scale-110 cursor-pointer'>
        <img className='object-cover rounded-t-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ' src={disney} alt="" />
        <div className='absolute rounded-t-[1rem] top-0 left-0 w-full h-full bg-purple-600/40  cursor-pointer'></div>
        <div className='absolute right-2 cursor-pointer top-2  z-10'><BsFillArrowUpRightCircleFill color='white' size={30} /></div>
        <div className='absolute left-0 bottom-[-5.5rem] md:bottom-[-5rem]  z-10 p-3 bg-white w-full rounded-b-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
        <h1 className='text-[1rem]  md:text-[1.3rem] text-black w-full font-bold  duration-200'>Disney+Hotstar Clone</h1>  
        <p className='text-black text-[0.7rem] lg:text-[0.8rem] md:text-[0.7rem] font-bold'>Presenting our Disney+ Hotstar Clone – a captivating frontend project built with React.js and styled to perfection with Tailwind CSS. Explore a world of entertainment with our user-friendly and visually appealing platform</p>
        </div>
      </div>
      </a>

      <a href="https://aditya30december2003.github.io/Food_Delivery_App/" target="_blank">
      <div className='relative duration-700 hover:scale-110 cursor-pointer'>
        <img className='object-cover rounded-t-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ' src={food} alt="" />
        <div className='absolute rounded-t-[1rem] top-0 left-0 w-full h-full bg-orange-600/50  cursor-pointer'></div>
        <div className='absolute right-2 cursor-pointer top-2  z-10'><BsFillArrowUpRightCircleFill color='white' size={30} /></div>
        <div className='absolute left-0 bottom-[-5.5rem] md:bottom-[-5rem] z-10 p-3 bg-white text-black w-full rounded-b-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
        <h1 className='text-[1rem] md:text-[1.3rem]  font-bold'>hostelEats</h1>  
        <p className='text-[0.7rem] lg:text-[0.8rem] md:text-[0.7rem] font-bold'>Introducing 'hostelEats': Your go-to Food Delivery App frontend, designed with React.js and Tailwind CSS. HostelEats brings the world of delicious dining to your fingertips, making ordering your favorite meals a breeze. Bon appétit!</p>
        </div>
      </div>
      </a>


      <a href="https://batflix-seven.vercel.app/" target="_blank">
      <div className='relative duration-700 hover:scale-110 cursor-pointer'>
        <img className='object-cover rounded-t-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]' src={batflix} alt="" />
        <div className='absolute rounded-t-[1rem] top-0 left-0 w-full h-full bg-red-600/50  cursor-pointer'></div>
        <div className='absolute right-2 cursor-pointer top-2  z-10'><BsFillArrowUpRightCircleFill color='white' size={30} /></div>
        <div className='absolute left-0 bottom-[-5.5rem] md:bottom-[-5rem] z-99 p-3 bg-white w-full rounded-b-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
        <h1 className='text-[1rem] md:text-[1.3rem] text-black font-bold'>Netflix-Clone</h1>  
        <p className='text-black text-[0.7rem] lg:text-[0.8rem] md:text-[0.7rem] font-bold'>A Netflix Clone, brought to life with React.js and styled with finesse using Tailwind CSS. What sets this clone apart is its dynamic content updates, powered by TheMovieDB API key.</p>
        </div>
      </div>
      </a>

      

      
      
    </div>


    {/* projects */}

    <div className=' text-white grid grid-cols-2 md:grid-cols-4 text-center gap-4 md:gap-2 mt-[10rem] font-bold'>
     <a href="https://aditya30december2003.github.io/Travel_Website/" target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Travel Website</p>
     </a>

     <a href='https://todo-list-guit5ahp0-aditya30december2003.vercel.app/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Todo List</p>
     </a>

     <a href="https://aditya30december2003.github.io/Link_Tree/" target='_blank' className='bg-purple-500 p-2 cursor-pointer'>
      <p >Linktree Clone</p>
     </a>

     <a href="https://aditya30december2003.github.io/Facemash/" target='_blank' className='bg-purple-500 p-2 cursor-pointer'>
      <p>Face Mash</p>
     </a>

     <a href="https://aditya30december2003.github.io/Weather-App/" target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Weather App</p>
     </a>

     <a href="https://aditya30december2003.github.io/Tip-n-Split/" target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Tip-n-Split</p>
     </a>

     <a href="https://aditya30december2003.github.io/Dictionary/" target='_blank' className='bg-purple-500 p-2 cursor-pointer'>
      <p >Dictionary</p>
     </a>

     <a href="https://aditya30december2003.github.io/Currency-Converter/" target='_blank' className='bg-purple-500 p-2 cursor-pointer'>
      <p>Currency Converter</p>
     </a>

     <a href='https://aditya30december2003.github.io/Country-Guide/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Country-Guide</p>
     </a>

     <a href="https://aditya30december2003.github.io/BMI-calculator/" target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>BMI-calculator</p>
     </a>

     <a href='https://aditya30december2003.github.io/Memory-Game/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Memory-Game</p>
     </a>

     <a href='https://aditya30december2003.github.io/Breakout-Game/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p href="">Breakout-Game</p>
     </a>

     <a href='https://aditya30december2003.github.io/Shooting-Practise/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Shooting-Practise</p>
     </a>

     <a href='https://aditya30december2003.github.io/Periodic-Table-Using-GSAP/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Periodic-Table-Using-GSAP</p>
     </a>

     <a href='https://aditya30december2003.github.io/Shoe-E-Commerce-Website/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Shoe-E-Commerce-Website</p>
     </a>

     <a href='https://aditya30december2003.github.io/Calculator-1/' target='_blank' className='bg-purple-500 p-2 cursor-pointer '>
      <p>Calculator</p>
     </a>

    </div>
  </div>
  )
}

export default Project
