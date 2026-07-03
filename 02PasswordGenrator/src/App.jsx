import { useState, useCallback ,useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*()/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

useEffect(()=>{
  passwordGenrator()

}, [length, numAllowed, charAllowed, passwordGenrator])



  return (
    <>
      <div className='bg-black h-screen w-full text-amber-50'>
        <div className=' max-w-md w-full mx-auto text-amber-50 bg-gray-900 px-4 py-3'>
          <h1 className='text-center py-1.5 text-3xl '>Password Genrator </h1>
          <div className='flex justify-center bg-amber-400  '>
            <input type="text" value={password} className='bg-white text-black outline-none w-full py-1 px-3 border ' placeholder='Password' readOnly />
            <button className="bg-amber-800 px-3 py-0.5 shrink-0  text-xl " >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className=' flex items-center gap-x-1'>
              <input 
                type="range" min={6} max={100} value={length} className='cursor-pointer text-black' onChange={(e)=>{
                setLength(e.target.value)
              }}
              />
              <label htmlFor="numberInput">Length:{length}</label>
            </div>
          </div>
          
        </div>

      </div>

    </>
  )
}

export default App
