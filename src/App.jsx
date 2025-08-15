import './App.css'
import Navbar from './components/Navbar'
import Bottom from './components/Bottom'
import { Route , Routes } from 'react-router-dom'
import Home from './page/Home'
import Blog from './page/Blog'
function App() {

  return (
    <>
    <div className=''>
    <Navbar />
    <Routes>
    <Route path='/Personal_Portfolio/' element={<Home/>}/>
    <Route path='/Personal_Portfolio/blog' element={<Blog/>}/>
    {/* <Tab />
    <About />
    <Skills />
    <Project />
    <ContactProject/>
    <Contact /> */}
    </Routes>
    <Bottom />
    </div>
    </>
  )
}

export default App
