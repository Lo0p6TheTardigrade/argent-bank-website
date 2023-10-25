import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Navigation.scss';
import userIcon from '../assets/circle-user-solid.svg';
import signOutIcon from '../assets/right-from-bracket-solid.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setUserName } from '../actions/action';
import { setLoggedOut } from '../actions/action';

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const isLoggedOut = useSelector((state) => state.userReducer.isLoggedOut);
  const userName = useSelector((state) => state.userReducer.userName);

  const handleSignOut = () => {
    dispatch(setLoggedOut(isLoggedOut));
    dispatch(setLoggedIn(isLoggedIn));
    deleteCookie('userToken');
    window.location.href = '/';
  };
  useEffect(() => {
    whereToGo();
    const userData = localStorage.getItem('user');

    if (userData) {
      const { userName } = JSON.parse(userData);
      dispatch(setUserName(userName));
      console.log(userName);
    }
  }, []);
  async function whereToGo() {
    const userTokenCookie = document.cookie.includes('userToken');

    if (userTokenCookie) {
      dispatch(setLoggedIn(true));
      dispatch(setUserName(userName));
      console.log(isLoggedIn, userTokenCookie);
    } else {
      dispatch(setUserName(''));
      dispatch(setLoggedIn(isLoggedIn));
      localStorage.removeItem('user');
    }
  }
  function deleteCookie(cookieName) {
    const expirationDate = new Date('Thu, 01 Jan 1970 00:00:00 UTC');

    const cookiePath = '/';
    const deleteCookieString = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=${cookiePath}`;

    document.cookie = deleteCookieString;

    console.log('Cookie supprimé :', cookieName);
  }

  const defaultDisplay = (
    <Link to="/login">
      <li className="nav-list">
        <img
          src={userIcon}
          alt="user icon"
          className="icon user-icon"
        />
        <p className="sign signin-text">Sign In</p>
      </li>
    </Link>
  );
  const signoutDisplayed = (
    <Link>
      <li
        className="nav-list"
        onClick={handleSignOut}>
        <p className="user-name">{userName}</p>
        <img
          src={signOutIcon}
          alt="sign out icon"
          className="icon sign-out-icon"
        />
        <p className="sign signout-text">Sign Out</p>
      </li>
    </Link>
  );
  return (
    <div className="navigation-container">
      <nav className="navigation">
        <ul className="nav-list-container">{!isLoggedIn ? defaultDisplay : signoutDisplayed}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
