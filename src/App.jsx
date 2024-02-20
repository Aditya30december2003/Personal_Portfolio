import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tab from './components/Tab'
import Skills from './components/Skills'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Bottom from './components/Bottom'
import ContactProject from './components/ContactProject'
function App() {

  return (
    <>
    <div className=''>
    <Navbar />
    <Hero />
    <Tab />
    <About />
    <Skills />
    <Project />
    <ContactProject/>
    <Contact />
    <Bottom />
    </div>
    </>
  )
}

export default App
