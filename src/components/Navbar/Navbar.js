import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={classes["nav-ul"]}>
      <li><a href="#">Videos</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  )
}

export default Navbar
