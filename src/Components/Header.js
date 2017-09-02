import React from 'react';

import customHeaderCSS from './../css/ComponentsStyles/customHeader.css';
import reactLogo from './../css/img/react-logo.png';
import bootstrapLogo from './../css/img/bootstrap-logo.png';
export const Header = () => {
  return (
    <header>
      <h1 className="header__h1 text-center">Markdown Previewer</h1>
      <div className="div--logo">
        <a href="https://facebook.github.io/react/" target="_blank"><img src={reactLogo} className="img--technologylogo" alt="React Icon" /></a>
        <a href="https://v4-alpha.getbootstrap.com/" target="_blank"><img src={bootstrapLogo} className="img--technologylogo" alt="React Icon" /></a>
      </div>
    </header>
  );
};
