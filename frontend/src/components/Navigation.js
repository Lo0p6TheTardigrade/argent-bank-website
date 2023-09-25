import React from 'react';
import '../scss/components/Navigation.scss';
import userIcon from '../assets/circle-user-solid.svg';
import signOutIcon from '../assets/right-from-bracket-solid.svg';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <ul className="nav-list-container">
          <li className="nav-list">
            <img
              src={userIcon}
              alt="user icon"
              className="icon user-icon"
            />
            <p className="sign signin-text">Sign In</p>
          </li>
          <li className="nav-list">
            <img
              src={signOutIcon}
              alt="sign out icon"
              className="icon sign-out-icon"
            />
            <p className="sign signout-text">Sign Out</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
