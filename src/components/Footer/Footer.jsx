import React from 'react';
import cn from 'classnames';

import style from './Footer.module.scss';

const Footer = () => (
  <footer className={cn(style.Footer)}>
    <div className="container">
      <div className="row py-4">
        <div className="col">
          2020 Intro LLC
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
