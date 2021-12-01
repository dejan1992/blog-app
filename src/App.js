import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      {/* <Footer /> */}

    </div>
  )
}

export default App


