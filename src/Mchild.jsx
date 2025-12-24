import React from 'react'

import { useContext } from 'react'
import UserContext from './CreateContext'

const Mchild = () => {

    let  mydata = useContext(UserContext)
    
  return (
    <>
      <h1>child component</h1>
      <h6>hello my name is{mydata.myname} and age is {mydata.myage}</h6>
    </>
  )
}

export default Mchild
