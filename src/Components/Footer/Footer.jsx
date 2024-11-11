import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Logo.gif'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>UGN-Mart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
      <a href="https://www.instagram.com/nakadeuttam96/profilecard/?igsh=MWk4Y2R3Z3Q3eGZwNw==" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-xl"></i></a>
      <a href="https://www.facebook.com/profile.php?id=100073788919787&mibextid=ZbWKwL" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook fa-xl"></i></a>
      <a href="https://www.linkedin.com/in/uttam-nakade-54a852247/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin fa-xl"></i></a>
      <a href="https://github.com/nakadeuttam" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-xl"></i></a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
