import React from 'react';
import '../scss/components/Main.scss';
import Banner from './Banner';

const Main = () => {
  return (
    <>
      <Banner />
      <div className="main-container">
        <div className="main"></div>
      </div>
    </>
  );
};

export default Main;
