import React from 'react';
import './Header.css'; // Import any additional styles you need
import Button from '@mui/material/Button'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/home">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
