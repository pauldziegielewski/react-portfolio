// Layout.js
import React from 'react';
import Logo from './Logo'; // Adjust the path to Logo component

const Layout = ({ children }) => {
  return (
    <div>
      <Logo />
      {children}
    </div>
  );
};

export default Layout;
