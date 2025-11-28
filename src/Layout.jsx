import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="about">about</Link> </li>
            <li><Link to="service">service</Link> </li>
            <li><Link to="contact">contact</Link> </li>
        </ul>
      </header>

        <hr />
    <Outlet/>
        <hr />

    <h1>
        layoutfooter
    </h1>
    
    </>
  )
}

export default Layout
