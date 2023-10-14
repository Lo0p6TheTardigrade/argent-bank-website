import React from 'react';
import '../scss/components/Operation.scss';
import { dataBalance } from '../data/data';
// import { dateOutDisplay } from '../helper/date';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBalance } from '../actions/action';

const Operation = () => {
  const character = '$';
  let balance = useSelector((state) => state.userReducer.balance);
  let seller = useSelector((state) => state.userReducer.seller);
  // let amountIN = useSelector((state) => state.userReducer.amountIN);
  let amountOUT = useSelector((state) => state.userReducer.amountOUT);
  let buyArticles = useSelector((state) => state.userReducer.buyArticles);
  let operationDate = useSelector((state) => state.userReducer.operationDate);
  const dispatch = useDispatch();
  function getBalance() {
    // let afterBalance = balance - amountOUT
    dispatch(setBalance(balance));
  }
  return (
    <div className="operation-container">
      {dataBalance.map((item, index) => (
        <div
          className="operation"
          key={index}>
          <div className="date-container">
            <span className="date-item">{operationDate}</span>
          </div>
          <div className="description-container">
            <span className="description-item">{seller}</span>
            <br />
            <span className="description-item">{buyArticles[1]} </span>
            <br />
            <span className="description-item">{buyArticles[2]} </span>
            <br />
            <span className="description-item">{buyArticles[3]}</span>
          </div>
          <div className="amount-container">
            <span className="amount-item">{character + amountOUT}</span>
          </div>
          <div className="balance-container">
            <span className="balance-item">
              {character + (balance - amountOUT)}
              {getBalance()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Operation;
