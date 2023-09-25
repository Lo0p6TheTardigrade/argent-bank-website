import React from 'react';
import '../scss/components/SignForm.scss';
import userIcon from '../assets/circle-user-solid.svg';

const SignForm = () => {
  return (
    <div className="sign-form-container">
      <form className="sign-form">
        <div className="sign-form-title-and-user-icon-container">
          <img
            src={userIcon}
            alt="user icon"
            className="icon user-icon"
          />
          <h1 className="sign-form-title">Sign In</h1>
        </div>
        <div class="input-wrapper">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <div class="input-remember">
          <input
            type="checkbox"
            id="remember-me"
          />
          <label for="remember-me">Remember me</label>
        </div>
        <button class="sign-in-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignForm;
