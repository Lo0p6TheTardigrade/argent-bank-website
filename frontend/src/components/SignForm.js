import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../scss/components/SignForm.scss';
import userIcon from '../assets/circle-user-solid.svg';
import { loginUser } from '../actions/action';

const SignForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(credentials, dispatch, navigate);
  };

  return (
    <div className="sign-form-container">
      <form
        className="sign-form"
        onSubmit={handleSubmit}>
        <div className="sign-form-title-and-user-icon-container">
          <img
            src={userIcon}
            alt="user icon"
            className="icon user-icon"
          />
          <h1 className="sign-form-title">Sign In</h1>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button
          type="submit"
          className="sign-in-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignForm;
