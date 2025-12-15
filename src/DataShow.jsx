import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataShow = () => {

  let [Data,setData] = useState([])

  const Table = () =>{

      let api = "http://localhost:3000/movie";

             axios.get(api).then((res)=>{

                console.log(res.data)

                setData(res.data)

             }).catch((err)=>{

                console.log("error hai bhaiii!",err)
             })

  }

  let DataDelete = (id) =>{

    let api = `http://localhost:3000/movie/${id}`;

    axios.delete(api).then(()=>{
       alert("booking canncceelling")
       Table()  
    })
   
  }

    useEffect(()=>{

             Table()  
        },[])
 


  return (
    <>
      <h1>data show</h1>

      <table border={2} cellPadding={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Date</th>
            <th>People</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e)=>(
            <tr>

            <td>{e.name}</td>
            <td>{e.city}</td>
            <td>{e.date}</td>
            <td>{e.people}</td>
            <td>{e.price}</td>
            <td onClick={()=>{DataDelete(e.id)}} >Delete</td>

          </tr>

          ))}
        </tbody>
      </table>
      
    </>
  )
}

export default DataShow
