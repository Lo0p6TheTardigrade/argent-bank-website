import React from 'react';
import '../scss/components/Button.scss';
import Transactions from './Transactions';
import { setIsOpen } from '../actions/action';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/';

const Button = () => {
  const isOpen = useSelector((state) => state.userReducer.isOpen);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsOpen(!isOpen));
    console.log(dispatch(setIsOpen(!isOpen)));
  };
  return (
    <div className="btn-container">
      <button
        className="transaction-button"
        onClick={handleButtonClick}>
        View transactions
      </button>
      {isOpen && <Transactions isOpen={isOpen} />}
    </div>
  );
};

export default Button;
