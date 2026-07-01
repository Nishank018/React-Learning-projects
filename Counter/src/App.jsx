import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let counter = 15

  const addValue = () => {
    counter = counter + 1
    console.log("clicked ",counter);
    
    
  }
  

  return (
    <>
     <h1>Chai with react</h1>
     <h2>Counter value:{counter} </h2> 

     <button onClick={addValue}>Add value </button>
     <br />
     <button>Remove value</button>

      
    </>
  )
}

export default App
