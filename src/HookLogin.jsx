import React, { useState } from 'react'

const HookLogin = () => {

   let [form,setForm] = useState({
          name:"",
          number:""
      })

      let handleChange = (e) =>{
        setForm({...form,
            [e.target.name]: e.target.value 
        })
      }

      let handleSubmit = (e) =>{
        e.preventDefault()

        let Name = localStorage.getItem("name")
    let Number = localStorage.getItem("number")

        if(form.name !== Name){
          alert("name is wrong")
        }
        else if(form.number!== Number){
          alert("password is wrong")
        }
        else{
          alert("submitted")
        }
       
      }
    
  return (
    <>

    <h1 className='text-center '>
        login page
    </h1>
    
    <form onSubmit={handleSubmit} className='text-center bg-black text-amber-50 w-50 justify-between m-auto'>

        enter name : <input type="text" value={form.name} name='name' onChange={handleChange} /> <br />
        enter number : <input type="number" value={form.number} name='number' onChange={handleChange} /> <br />

        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default HookLogin
