import {Link} from 'react-router-dom'

import logo from '../images/logo.png'

import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente maxime nemo itaque natus dolores eius voluptatibus praesentium numquam corporis hic molestias, magnam magni quisquam amet eum unde qui.</p>
                <div className="footer_socials">
                    <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'>
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'>
                        <FaFacebook/>
                    </a>
                    <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'>
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/c">FAQs</Link>
            </article>
            <article>
                <h4>Get in touch</h4>
                <Link to="/exercises">Exercises</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
    </footer>
  )
}

export default Footer