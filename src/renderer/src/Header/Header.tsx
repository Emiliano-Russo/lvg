// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="App Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Tienda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/downloads"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Descargas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Librería
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
