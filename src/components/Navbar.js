import './Navbar.css'
import logo from '../images/logo.png'
import { links } from '../data';

import {Link , NavLink} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'

import {useState} from 'react';



const Navbar = () => {
  // only work in-case of devices of medium and low
  const [isNavShowing,setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className='container nav_container'>

        <Link className='logo' to='/'>
          <img src={logo} alt="logo" />
        </Link>

        {/* hide_nav & show_nav is only for medium and low devices */}
        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {
            links.map((link,index) => (
              <li key={index}>
                <NavLink to={link.path} className={({isActive}) => isActive ? 'active-nav' : ''}>
                  {link.name}
                </NavLink>
              </li>
            ))
          }
        </ul>

        <button 
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {
            isNavShowing ? <MdOutlineClose /> : <GiHamburgerMenu/>
          }
        </button>

      </div>
    </nav>
  )
}

export default Navbar;

