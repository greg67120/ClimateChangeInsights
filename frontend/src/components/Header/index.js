import React from 'react';
import logo from '../../assets/images/logo.png'; 
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Climate Change Insights Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Accueil</a></li>
          <li className="nav-item"><a href="/about">À propos</a></li>
          <li className="nav-item"><a href="/info">Informations</a></li>
          <li className="nav-item"><a href="/insights">Insights</a></li>
          <li className="nav-item"><a href="/resources">Ressources</a></li>
          <li className="nav-item"><a href="/actions">Actions</a></li>
          <li className="nav-item"><a href="/community">Communauté</a></li>
          <li className="nav-item"><a href="/blog">Blog</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
          <li className="nav-item"><a href="/faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
