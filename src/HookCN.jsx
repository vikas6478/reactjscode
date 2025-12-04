import React, { useState } from 'react'


const HookCN = () => {

    let [color,setColor] = useState("red")

    let handleColor = (e) =>{
        setColor(e.target.value)
        console.log(e.target.value)
    }
  return (
    <>
    <div style={{backgroundColor:color, width:"200px", height:"200px", border: "2px solid black",padding:"auto"}}>{color}</div> <br />
    
    enter color : <input type="text"  onChange={handleColor} style={{border:"2px solid black"}}/> <div>{color.length}</div>
    </>
  )
}

export default HookCN
