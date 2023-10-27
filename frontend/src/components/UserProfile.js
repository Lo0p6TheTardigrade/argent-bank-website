import React, { useState } from 'react';
import '../scss/components/UserProfile.scss';
import Button from './Button';
import Account from './Account';
import { useSelector } from 'react-redux';
import { updateProfilUser } from '../actions/action';
import { useDispatch } from 'react-redux';

const UserProfile = ({ isVisible, isVisible2, isVisible3 }) => {
  const userName = useSelector((state) => state.userReducer.userName);
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer.lastName);
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();

  const [userNameChange, setUsernameChange] = useState(userName);

  const handleInputChange = (e) => {
    setUsernameChange(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateProfilUser(dispatch, userName, { userName: userNameChange });
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-title-container">
        <h1 className="user-profile-title">Edit user info</h1>
      </div>
      <form
        className="user-profile-edit-form"
        onSubmit={handleFormSubmit}>
        <div className="user-profile-edit-form-input-container">
          <label
            htmlFor="userName"
            className="user-profile-edit-userName-label user-profile-edit-label">
            User name
            <input
              type="text"
              id="userName"
              className="user-profile-edit-userName"
              value={userNameChange.userName}
              onChange={handleInputChange}
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
