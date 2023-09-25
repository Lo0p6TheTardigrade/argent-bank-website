import React from 'react';
import '../scss/pages/Landing.scss';
import Layout from '../components/Layout';
import Main from '../components/Main';

const Landing = () => {
  return (
    <div className="landing-container">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default Landing;
