import React from 'react';
import '../scss/pages/Landing.scss';
import Layout from '../components/Layout';
import Main from '../components/Main';

const Landing = () => {
  return (
    <Layout>
      <div className="landing-container">
        <Main />
      </div>
    </Layout>
  );
};

export default Landing;
