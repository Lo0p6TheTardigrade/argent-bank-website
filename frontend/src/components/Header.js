import React from 'react';
import '../scss/components/Header.scss';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Logo />
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
