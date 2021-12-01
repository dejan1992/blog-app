import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css'
import ReactDOM from 'react-dom';
import Card from './components/Card/Card.js'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
// import Blogs from './components/Blogs/Blogs'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Footer />

    </>
  )
}

export default App


