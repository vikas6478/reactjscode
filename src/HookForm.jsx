import React, { useState } from 'react'

const HookForm = () => {

    // let [name,setName] = useState("")
    // let [city,setCity] = useState("")
    let [form,setForm] = useState({
        name:"",
        city:"",
        number:""
    })

    let handleChange=(e)=>{

        setForm({...form,
            [e.target.name]: e.target.value 
        })
    }
    
    let handleSubmit = (e) =>{
        e.preventDefault()
        // alert(form.name)
        // console.log(name)
        // console.log(city)

        if(form.name.trim()==""){
            alert("name empty")
        }
        else if(form.city.trim()==""){
            alert("city empty")
        }
        else if(form.number.trim()==""){
            alert("number empty")
        }
        else if(form.number.trim().length !== 10){
            alert("number must be 10 digits")
    }

    console.log(form)
        
    }

  return (
    <>
    <h1>
        form heading
    </h1>

    <form onSubmit={handleSubmit}>

        {/* enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        enter city : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} /> */}

        enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br />
        enter city : <input type="text" value={form.city} name='city' onChange={handleChange} /> <br />
        enter number : <input type="number" value={form.number} name='number' onChange={handleChange} /> <br />
        {/* enter city : <input type="text" value={form.city} name='city' onChange={handleChange} /> <br /> */}

        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default HookForm
