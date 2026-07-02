import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='min-h-screen w-full bg-black duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex justify-center bottom-12 inset-x-0 px-2 flex-wrap'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button>
           <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"green"}}>Green</button>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
