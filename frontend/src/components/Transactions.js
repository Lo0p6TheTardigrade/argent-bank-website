import React from 'react';
import Modal from 'react-modal';
import '../scss/components/Transactions.scss';
import Operation from './Operation';
import { setIsOpen } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout';

const Transactions = ({ isOpen }) => {
  const dispatch = useDispatch();
  let balance = useSelector((state) => state.userReducer.balance);
  const handleButtonClick = () => {
    dispatch(setIsOpen(!isOpen));
  };
  return (
    <Modal
      className="transaction-modal"
      isOpen={isOpen}>
      <Layout>
        <div className="transaction-modal-container">
          <div className="top-box">
            <div className="transaction-modal-top-info-container">
              <div className="transaction-modal-info-cantainer">
                <h3 className="transaction-checking-title">Argent Bank Checking (x3448)</h3>
                <p className="transaction-balance">${balance}</p>
                <p className="transaction-balance-info">Availiable balance</p>
              </div>
            </div>
            <div className="transaction-balance-cross-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80px"
                width="80px"
                viewBox="0 0 384 512"
                fill="white"
                className="transaction-balance-cross"
                onClick={handleButtonClick}>
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
          </div>
          <div className="transaction-modal-bottom-container">
            <div className="transaction-modal-operation-title">
              <span className="transaction-by-date">Date</span>
              <span className="transaction-by-description">Description</span>
              <span className="transaction-by-amount">Amount</span>
              <span className="transaction-by-balance">Balance</span>
            </div>
            <div className="transaction-operation">
              <Operation />
              <Operation />
              <Operation />
              <Operation />
            </div>
          </div>
        </div>
      </Layout>
    </Modal>
  );
};

export default Transactions;
