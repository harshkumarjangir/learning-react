import React from 'react'
import '../navbar/nabvar.css'
import img1 from '../../images/logo.jpg';
// import img1 from '../../images/logo.svg';

const Navbar = () => {
  return (
    <>
      <nav className="nav-css">
        <div className="logo">
          <a href="#">
            <img src={img1} alt="navbar image" />
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;