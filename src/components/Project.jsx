import React, { useEffect } from 'react'
import { GrProjects } from 'react-icons/gr'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  // ==== BIG CARDS (from your resume) ====
  const featuredProjects = [
    {
      title: 'TheMovieProject',
      link: 'https://backend-eta-khaki-54.vercel.app/login',
      image: '/src/assets/imgs/movie.png',
      overlay: 'bg-purple-600/40',
      desc:
        'Social platform for movie reviews, ratings, blogs & lists with Google Auth. Built with Next.js, MongoDB, Tailwind.',
    },
    {
      title: 'BlogBuster',
      link: 'https://blo-g-buster30.vercel.app/login',
      image: '/src/assets/imgs/blog.png',
      overlay: 'bg-blue-600/30',
      desc:
        'Next.js + Prisma + MongoDB blog platform with Google/GitHub OAuth, comments, and SEO-friendly pages.',
    },
    {
      title: 'ChessBot',
      link: 'https://chess-bot-blue.vercel.app/',
      image: '/src/assets/imgs/chess.png',
      overlay: 'bg-emerald-600/40',
      desc:
        'Modern chess app with bot play, move history, and clean UI. Built with React/Next.js and Tailwind.',
    },
    {
      title: 'hostelEats',
      link: 'https://aditya30december2003.github.io/Food_Delivery_App/',
      image: '/src/assets/imgs/food.png',
      overlay: 'bg-fuchsia-600/40',
      desc:
        'Introducing hostelEats: Your go-to Food Delivery App frontend, designed with React.js and Tailwind CSS. HostelEats brings the world of delicious dining to your fingertips, making ordering your favorite meals a breeze. Bon appétit!',
    },
  ]

  // ==== SMALL LINKS (now includes your previous big cards) ====
  const quickLinks = [
    { title: 'LinkedIn-Clone', href: 'https://linkedin-ten-blond.vercel.app/' },
    { title: 'Disney+ Hotstar Clone', href: 'https://aditya30december2003.github.io/Hotstar/' },
    // ⬇️ replaced hostelEats with Phedaz
    { title: 'Phedaz', href: 'https://phedaz.com/' },
    { title: 'Netflix-Clone', href: 'https://batflix-seven.vercel.app/' },

    // your existing small projects
    { title: 'Travel Website', href: 'https://aditya30december2003.github.io/Travel_Website/' },
    { title: 'Todo List', href: 'https://todo-list-guit5ahp0-aditya30december2003.vercel.app/' },
    { title: 'Linktree Clone', href: 'https://aditya30december2003.github.io/Link_Tree/' },
    { title: 'Face Mash', href: 'https://aditya30december2003.github.io/Facemash/' },
    { title: 'Weather App', href: 'https://aditya30december2003.github.io/Weather-App/' },
    { title: 'Tip-n-Split', href: 'https://aditya30december2003.github.io/Tip-n-Split/' },
    { title: 'Dictionary', href: 'https://aditya30december2003.github.io/Dictionary/' },
    { title: 'Currency Converter', href: 'https://aditya30december2003.github.io/Currency-Converter/' },
    { title: 'Country-Guide', href: 'https://aditya30december2003.github.io/Country-Guide/' },
    { title: 'BMI-calculator', href: 'https://aditya30december2003.github.io/BMI-calculator/' },
    { title: 'Memory-Game', href: 'https://aditya30december2003.github.io/Memory-Game/' },
    { title: 'Breakout-Game', href: 'https://aditya30december2003.github.io/Breakout-Game/' },
    { title: 'Shooting-Practise', href: 'https://aditya30december2003.github.io/Shooting-Practise/' },
    { title: 'Periodic-Table-Using-GSAP', href: 'https://aditya30december2003.github.io/Periodic-Table-Using-GSAP/' },
    { title: 'Shoe-E-Commerce-Website', href: 'https://aditya30december2003.github.io/Shoe-E-Commerce-Website/' },
    { title: 'Calculator', href: 'https://aditya30december2003.github.io/Calculator-1/' },
  ]

  return (
    <div id='project' className='mt-[0.3rem] md:mt-[3rem] lg:mt-[10rem] max-w-[1080px] mx-auto'>
      {/* Header */}
      <div className='header mx-auto text-center'>
        <GrProjects size={40} className='mx-auto mt-4 text-purple-500/100' />
        <h1 className='font-bold text-[2rem] w-full mx-auto mt-4 text-purple-500'>Portfolio Projects</h1>
      </div>

      {/* Featured (BIG) */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-36 px-5 mt-8' data-aos='fade-up'>
        {featuredProjects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target='_blank'
            rel='noopener noreferrer'
            className='relative duration-700 hover:scale-110 cursor-pointer block'
          >
            <img
              className='object-cover w-full rounded-t-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'
              src={p.image}
              alt={p.title}
            />
            <div className={`absolute rounded-t-[1rem] top-0 left-0 w-full h-full ${p.overlay}`} />
            <div className='absolute right-2 top-2 z-10'>
              <BsFillArrowUpRightCircleFill color='white' size={30} />
            </div>
            <div className='absolute left-0 bottom-[-5.5rem] md:bottom-[-5rem] z-10 p-3 bg-white w-full rounded-b-[1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
              <h2 className='text-[1rem] md:text-[1.3rem] text-black font-bold'>{p.title}</h2>
              <p className='text-black text-[0.7rem] lg:text-[0.8rem] md:text-[0.7rem] font-bold'>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Quick links (SMALL) */}
      <div className='text-white grid grid-cols-2 p-2 md:grid-cols-4 text-center gap-4 md:gap-2 mt-[10rem] font-bold'>
        {quickLinks.map((q) => (
          <a
            key={q.title}
            href={q.href}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-purple-500 p-2 cursor-pointer'
          >
            <p>{q.title}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project
