import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
      <section className="header-container">
        <nav className="navbar">
          <Link to="/" className="title">
            Homepage
          </Link>
          <Link to="/travel" className="title">
            Travel
          </Link>
          <Link to="/festivalPage" className="title">
            Concerts
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;