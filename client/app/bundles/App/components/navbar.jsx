import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) =>  {
  return (
      <div>
        <Link to="/app">Home</Link>
        <Link to="/app/hello">Hello</Link>
      </div>
  )
}

export default NavBar
