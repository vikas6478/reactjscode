import axios from 'axios';
import React, { useState } from 'react'

const DataForm = ({fun}) => {

    let [form, setForm] = useState({
      name: "",
      city: "",
      date: "",
      people: "",
      price: "",
    });

    let handleChange = (e) =>{

         setForm({...form,
            [e.target.name]: e.target.value
        })

    }

    let handleSubmit = (e) =>{
        e.preventDefault()

        let valid = true
        
        if (form.name.trim()=="") {
            alert("name empty")
            valid = false

        } else if (form.city.trim()=="") {
            alert("city empty")
            valid = false

        }else if (form.date.trim()=="") {
            alert("date empty")
            valid = false

        }else if (form.people.trim()=="") {
            alert("people empty")
            valid = false

        }else if (valid) {
            
            let api = "http://localhost:3000/movie";
            axios.post(api, {...form, person:220 }).then((res)=>{
                alert("submitted!!")
                 fun()
            })
        }

    }
  return (
    <>
    <h1 className='text-center '>
        FROM HEADING
    </h1>

    <form onSubmit={handleSubmit} className='text-center bg-black text-amber-50 w-50 justify-between m-auto rounded-3xl'>

        enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br />
        enter city : <input type="text" value={form.city} name='city' onChange={handleChange} /> <br />
        enter number : <input type="date" value={form.date} name='date' onChange={handleChange} /> <br />
        enter people : <input type="number" value={form.people} name='people' onChange={handleChange} /> <br />

        <button type='submit'>submit</button>
    </form>
    
     </>
  )
}

export default DataForm
