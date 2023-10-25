import React from 'react';
import '../scss/components/User.scss';
import Button from './Button';
import Account from './Account';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = ({ isVisible, isVisible2, isVisible3 }) => {
  const firstName = useSelector((state) => state.userReducer.firstName);
  const lastName = useSelector((state) => state.userReducer.lastName);
  const jsx = (
    <section className="section-user">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        <Link to="/profile">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <article className="account">
        <Account isVisible={isVisible} />
        <div className="account-content-wrapper cta">
          <Button isVisible={isVisible} />
        </div>
      </article>
      <article className="account">
        <Account isVisible2={isVisible2} />
        <div className="account-content-wrapper cta">
          <Button isVisible={isVisible} />
        </div>
      </article>
      <article className="account">
        <Account isVisible3={isVisible3} />
        <div className="account-content-wrapper cta">
          <Button isVisible={isVisible} />
        </div>
      </article>
    </section>
  );
  return <div className="section-user-container">{jsx}</div>;
};

export default User;
