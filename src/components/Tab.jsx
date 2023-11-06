import React, { useState } from 'react'
import  {useEffect} from 'react'
import {PiMedalBold} from 'react-icons/pi'
import {LuClipboardList} from 'react-icons/lu'
import {AiOutlinePercentage} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Tab = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
const [counterOn ,setCounterOn]=useState(false)
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-[1rem] max-w-[1080px] mx-auto mt-32 flex-col flex justify-between sm:flex sm:flex-row gap-10 p-5 bg-white'>
      <div className='left flex flex-col gap-2 md:flex-row mx-auto md:mx-0 sm:w-[50%] md:w-[25%] lg:w-[20%] justify-between'>
        <PiMedalBold size={55} className='bg-purple-500 p-2 rounded-[100%] text-white mx-auto md:mx-0'/>
        <div>
            <h1 className='text-[1.7rem] md:text-[1.3rem] font-bold'>{counterOn && <CountUp start={0} end={1} duration={2} delay={0} />}+ Years of</h1>
            <p className='text-purple-500 font-bold text-center md:text-left'> expirience</p>
        </div>
      </div>
      <div className='left flex flex-col gap-2 md:flex-row mx-auto md:mx-0 sm:w-[50%] md:w-[25%] lg:w-[20%] justify-between'>
        <LuClipboardList size={55} className='bg-purple-500 p-2 rounded-[100%] text-white mx-auto md:mx-0'/>
        <div>
            <h1 className='text-[1.7rem] md:text-[1.3rem] font-bold'>{counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}+ Projects</h1>
            <p className='text-purple-500 font-bold text-center md:text-left'>completed</p>
        </div>
      </div>
      <div className='left flex flex-col gap-2 md:flex-row mx-auto md:mx-0 sm:w-[50%] md:w-[25%] lg:w-[20%] justify-between'>
        <AiOutlinePercentage size={55} className='bg-purple-500 p-2 rounded-[100%] text-white mx-auto md:mx-0'/>
        <div>
            <h1 className='text-[1.7rem] md:text-[1.3rem] font-bold'>{counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}% Jobs</h1>
            <p className='text-purple-500 font-bold text-center md:text-left'> done</p>
        </div>
      </div>
    </div>
    </ScrollTrigger>
  )
}

export default Tab
