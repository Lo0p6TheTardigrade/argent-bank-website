import React from 'react';
import '../scss/components/Banner.scss';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <section className="card-banner-text">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    </div>
  );
};

export default Banner;
