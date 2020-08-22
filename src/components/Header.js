import React from 'react';

// Este componente recibe propiedades ( {titulo} ) mediante props :D

const Header = ({titulo}) => (
  <header>
    <h1> {titulo} </h1>
  </header>
);

export default Header;