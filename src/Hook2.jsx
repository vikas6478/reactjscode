import React, { useState } from 'react'

const Hook2 = () => {

    let [name, setName] = useState("")
    let [city, setCity] = useState("")

    let inputhandle = (e) =>{
        setName(e.target.value)
    }
    let inputcity = (e) =>{
        setCity(e.target.value)
    }
  return (
    <>
    enter name : <input type="text"  onChange={inputhandle} style={{border:"2px soild black"}}/><br />
    enter city : <input type="text"  onChange={inputcity}/><br />
 <br />
    your name is {name} <br />
    your city is {city}
    </>
  )
}

export default Hook2
