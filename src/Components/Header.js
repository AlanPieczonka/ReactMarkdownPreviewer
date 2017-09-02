import React from 'react';

import customHeaderCSS from './../css/ComponentsStyles/customHeader.css';
import reactLogo from './../css/img/react-logo.png';

export const Header = () => {
  return (
    <header>
      <h1 className="header__h1 text-center">Markdown Previewer</h1>
      <h2 className="header__h2 text-center">
        Made with <span className="span span--react">React</span>
      </h2>
      <img src={reactLogo} className="img--reactlogo" alt="React Icon" />
    </header>
  );
};
