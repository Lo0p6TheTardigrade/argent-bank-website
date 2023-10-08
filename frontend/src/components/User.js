import React from 'react';
import '../scss/components/User.scss';
import Button from './Button';
import Account from './Account';
import { Link } from 'react-router-dom';

const User = ({ isVisible, isVisible2, isVisible3 }) => {
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
        <article className="account">
          <Account isVisible={isVisible} />
          <div className="account-content-wrapper cta">
            <Button />
          </div>
        </article>
        <article className="account">
          <Account isVisible2={isVisible2} />
          <div className="account-content-wrapper cta">
            <Button />
          </div>
        </article>
        <article className="account">
          <Account isVisible3={isVisible3} />
          <div className="account-content-wrapper cta">
            <Button />
          </div>
        </article>
      </section>
      <section className="section-user-not-logged">
        <div className="user-not-logged-title-container">
          <h1 className="user-not-logged-title">Erreur</h1>
        </div>
        <div className="user-not-logged-info-container">
          <p className="user-not-logged-info">Vous n'êtes pas connecté</p>
        </div>
        <div className="user-not-logged-link-container">
          <Link to="/login">Cliquez ici pour vous connecter</Link>
        </div>
      </section>
    </div>
  );
};

export default User;
