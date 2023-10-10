import React from 'react';
import Modal from 'react-modal';
import Operation from './Operation';

const Transactions = ({ isOpen }) => {
  return (
    <div className="transaction-modal-container">
      <Modal
        className="transaction-modal"
        isOpen={isOpen}>
        <div className="transaction-modal-top-info-container">
          <div className="transaction-modal-info-cantainer">
            <h3 className="transaction-checking-title">Argent Bank Checking (x3448)</h3>
            <p className="transaction-balance">$48,098.43</p>
            <p className="tarsaction-balance-info">Availiable balance</p>
          </div>
        </div>
        <div className="transaction-balance-cross-container">
          <img
            src="cross close"
            alt="cross logo"
            className="transaction-balance-cross"
          />
        </div>
        <div className="transaction-modal-bottom-container">
          <div className="transaction-modal-operation-title">
            <p className="transaction-by-date">Date</p>
            <p className="transaction-by-description">Description</p>
            <p className="transaction-by-amount">Aùount</p>
            <p className="transaction-by-balance">Balance</p>
          </div>
          <div className="transaction-operation">
            <Operation />
            <Operation />
            <Operation />
            <Operation />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Transactions;
