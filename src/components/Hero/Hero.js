import React from 'react'
import ReactDOM from 'react-dom';
import Background from './anete-lusina-zwsHjakE_iI-unsplash.jpg'
import Button from '@mui/material/Button';
import classes from "./Hero.module.css"


const Hero = () => {
  return (
    <section className={classes.hero}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <h1>Welcome to your <span>FAVORITE</span> blog site</h1>
      <p>We are creativity team, that brings to you every day blogs about creativity</p>
      <a href="#blogs"><Button variant="contained" size="large" color="success">Read more</Button></a>
    </section>
  )
}

export default Hero
