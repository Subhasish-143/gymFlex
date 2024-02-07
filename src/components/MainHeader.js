import React from 'react'
import { Link } from 'react-router-dom'

import main_image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main_header'>
        <div className="container main_header-container">
            <div className="main_header-left">
                <h4>#100DaysOfWorkOut</h4>
                <h1>Join The Legends Of The Fitness World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur ut voluptas eligendi similique, itaque natus quam eius alias voluptatem, reprehenderit nam consequuntur dolorum, dolore voluptatibus sint nemo sequi fugit!</p>
                <Link to="/plans" className='btn lg'>Get Started</Link>
            </div>
            <div className="main_header-right">
                <div className="main_header-circle"></div>
                <div className="main_header-image">
                    <img src={main_image} alt="Main header" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader