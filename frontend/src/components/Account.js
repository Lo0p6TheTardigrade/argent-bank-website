import React from 'react';
import '../scss/components/Account.scss';
import { useSelector } from 'react-redux';

const Account = ({ isVisible, isVisible2, isVisible3 }) => {
  let balance = useSelector((state) => state.userReducer.balance).toLocaleString('en-US', { minimumFractionDigits: 2 });
  let saving = useSelector((state) => state.userReducer.saving).toLocaleString('en-US', { minimumFractionDigits: 2 });
  let card = useSelector((state) => state.userReducer.card).toLocaleString('en-US', { minimumFractionDigits: 2 });
  const character = '$';
  return (
    <div className="account-container">
      {isVisible && (
        <div className="account-content-wrapper">
          <div className="account-text-info-balance">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">
              {character}
              {balance}
            </p>
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
            <p className="account-amount">
              {character}
              {saving}
            </p>
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
            <p className="account-amount">
              {character}
              {card}
            </p>
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
