import React from 'react'
import MediaCard from './CardTemplate'
import classes from './Card.module.css'
import Background1 from './img/daniel-lincoln-1XvjS1fCrms-unsplash.jpg'
import Background2 from './img/david-kovalenko-FdA9RhU-J0E-unsplash.jpg'
import Background3 from './img/james-adams-5NzsklUBdjQ-unsplash.jpg'
import Background4 from './img/pawel-czerwinski-3k9PGKWt7ik-unsplash.jpg'
import Background5 from './img/kamil-feczko-dQpT4iZ7Aos-unsplash.jpg'
import Background6 from './img/tom-roberts-6WNUb8AV0Z0-unsplash.jpg'
import Background7 from './img/anete-lusina-zwsHjakE_iI-unsplash.jpg'


const Card = () => {
  return (
    <div id='blogs' className={classes.card}>
      <div className={classes['card-text']}>
        <h1>Our Blog Posts</h1>
        <h2>Categories:</h2>
        <div className={classes.links}>
          <a href="#">All</a>
          <a href="#">Newest</a>
          <a href="#">Handmade</a>
          <a href="#">Nature</a>
          <a href="#">Featured</a>
        </div>
      </div>
      <div className={classes['card-container']}>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background1} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Creativity in USA</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background2} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Create something new</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background3} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Perpetummobile</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background4} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Todays discovery</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background5} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Be Happy</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background6} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Is bear healthy?</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background1} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Creativity in EU</MediaCard>
        </div>
        <div className={classes['card-template']}>
          <MediaCard className={classes['card-template']} Background={Background7} paragraf={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}>Creativity in Asia</MediaCard>
        </div>
      </div>
    </div >
  )
}

export default Card


