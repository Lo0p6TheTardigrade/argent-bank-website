import React from 'react';
import '../scss/components/Logo.scss';
import logo from '../assets/argentBankLogo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="logo du site"
        className="logo"
      />
    </div>
  );
};

export default Logo;
