import React from 'react';
import cn from 'classnames';

import style from './Footer.module.scss';

const Footer = () => (
  <footer className={cn(style.Footer)}>
    <div className="container">
      <div className="row py-4">
        <div className="col">
          &copy; 2020 Intro, Inc. All rights reserved
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
