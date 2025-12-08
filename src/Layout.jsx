import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import "./Tailwind.css"

const Layout = () => {
  return (
    <>
      {/* <header >
        <ul>
            <li><Link to="/">Sighup</Link> </li>
            <li><Link to="login">Login</Link> </li>
           
        </ul>
      </header>

        <hr />
    <Outlet/>
        <hr />

    <h1>
        layoutfooter
    </h1> */}
    

      <header className="bg-black p-4">
        <ul className="flex gap-6 text-white">
          <li><Link to="/" className="hover:text-gray-400">Signup</Link></li>
          <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
           {/* <li><Link to="about">about</Link> </li>
            <li><Link to="service">service</Link> </li>
            <li><Link to="contact">contact</Link> </li> */}
        </ul>
      </header>

      <hr className="my-4" />

      <Outlet />

      <hr className="my-4" />

      <h1 className="text-center py-4 bg-black text-amber-50">layout-footer</h1>
    </>
  )
}

export default Layout
