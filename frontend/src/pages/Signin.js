import React from 'react';
import '../scss/pages/Signin.scss';
import Layout from '../components/Layout';
import SignForm from '../components/SignForm';

const Signin = () => {
  return (
    <Layout>
      <div className="signin-container">
        <SignForm />
      </div>
    </Layout>
  );
};

export default Signin;
