import React from 'react';
import '../scss/components/Layout.scss';

const Layout = (prop) => {
  return <div className="layout-container">{prop.children}</div>;
};

export default Layout;
