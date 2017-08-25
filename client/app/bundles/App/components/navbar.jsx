import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) =>  {
  return (
      <div>
        <Link to="/app">Home</Link>
        <Link to="/app/hello">Hello</Link>
        <Link to="/app/hi">Hi</Link>
      </div>
  )
}

export default NavBar
