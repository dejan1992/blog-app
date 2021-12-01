import React from 'react'
import './Card.css'
import MediaCard from './CardTemplate'


const Card = () => {
  return (
    <div className='card'>
      <div className='card-text'>
        <h1 className='card-title'>Our Video Catalog</h1>
        <h2 className='filter-title'>Categories:</h2>
        <div className='filter-links'>
          <a className='filter-test' href="#">All</a>
          <a href="#">Drone Shots</a>
          <a href="#">Nature</a>
          <a href="#">Actions</a>
          <a href="#">Featured</a>
        </div>
      </div>
      <div className="card-container">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  )
}

export default Card
