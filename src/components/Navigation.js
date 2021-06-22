import React from 'react';
import NavBar from './resuable/NavBar';

const titles = [
  'Homepage',
  'About Us',
  'Products',
  'Contact Us',
];

const Navigation = () => {
  return (
    <NavBar
      titles={titles}
      darkTheme={true}
      textColor="orange"
    />
  );
};

export default Navigation;
