import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="nav-bar">
      <Link to={`/`} className="nav-anchor">
      <h1 className="title"><i className="fas fa-film"></i> Movie Browser</h1>
    </Link>
    </nav>
  </header>
)

export default Header;
