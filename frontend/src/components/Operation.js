import React, { useState } from 'react';
import '../scss/components/Operation.scss';
// import { dataBalance } from '../data/data';
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
  // let isVisible = useSelector((state) => state.userReducer.isVisible);
  const dispatch = useDispatch();
  function getBalance() {
    // let afterBalance = balance - amountOUT
    dispatch(setBalance(balance));
  }
  const [DropdownVisibleItem, setDropdownVisibleItem] = useState(false);
  function visibleItem() {
    setDropdownVisibleItem(!DropdownVisibleItem);
  }
  return (
    <div className="operation-container">
      <div className="operation">
        <div className="date-container">
          <span className="date-item">{operationDate}</span>
        </div>
        <div className="description-container">
          <span className="description-item">{seller}</span>
          <br />
          {DropdownVisibleItem && (
            <div className="description-item-article">
              <span className="description-item">{buyArticles[1]} </span>
              <br />
              <span className="description-item">{buyArticles[2]} </span>
              <br />
              <span className="description-item">{buyArticles[3]}</span>
            </div>
          )}
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
      <div
        className="carret-down-container"
        onClick={visibleItem}>
        <svg
          className="carret-down"
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          width="20px"
          viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </div>
    </div>
  );
};

export default Operation;
