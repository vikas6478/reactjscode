import axios from 'axios';
import React from 'react'

const DataShow = () => {

    useEffect(()=>{

             let api = "http://localhost:3000/movie";

             axios.get(api).then((res)=>{

                console.log(res.data)

             }).catch((err)=>{

                console.log("error hai bhaiii!",err)
             })
             
        },[])

  return (
    <>
      <h1>data show</h1>
    </>
  )
}

export default DataShow
