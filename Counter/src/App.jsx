import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(1)

  const addValue = () => {
    // counter = counter + 1
    if(counter == 20){
      return;
    }
    console.log("clicked ",counter);
    setCounter(counter + 1)
    
    
    
  }

  const removeValue = ()=>{
    if(counter <= 0){
      return;
    }
    setCounter(counter - 1)
    
    
  }
  

  return (
    <>
     <h1>Chai with react</h1>
     <h2>Counter value:{counter} </h2> 

     <button onClick={addValue}>Add value </button>
     <br />
     <button onClick={removeValue}>Remove value</button>
     <p>Footer :{counter}</p>

      
    </>
  )
}

export default App
