import React from 'react'
import { ImAirplane } from "react-icons/im";
import "./Tailwind.css"

const Tailwind = () => {
  return (
    <>
      {/* <h1 className='text-4xl text-blue-500 border-4 border-amber-500 w-3xl p-12 mx-auto mt-5 text-center justify-center items-center rounded-[1.5vw]'>hellllooooooooo budddddyyy</h1> */}

      <div className='bg-black text-amber-50 gap-1.5 h-20 items-center'>
    
        <nav className='flex list-none p-7 justify-between'>
          <ul className=' hover:text-blue-700 text-2xl flex'>
            <ImAirplane/> Acro
          </ul>

          <ul className='hidden sm:flex gap-2.5'>
          <li>home</li>
          <li>about</li>
          <li>contact</li> 
          <li>service</li>
          </ul>

          <ul className=' '>
            <button className='mr-1 bg-amber-300 text-black p-1 rounded-xl hover:bg-blue-700 hover:border-2 hover:border-amber-50'>login</button>
            <button className='mr-1 bg-amber-300 text-black p-1 rounded-xl hover:bg-blue-700 hover:border-2 hover:border-amber-50'>sign up</button>
            
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Tailwind
