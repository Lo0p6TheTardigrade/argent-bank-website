import React from 'react';
import '../scss/pages/Signin.scss';
import Layout from '../components/Layout';
import SignForm from '../components/SignForm';

const Signin = () => {
  return (
    <div className="signin-container">
      <Layout>
        <SignForm />
      </Layout>
    </div>
  );
};

export default Signin;
