import React from 'react'
// import Button from '../Button/Button'
import './Hero.css'
import ReactDOM from 'react-dom';
import Background from './anete-lusina-zwsHjakE_iI-unsplash.jpg'

import Button from '@mui/material/Button';


const Hero = () => {
  return (
    <section className='hero'
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <h1 className='hero-header'>Welcom to your FAVORITE blog site</h1>
      <Button variant="contained">Hello World</Button>
    </section>
  )
}

export default Hero
