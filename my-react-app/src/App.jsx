import { useState } from 'react'
import './App.css'
import Reloader from './components/reloader'
import Title from './components/title'
import Navbar from './components/navbar'
import Skills from "./components/skills"
import About from "./components/Aboute"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-screen bg-black  color-white'>
    <Reloader/>
      <Navbar/>
    <Title/>
    <About/>
    <Skills/>
    </div>
  )
}

export default App
