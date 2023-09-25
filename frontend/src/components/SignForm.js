import React from 'react';
import '../scss/components/SignForm.scss';

const SignForm = () => {
  return (
    <div className="sign-form-container">
      <div className="sign-form-title-container">
        <h1 className="sign-form-title">Sign In</h1>
      </div>
      <form className="sign-form">
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
      </form>
    </div>
  );
};

export default SignForm;
