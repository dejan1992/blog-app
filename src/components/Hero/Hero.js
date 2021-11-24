import React from 'react'
// import Button from '../Button/Button'
import './Hero.css'
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';




const Hero = () => {
  return (
    <section className='hero'>
      <h1>Hello from Hero</h1>
      <Button variant="contained">Hello World</Button>
    </section>
  )
}

export default Hero
