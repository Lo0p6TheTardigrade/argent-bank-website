import React from 'react';
import '../scss/components/Button.scss';
import { Link } from 'react-router-dom';

const Button = ({ isVisible, isVisible2, isVisible3 }) => {
  return (
    <div className="btn-container">
      {isVisible && <button className="transaction-button">View transactions</button>}
      {isVisible2 && (
        <Link to="/home">
          <button
            type="submit"
            className="validation-button">
            Save
          </button>
        </Link>
      )}
      {isVisible3 && (
        <Link to="/home">
          <button className="cancel-button">Cancel</button>
        </Link>
      )}
    </div>
  );
};

export default Button;
