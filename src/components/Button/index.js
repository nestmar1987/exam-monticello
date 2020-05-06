import React from 'react';
import classNames from 'classnames';

// Styles

import './styles.scss';

const Button = ({ children, withBorder,borderColor, smallSize, largeSize, bigSize }) => {
  const modify = classNames({
    'button--with-border': withBorder,
    [`button--border-${borderColor}`]: borderColor,
    'button--small-size': smallSize,
    'button--large-size': largeSize,
    'button--big-size': bigSize,
  
  });

  return <button className={`button ${modify}`}>{children}</button>;
};

export default Button;
