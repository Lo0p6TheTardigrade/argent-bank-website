import React from 'react';
import '../scss/components/Banner.scss';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <section className="card-banner-text">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    </div>
  );
};

export default Banner;
