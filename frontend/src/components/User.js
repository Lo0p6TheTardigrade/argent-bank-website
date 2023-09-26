import React, { useState } from 'react';
import '../scss/components/User.scss';
import Button from './Button';
import Account from './Account';

const User = () => {
  const [isVisible] = useState(true);
  const [isVisible2] = useState(true);
  const [isVisible3] = useState(true);
  return (
    <div className="section-user-container">
      <section className="section-user">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <Account isVisible={isVisible} />
          <div className="account-content-wrapper cta">
            <Button />
          </div>
        </section>
        <section className="account">
          <Account isVisible2={isVisible2} />
          <div className="account-content-wrapper cta">
            <Button />
          </div>
        </section>
        <section className="account">
          <Account isVisible3={isVisible3} />
          <div className="account-content-wrapper cta">
            <Button />
          </div>
        </section>
      </section>
    </div>
  );
};

export default User;
