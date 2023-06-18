import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from "../assets/svg/menu.png"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
      setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <img src={menuIcon} alt='ope its broken' className='menu-icon' onClick={toggleNav} />
      <section className="header-container">
        <nav className={isOpen ? "navbar-active" : "navbar"}>
          <Link to="/" className="title">
            Homepage
          </Link>
          <Link to="/nationalTravel" className="title">
            National Travel
          </Link>
          <Link to="/localTravel" className="title">
            Local Travel
          </Link>
          <Link to="/festivalPage" className="title">
            Concerts
          </Link>
          <Link to="/signup" type="button" className="title">
            Sign Up/Login
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;