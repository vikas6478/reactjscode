import React, { useState } from 'react'

const Map = () => {

    let [search,setSearch]=useState("")

    // let MyData = ["vikas","abhay","kunal"];

    // let Data = [{
    //     id:1,
    //     name:"vikas",
    //     city:"bhopal"
    // },{
    //     id:2,
    //     name:"abhishek",
    //     city:"lucknow"
    // },{
    //     id:3,
    //     name:"kunal",
    //     city:"nepal"
    // },]

    let MyData = ["vikas","abhay","kunal"];

    let FilterData = MyData.filter((e)=>{

        return e.toLowerCase().includes(search.toLowerCase())
    })

    

  return (
   <>
   <h1>map</h1>

   {/* <ul>
    {MyData.map((e,i)=>(

        <li key={i}>{e}</li>

    ))}
   </ul> */}

   {/* {Data.map((e)=>(

    <div key={e.id}>

        <h1>{e.name}</h1>
        <p>{e.city}</p>

    </div>

   ))} */}

   Search <input type="text" value={search} onChange={(e)=>(setSearch(e.target.value))}/>

   <ul>
    {FilterData.map((e,i)=>(

        <li key={i}>{e}</li>

    ))}````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

   </ul>

   </>
  )
}

export default Map
