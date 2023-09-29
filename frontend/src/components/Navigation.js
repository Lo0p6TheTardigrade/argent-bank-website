import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Navigation.scss';
import userIcon from '../assets/circle-user-solid.svg';
import signOutIcon from '../assets/right-from-bracket-solid.svg';

const Navigation = (isLoggedIn) => {
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <ul className="nav-list-container">
          {!isLoggedIn && (
            <Link to="/signin">
              <li className="nav-list">
                <img
                  src={userIcon}
                  alt="user icon"
                  className="icon user-icon"
                />
                <p className="sign signin-text">Sign In</p>
              </li>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <li className="nav-list">
                <img
                  src={signOutIcon}
                  alt="sign out icon"
                  className="icon sign-out-icon"
                />
                <p className="sign signout-text">Sign Out</p>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
