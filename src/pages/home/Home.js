import React from 'react'

import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <MainHeader/>
        <Programs/>
        <Values/>
        <FAQs/>
        <Testimonials/>
    </div>
  )
}

export default Home