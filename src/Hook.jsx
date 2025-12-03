import React, { useState } from 'react'
import "./Tailwind.css"

const Hook = () => {

    let [count,setCount] = useState(0)
    // let [color,setColor] = useState("text-orange-700")

    let increment = () =>{
        setCount(++count)
    }
    let decrement = () =>{
        if(count>0){
        setCount(--count)
        }
        // if(count==0){
        //   setColor("text-green-400")
        // }

    }
    let restart = () =>{
        setCount(0)
    }

    let color = count === 0 ? "bg-red-600" : "bg-green-600" 




  return (
    <>
    <div className={`justify-center text-center m-auto border-2 w-70 mt-52 ${color} `}>
    <h1>{count}</h1>
    <div className='m-2.5'>
    <button onClick={increment} className='bg-black text-amber-50 rounded p-0.5 m-1'>Increment</button>
    <button onClick={restart}  className='bg-red-600 text-amber-50 rounded p-0.5 m-1'>restart</button>
    <button onClick={decrement}  className='bg-black text-amber-50 rounded p-0.5 m-1'>decrement</button>
    </div>
    </div>
    </>
  )
}

export default Hook
