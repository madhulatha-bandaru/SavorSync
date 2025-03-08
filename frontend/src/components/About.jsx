import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <div className="heading">About us</div>
            <p>Welcome to SavorSync - Where Fine Dining Meets Seamless Reservations!
              The only thing we are serious about is FOOD!</p> 
          </div>
          <p className='mid'>
          At SavorSync, we believe that every dining experience should be effortless and enjoyable. 
          Our platform connects food lovers with their favorite restaurants, allowing them to book 
          tables with ease. Whether it's a romantic dinner, a family gathering, or a business lunch, 
          we ensure that your reservations are smooth, hassle-free, and tailored to your preferences.
          </p>
          <Link to={"/"}> Explore Menu <span><HiOutlineArrowRight/></span></Link>
        </div>
        <div className="banner">
          <img src='/about.png' alt='about'></img>
        </div>
      </div>
    </section>
  )
}

export default About