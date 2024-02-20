import React , {useEffect, useState} from 'react'
import {CiUser} from 'react-icons/ci'
import {CgMenuRightAlt} from 'react-icons/cg'
import {BsFillMoonStarsFill , BsTelephone} from 'react-icons/bs'
import {BiHomeAlt2} from 'react-icons/bi'
import {HiOutlineWrenchScrewdriver} from 'react-icons/hi2'
import {TbDeviceDesktopCode} from 'react-icons/tb'
import {AiOutlineClose} from 'react-icons/ai'
import { GoSun } from "react-icons/go";
import Aditya from '../assets/imgs/Aditya-pf.png'


const Navbar = () => {
    const [nav,setNav]=useState(false)
    const [logo, setLogo]=useState(false)
    const [theme , setTheme]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
        setLogo(!logo)
    }
    const handleTheme = () =>{
      setTheme(!theme)
      if(theme){
        document.body.style.backgroundColor='black'
      }
      else{
        document.body.style.backgroundColor='white'
      }
    } 
  return (
  <div id='navbar' className='navbar w-full  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
  <div className='fixed flex justify-between bg-black/2 p-4    items-center align-middle  shadow-[0px_0px_10px_2px_#00000024] font-mono w-full bg-white z-10 top-0 left-0'>
      <div className='text-[1.8rem] md:text-[2.2rem] font-bold text-'>  Aditya.</div>

        <div className='flex items-center align-middle justify-between'>
        <ul className='md:flex hidden gap-6 lg:gap-10 mr-5 lg:mr-7 items-center text-[1.1rem] font-bold'>
        <a href="#home"><li className='cursor-pointer hover:text-purple-900  underline-animation' >Home</li></a>
        <a href="#about"><li className='cursor-pointer hover:text-purple-900 underline-animation' >About</li></a>
        <a href="#contact"><li className='cursor-pointer hover:text-purple-900  underline-animation'>Contact</li></a>
        <a href="#skills"><li className='cursor-pointer hover:text-purple-900  underline-animation' >Skills</li></a>
        <a href="#project"><li className='cursor-pointer hover:text-purple-900  underline-animation' >Projects</li></a>
        <li className='cursor-pointer hover:text-purple-900  underline-animation'>Certificates</li>
        </ul>
        <div onClick={handleTheme} className='mr-4 hidden md:block'>
        {theme ? <><BsFillMoonStarsFill onClick='' size={25} className='cursor-pointer'/></> : <><GoSun  onClick='' size={25} className='cursor-pointer'/></>}
        </div>
        </div>
        
     
      {/* mobile nav */}
      <div className='flex items-center md:hidden'>
      <div onClick={handleTheme} className='mr-4 '>
        {theme ? <><BsFillMoonStarsFill onClick='' size={25} className='cursor-pointer'/></> : <><GoSun  onClick='' size={25} className='cursor-pointer'/></>}
        </div>
        
      <div className="mobile-nav">
      <CgMenuRightAlt onClick={handleNav} size={30}  className={logo?'hidden':'block cursor-pointer'} />
      </div>
      </div>

      

      {/* mobile-dropdown */}

      <div onClick={handleNav} className={nav?'fixed duration-300 top-0 left-[0%] bg-white w-full h-screen   md:hidden':'left-[-100%] absolute'}>
     <AiOutlineClose  size={25} className='cursor-pointer ml-[90%] mt-4' />
        <img className='rounded-[100%] w-24 object-cover py-5 mx-auto ' src={Aditya} alt="" />

        <ul className='grid grid-cols-2 w-full gap-7 '>

        <a href="#home">
            <li className='mx-auto p-4 w-24 h-24 rounded-[10rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer   hover:bg-purple-400 hover:text-white'>
               <BiHomeAlt2 size={30}  className='mx-auto mt-1'/>
               <p className='text-sm text-center mt-2'>Home</p>
            </li>
        </a>


           <a href="#about">
            <li className='mx-auto  p-4 w-24 h-24 rounded-[10rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  hover:bg-purple-400 hover:text-white'>
               <CiUser size={30} className=' mx-auto mt-1'  />
              <p className='text-sm text-center mt-2'>About</p>
            </li>
            </a>

          <a href="#skills">
            <li className='mx-auto  p-4 w-24 h-24 rounded-[10rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  hover:bg-purple-400 hover:text-white'>
              <HiOutlineWrenchScrewdriver className='align-center mx-auto mt-1' size={43} />
              <p className='text-sm text-center mt-2'>Skills</p>
            </li>
          </a>

           <a href="#project">
            <li className='mx-auto  p-4 w-24 h-24 rounded-[10rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  hover:bg-purple-400  hover:text-white'>
               <TbDeviceDesktopCode size={30} className='align-center mx-auto mt-1' />
               <p className='text-sm text-center mt-2'>Projects</p>
            </li>
            </a>

            <a href="#contact">
            <li className='mx-auto mb-4 p-4 w-24 h-24 rounded-[10rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  hover:bg-purple-400 hover:text-white'>
              <BsTelephone size={30}  className='align-center mx-auto mt-1'/>
              <p className='text-sm text-center mt-2'>Contact</p>
            </li>
            </a>

        </ul>
      </div>


    </div>
    </div>
   
  )
}

export default Navbar
