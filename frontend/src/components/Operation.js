import React from 'react';
import '../scss/components/Operation.scss';
import { dataBalance } from '../data/data';
import { dateOutDisplay } from '../helper/date';

const Operation = () => {
  const character = '$';
  return (
    <div className="operation-container">
      {dataBalance.map((item, index) => (
        <div
          className="operation"
          key={index}>
          <div className="date-container">
            <span className="date-item">{dateOutDisplay(item.operation_1)}</span>
          </div>
          <div className="description-container">
            <span className="description-item">{item.operation_1.out.description.seller}</span>
          </div>
          <div className="amount-container">
            <span className="amount-item">{character + item.operation_1.out.amount}</span>
          </div>
          <div className="balance-container">
            <span className="balance-item">{character + (item.operation_1.bank.balance - item.operation_1.out.amount)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Operation;
