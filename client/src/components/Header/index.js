import React from 'react';
import CSS from './Header.css';
import Card from '@material-ui/core/Card';

//Static function for header - For not rendering it not unnecessary
const Header = () => {
  return <h1 className={CSS.title}> Vasts</h1>
};
export default Header;