import React from 'react';
import '../scss/components/Account.scss';

const Account = ({ isVisible, isVisible2, isVisible3 }) => {
  return (
    <div className="account-container">
      {isVisible && (
        <div className="account-content-wrapper">
          <div className="account-text-info-balance">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="carret-right-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="51px"
              width="51px"
              viewBox="0 0 320 512"
              fill="white">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </div>
      )}
      {isVisible2 && (
        <div className="account-content-wrapper">
          <div className="account-text-info-balance">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="carret-right-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="51px"
              width="51px"
              viewBox="0 0 320 512"
              fill="white">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </div>
      )}
      {isVisible3 && (
        <div className="account-content-wrapper">
          <div className="account-text-info-balance">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="carret-right-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="51px"
              width="51px"
              viewBox="0 0 320 512"
              fill="white">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
