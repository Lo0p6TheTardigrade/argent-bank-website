import React from 'react';
import '../scss/components/Button.scss';
import Transactions from './Transactions';
import { setIsOpen } from '../actions/action';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/';
import { Link } from 'react-router-dom';

const Button = ({ isVisible, isVisible2, isVisible3 }) => {
  const isOpen = useSelector((state) => state.userReducer.isOpen);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setIsOpen(!isOpen));
    console.log(dispatch(setIsOpen(!isOpen)));
  };
  return (
    <div className="btn-container">
      {isVisible && (
        <button
          className="transaction-button"
          onClick={handleButtonClick}>
          View transactions
        </button>
      )}
      {isVisible2 && (
        <button
          type="submit"
          className="validation-button">
          Save
        </button>
      )}
      {isVisible3 && (
        <Link to="/home">
          <button
            className="cancel-button"
            // onClick={}
          >
            Cancel
          </button>
        </Link>
      )}
      {isOpen && <Transactions isOpen={isOpen} />}
    </div>
  );
};

export default Button;
