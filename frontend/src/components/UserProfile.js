import React from 'react';
import '../scss/components/UserProfile.scss';
import Button from './Button';
import Transactions from './Transactions';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="user-profile-title-container">
        <h1 className="user-profile-title">Edit user info</h1>
      </div>
      <form className="user-profile-edit-form">
        <label
          htmlFor="userName"
          className="user-profile-edit-userName-label">
          User name
          <input
            type="text"
            id="userName"
            className="user-profile-edit-userName"
          />
        </label>
        <label
          htmlFor="firstName"
          className="user-profile-edit-firstName-label">
          First name
          <input
            type="text"
            id="firstName"
            className="user-profile-edit-firstName"
          />
        </label>
        <label
          htmlFor="lastName"
          className="user-profile-edit-lastName-label">
          Last name
          <input
            type="text"
            id="lastName"
            className="user-profile-edit-lastName"
          />
        </label>
        <Button />
        <Button />
      </form>
      <Transactions />
    </div>
  );
};

export default UserProfile;
