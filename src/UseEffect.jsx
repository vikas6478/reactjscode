import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [count,setCount] = useState(0)

    let inc=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("runingg")
    },[])
    
  return (
   <>
   UseEffect : <button onClick={inc}>increment</button>
   {count}
   </>
  )
}

export default UseEffect
