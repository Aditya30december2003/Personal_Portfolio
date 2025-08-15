import React from 'react'
import Hero from '../components/Hero'
import Tab from '../components/Tab'
import Skills from '../components/Skills'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import ContactPage from '../components/ContactProject'
import PageLoadAnimation from '../components/PageLoadAnimation'
const Home = () => {
  return (
    <div>
      <PageLoadAnimation>
      <Hero />
      </PageLoadAnimation>
      <Tab/>
      <About/>
      <Skills/>
      <Project/>
      <ContactPage/> 
      <Contact/>
    </div>
  )
}

export default Home
