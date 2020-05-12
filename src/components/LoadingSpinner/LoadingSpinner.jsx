import React from 'react';
import cn from 'classnames';

import style from './LoadingSpinner.module.scss';

const LoadingSpinner = () => (
  <div className={cn(style.LoadingSpinner, 'd-flex justify-content-center align-items-center')}>
    <div
      className={cn(style.spinner, 'spinner-border')}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;
