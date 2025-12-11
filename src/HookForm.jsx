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

        let valid=true

        if(form.name.trim()==""){
            alert("name empty")
            valid=false

        }
        else if(form.city.trim()==""){
            alert("city empty")
            valid=false
        }
        else if(form.number.trim()==""){
            alert("number empty")
            valid=false
        }
        else if(form.number.trim().length !== 10){
            alert("number must be 10 digits")
            valid=false
    } 
    else if(valid){

        localStorage.setItem("name",form.name)
        localStorage.setItem("city",form.city)
        localStorage.setItem("number",form.number)

        alert("submitted!!")
        
    }



    console.log(form)
        
    }

  return (
    <>
    <h1 className='text-center '>
        FROM HEADING
    </h1>

    <form onSubmit={handleSubmit} className='text-center bg-black text-amber-50 w-50 justify-between m-auto rounded-3xl'>

        {/* enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        enter city : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} /> */}

        enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br />
        enter city : <input type="text" value={form.city} name='city' onChange={handleChange} /> <br />
        enter number : <input type="number" value={form.number} name='number' onChange={handleChange} /> <br />

        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default HookForm
