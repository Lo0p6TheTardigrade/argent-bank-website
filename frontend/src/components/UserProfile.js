import React from 'react';
import '../scss/components/UserProfile.scss';
import Button from './Button';
import Transactions from './Transactions';
import Account from './Account';
import { useSelector } from 'react-redux';

const UserProfile = ({ isVisible, isVisible2, isVisible3 }) => {
  const userName = useSelector((state) => state.userReducer.userName);
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer.lastName);
  return (
    <div className="user-profile-container">
      <div className="user-profile-title-container">
        <h1 className="user-profile-title">Edit user info</h1>
      </div>
      <form className="user-profile-edit-form">
        <div className="user-profile-edit-form-input-container">
          <label
            htmlFor="userName"
            className="user-profile-edit-userName-label user-profile-edit-label">
            User name
            <input
              type="text"
              id="userName"
              className="user-profile-edit-userName"
              placeholder={userName}
            />
          </label>
          <label
            htmlFor="firstName"
            className="user-profile-edit-firstName-label user-profile-edit-label">
            First name
            <input
              type="text"
              id="firstName"
              className="user-profile-edit-firstName"
              placeholder={firstName}
              disabled
            />
          </label>
          <label
            htmlFor="lastName"
            className="user-profile-edit-lastName-label user-profile-edit-label">
            Last name
            <input
              type="text"
              id="lastName"
              className="user-profile-edit-lastName"
              placeholder={lastName}
              disabled
            />
          </label>
        </div>
        <div className="user-profile-edit-form-button-container">
          <Button isVisible2={!isVisible2} />
          <Button isVisible3={!isVisible3} />
        </div>
      </form>
      <div className="account-container-insert">
        <Account isVisible={!isVisible} />
        <Account isVisible2={!isVisible2} />
        <Account isVisible3={!isVisible3} />
      </div>
    </div>
  );
};

export default UserProfile;
