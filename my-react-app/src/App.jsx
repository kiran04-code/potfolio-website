import { useState } from 'react'
import './App.css'
import Reloader from './components/reloader'
import Title from './components/title'
import Navbar from './components/navbar'
import Skills from "./components/skills"
import About from "./components/Aboute"
import ContactMe from "./components/contact"
import Footer from './components/footer'
import Footer2 from './components/footer2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-screen bg-black  color-white'>
    <Reloader/>
      <Navbar/>
    <Title/>
    <ContactMe/>
    <About/>
    <Skills/>
  <Footer/>
  <Footer2/>
    </div>
  )
}

export default App
