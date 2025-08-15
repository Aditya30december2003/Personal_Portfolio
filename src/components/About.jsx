import  {useEffect} from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'
import {LuGithub} from 'react-icons/lu'
import {FiLinkedin} from 'react-icons/fi'
import {TbBrandLeetcode} from 'react-icons/tb'
import {BiLogoGmail} from 'react-icons/bi'


import Aditya from '../assets/imgs/Aditya-final.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {

  useEffect(()=>{
    Aos.init({duration:1000});
  },[])

  return (
    <>
    <div id='about' className='mt-[5rem] 2xl:max-w-[1600px] mx-auto   2xl:flex 2xl:justify-evenly xl:flex xl:justify-evenly'>
    <div className='mt-4 py-8  max-w-[1190px] flex flex-col lg:flex-row lg:justify-between'>
    {/* links */}
    <div className='icons  w-[100px]' data-aos="fade-up">
      <ul className='lg:flex lg:flex-col hidden gap-7 py-2 items-center w-full '>
       <a href="mailto:adityasmjain@gmail.com" target="_blank">
       <li className=' bg-gray-400 p-4 rounded-[100%] cursor-pointer'><BiLogoGmail size={20}  color='white' /></li>
        </a> 
       <a href="" target="_blank">
       <li className=' bg-gray-400 p-4 rounded-[100%] cursor-pointer'><BsWhatsapp size={20} color='white' /></li>
       </a> 
       <a href="https://twitter.com/AdityaJ47361990" target="_blank">
       <li className=' bg-gray-400 p-4 rounded-[100%] cursor-pointer'><FaXTwitter size={20} color='white' /></li>
        </a> 
       <a href="https://github.com/Aditya30december2003" target="_blank">
       <li className=' bg-gray-400 p-4 rounded-[100%] cursor-pointer'><LuGithub size={20} color='white' /></li>
       </a>
       <a href="https://www.linkedin.com/in/aditya-jain-065484226/" target="_blank">
       <li className=' bg-gray-400 p-4 rounded-[100%] cursor-pointer'><FiLinkedin size={20} color='white' /></li>
       </a>
       <a href="https://leetcode.com/leo100demigod/" target="_blank">
       <li className=' bg-gray-400 p-4 rounded-[100%] cursor-pointer'><TbBrandLeetcode size={20} color='white' /></li>
       </a> 
      </ul>
    </div>
    {/* image */}
    <div className='flex flex-col lg:flex-row lg:justify-between'>
    <div className='left  w-full '>
      <img className='w-96 mx-auto lg:h-[80vh] 2xl:h-[43vh] md:object-cover h-full rounded-[0.7rem]' data-aos="fade-up" src={Aditya} alt="" />
    </div>
    <div className='mx-auto w-full text-center' data-aos="fade-up">
      <h1 className='text-[2.3rem] font-bold text-purple-500 text-center lg:text-left w-full'>About Me</h1>
      <hr className='w-[9rem] mx-auto h-2 border-none bg-purple-500 lg:text-left lg:mx-4'  />
      <p className='my-6 text-purple-500/60 font-bold text-center lg:text-left mx-0 text-[1.1rem]'> 
     I’m Aditya Jain, 21, B.Tech CSE (Class of 2025) from Manipal University Jaipur.
I build fast, accessible, and clean front-end experiences with Next.js/React and Tailwind, focusing on component-driven UI, performance, and UX details.
Beyond the front end, I’m growing into full-stack: Node.js/Express, MongoDB/Prisma, REST APIs, OAuth/JWT auth.
I enjoy turning ideas into shipped features—dashboards, content platforms, and data-driven interfaces—with attention to testing and maintainable code.
Recently, I’ve been exploring web3 fundamentals (wallet auth, smart-contract reads/writes, on-chain data UX) to expand my toolkit for modern web apps.
      </p>
      <div className='w-full mx-auto md:text-left text-center md:flex flex-col'>
      <a href="Aditya Jain_CV_Resume(Main).pdf" download="Aditya Jain_CV" target='_blank'>
      <button className='flex justify-between items-center mx-auto  text-white bg-purple-600 py-3 px-5 rounded-xl duration-150 w-full'>

       <p className='mx-auto'>Download Resume</p>
       <p className='mx-auto'>Download CV</p> 3a8d6e58f5c6521edb6d2705667d37c1b03dc015
      </button>
      </a>
      {/* <button className=' w-full flex justify-between items-center mx-auto my-4 lg:my-2 text-white bg-purple-600 py-3 px-7 rounded-xl duration-150'>
       <p className='mx-auto'>Hire Me!!</p>
      </button>  */}
      </div>
    </div>
  </div>
  </div>
  </div>
  </>
  )
}

export default About
