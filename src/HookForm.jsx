import React, { useState } from 'react'

const HookForm = () => {

    // let [name,setName] = useState("")
    // let [city,setCity] = useState("")
    let [form,setForm] = useState({
        name:"",
        city:""
    })

    let handleChange=(e)=>{

        setForm({...form,
            [e.target.value]: e.target.value
        })
    }
    
    let handleSubmit = (e) =>{
        e.preventDefault()
        // alert(name)
        // console.log(name)
        // console.log(city)
    }

  return (
    <>
    <h1>
        form heading
    </h1>

    <form onSubmit={handleSubmit}>

        {/* enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        enter city : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} /> */}

        enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br /><br />
        enter city : <input type="text" value={form.city} name='city' onChange={handleChange} />

        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default HookForm
