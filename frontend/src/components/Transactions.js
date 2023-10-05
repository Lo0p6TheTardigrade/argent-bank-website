import React from 'react';
import Modal from 'react-modal';

const Transactions = () => {
  return (
    <div className="transaction-modal-container">
      <Modal className="transaction-modal">
        <div className="transaction-modal-top-info-container">
          <div className="transaction-modal-info-cantainer">
            <h3 className="transaction-checking-title">Argent Bank Checking (x3448)</h3>
            <p className="transaction-balance">$48,098.43</p>
            <p className="tarsaction-balance-info">Availiable balance</p>
          </div>
          <div className="transaction-balance-cross-container">
            <img
              src=""
              alt="cross logo"
              className="transaction-balance-cross"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Transactions;
