import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import About from './routerpages/About'
import Service from './routerpages/Service'
import Home from './routerpages/Home'
import Contact from './routerpages/Contact'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='service' element={<Service/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
} 

export default Router
