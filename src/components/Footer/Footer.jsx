import React from 'react';
import cn from 'classnames';

import style from './Footer.module.scss';

const Footer = () => (
  <footer className={cn(style.Footer)}>
    <div className="container py-4">
      <div className="row">
        <div className={cn(style.linkSection, 'col-6')}>
          <div className="text-secondary font-weight-bold">Policies</div>
          <a href="/">
            <div>Terms of Use</div>
          </a>
          <a href="/">
            <div>Privacy Policy</div>
          </a>
        </div>
        <div className={cn(style.linkSection, 'col-6')}>
          <div className="text-secondary font-weight-bold">Social</div>
          <a href="/">
            <div>Facebook</div>
          </a>
          <a href="/">
            <div>Instagram</div>
          </a>
          <a href="/">
            <div>Twitter</div>
          </a>
        </div>
        <div className="col-12 text-muted">
          <hr />
          &copy; 2020 Intro, Inc. All rights reserved
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
