import React from 'react';
import { Link} from "react-router-dom";

import logo from '../Logo-white.png';

const Navbar = () => {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-5">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} className='App-logo d-inline-block align-text-bottom'/> Cafetoria</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link active"  to="/">Home </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active"  to="menu">Menu </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active"  to="orders">Orders </Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>;
};

export default Navbar;
