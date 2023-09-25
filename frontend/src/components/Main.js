import React from 'react';
import '../scss/components/Main.scss';
import Banner from './Banner';
import Section from './Section';

const Main = () => {
  return (
    <>
      <Banner />
      <div className="main-container">
        <div className="main">
          <Section />
        </div>
      </div>
    </>
  );
};

export default Main;
