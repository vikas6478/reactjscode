import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataForm from './DataForm';

const DataShow = () => {

   let [form, setForm] = useState({
        name: "",
        city: "",
        date: "",
        people: ""
      });
   
  let [Data,setData] = useState([])
  let [editId,setEditId] = useState(null)
  let [search,setSearch] = useState("")

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
 
  let handleChange = (e) =>{

    let name = e.target.name;
    let value = e.target.value;

    setForm({...form,
      [name]:value
    
    })
  }

  let handleSubmit = (e) =>{
    e.preventDefault()

    let api = `http://localhost:3000/movie/${editId}`;

    axios.put(api,{...form, person:250}).then(()=>{

      Table()
      setEditId(null)

    })
  }

  let Updateform = (e) =>{

    setEditId(e.id)

    setForm({ name:e.name, city:e.city, date:e.date, people:e.people})
  }

  let FilterData = Data.filter((e)=>{
    
    return (e.name.toLowerCase().includes(search.toLocaleLowerCase())
            || e.city.toLowerCase().includes(search.toLocaleLowerCase()))
  })


  return (
    <>
      <h1>data show</h1>

      Search : <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>

      <table border={2} cellPadding={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Date</th>
            <th>People</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {FilterData.map((e)=>(
            <tr>

            <td>{e.name}</td>
            <td>{e.city}</td>
            <td>{e.date}</td>
            <td>{e.people}</td>
            <td>{e.people*e.person}</td>
            <td onClick={()=>{DataDelete(e.id)}} >Delete</td>
            <td onClick={()=>{Updateform(e)}} >Update</td>

          </tr>

          ))}
        </tbody>
      </table>
      <DataForm fun={Table}/>

      {editId && (
        <form onSubmit={handleSubmit} className='text-center bg-black text-amber-50 w-50 justify-between m-auto rounded-3xl'>

        enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br />
        enter city : <input type="text" value={form.city} name='city' onChange={handleChange} /> <br />
        enter number : <input type="date" value={form.date} name='date' onChange={handleChange} /> <br />
        enter people : <input type="number" value={form.people} name='people' onChange={handleChange} /> <br />

        <button type='submit'>submit</button>
    </form>
      )}
    </>
  )
}

export default DataShow
