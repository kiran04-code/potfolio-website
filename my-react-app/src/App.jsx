import { useState } from 'react'
import './App.css'
import Reloader from './components/reloader'
import Title from './components/title'
import Navbar from './components/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-screen bg-black  color-white'>
    
    <Reloader/>
      <Navbar/>
    <Title/>
    </div>
  )
}

export default App
