import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Navigation.scss';
import userIcon from '../assets/circle-user-solid.svg';
import signOutIcon from '../assets/right-from-bracket-solid.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/action';
import { setLoggedOut } from '../actions/action';

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const userName = useSelector((state) => state.userReducer.userName);
  // const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(setLoggedOut(true));
    dispatch(setLoggedIn(false));
    window.location.href = '/';
    // navigate('/');
    // console.log(setLoggedOut);
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [isLoggedIn, navigate]);

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
        <ul className="nav-list-container">
          {!isLoggedIn ? defaultDisplay : signoutDisplayed}
          {/* {!isLoggedIn ? (
            <Link
              to="/signin"
              // onClick={handleSignIn}
            >
              <li className="nav-list">
                <img
                  src={userIcon}
                  alt="user icon"
                  className="icon user-icon"
                />
                <p className="sign signin-text">Sign In</p>
              </li>
            </Link>
          ) : (
            <Link>
              <li
                className="nav-list"
                onClick={handleSignOut}>
                <img
                  src={signOutIcon}
                  alt="sign out icon"
                  className="icon sign-out-icon"
                />
                <p className="sign signout-text">Sign Out</p>
              </li>
            </Link>
          )} */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
