import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav_bg">
        <div className="container lenovo">

          <a className="navbar-brand text-white acer" href="#">Sara Tort</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse victus" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/" className="nav-link">
                <span className="text-white">Home</span>
              </Link>
              <Link to="/product" className="nav-link">
                <span className="text-white">Product</span>
              </Link>
              <Link to="/about" className="nav-link">
                <span className="text-white">About</span>
              </Link>
              <Link to="/icon" className="nav-link">
                <span className="element-button-icon data-counter='0' text-white ikonka"><AiOutlineShoppingCart/></span>
                <span className="product-count">0</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;