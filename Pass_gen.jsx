import React, { useCallback, useEffect, useRef, useState } from 'react'
 function Pass_gen () {
     const [lenght,setLenght]=useState(8);
     const[numberAllowed,setNumberAllowed]=useState(false);
     const[charAllowed,setCharAllowed]=useState(false);
    const[Paaword,setPassword]=useState("");
    const PasswordGen = useCallback(() =>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += "1234567890"
         if(charAllowed) str += "`!@#$%^&*"
          for(let i=1;i <= lenght; i++){
            let char =Math.floor(Math.random() * str.length +1)
            pass += str.charAt(char)
          }
          setPassword(pass)

    },[lenght,numberAllowed,charAllowed,setPassword ])

    useEffect ( ()=>{
        PasswordGen()
    },[lenght,numberAllowed,charAllowed,PasswordGen])
    
const Passref=useRef(null)

const copyPassClip = useCallback ( ()=>{
    Passref.current?.select()
    Passref.current?.setSelectionRange(1,4);
    window.navigator.clipboard.writeText(Paaword)},[Paaword])

  return (
  <>
  <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
                        <h1 className='text-white text-center my-3'> Password Genrator </h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input  type="text" 
                value={Paaword}
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
                ref={Passref}
                />
                <button  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                onClick={copyPassClip}>Copy</button>
            </div>
            <div className='flex text-sm gap-x-2'> 
               <div className='flex items-center gap-x-1'>
               <input 
        type="range"
        min={6}
        max={100}
        value={lenght}
         className='cursor-pointer'
         onChange={(e) => {setLenght(e.target.value)}}
         />
            <label>Length:{lenght}</label>
            <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      
      
          </div>
                
            </div>
  </div>
  
  </>
  )
}

export default Pass_gen
