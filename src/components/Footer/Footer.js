import React from 'react'
import classes from './Footer.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.left}>
          <h3>Do you want to get our latest updates?</h3>
          <p>Please subscribe our newsletter for upcoming new videos and latest information about our work. Thank you.</p>
          <form>
            <TextField id="outlined-basic" label="Your Email..." variant="outlined" />
            <Button variant="contained" size="large" color="success">Subscribe</Button>
          </form>
        </div>
        <div className={classes.middle}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Duis bibendum</a></li>
            <li><a href="#">Purus non dignissim</a></li>
            <li><a href="#">Sapien metus gravida</a></li>
            <li><a href="#">Eget consequat</a></li>
            <li><a href="#">Praesent eu pulvinar</a></li>
          </ul>
        </div>
        <div className={classes.right}>
          <h3>Our Pages</h3>
          <ul>
            <li><a href="#">Duis bibendum</a></li>
            <li><a href="#">Purus non dignissim</a></li>
            <li><a href="#">Sapien metus gravida</a></li>
            <li><a href="#">Eget consequat</a></li>
            <li><a href="#">Praesent eu pulvinar</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
