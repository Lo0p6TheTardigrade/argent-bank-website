import React from 'react';
import '../scss/components/Error.scss';
import { Link, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Error = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const unauthorized = (
    <section className="section-user-not-logged">
      <div className="user-not-logged-title-container">
        <h1 className="user-not-logged-title">Erreur</h1>
      </div>
      <div className="user-not-logged-info-container">
        <p className="user-not-logged-info">Vous n'êtes pas connecté</p>
      </div>
      <div className="user-not-logged-link-container">
        <div className="user-not-logged-link-go-login">
          <Link to="/login">Cliquez ici pour vous connecter</Link>
        </div>
        <div className="user-not-logged-link-go-home">
          <Link to="/">Retourner à l'acceuil</Link>
        </div>
      </div>
    </section>
  );
  const badRequest = (
    <div className="bad-request">
      <h1 className="bad-request-title">ERREOR 404 BAD REQUEST</h1>
    </div>
  );
  return (
    <div className="error-container">
      {!isLoggedIn && unauthorized}
      {!(<Route to="*" />) && badRequest}
    </div>
  );
};

export default Error;
