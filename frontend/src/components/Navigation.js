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
              className="user-icon"
            />
            <p className="signin-text">Sign In</p>
          </li>
          <li className="nav-list">
            <img
              src={signOutIcon}
              alt="sign out icon"
              className="sign-out-icon"
            />
            <p className="signout-text">Sign Out</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
