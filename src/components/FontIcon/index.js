import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const FontIcon = ({
  rotate180,
  iconColor,
  rotate45,
  rotate90,
  onClick,
  library,
  icon,
  size,
  style,
  bgColorOnHover,
  whitoutBorder
}) => {
  // Modify styles

  const modify = classNames({
    ' font-icons--rotate180': rotate180,
    [` font-icons--${size}`]: size,
    ' font-icons--rotate45': rotate45,
    ' font-icons--rotate90': rotate90,
    [` font-icons--color-${iconColor}`]: iconColor,
    ' font-icons--whitoutBorder': whitoutBorder,
    ' font-icons--bgColorOnHover': bgColorOnHover,


  });

  // Render

  return (
    <i
      className={`${library} font-icons${modify}`}
      style={style}
      onClick={onClick}
    >
      {icon}
    </i>
  );
};

// ----------------

// Type of props

FontIcon.propTypes = {
  iconColor: types.oneOf(['initial', 'green']),
  rotate180: types.bool,
  rotate45: types.bool,
  rotate90: types.bool,
  library: types.string.isRequired,
  onClick: types.func,
  icon: types.string.isRequired,
  size: types.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
    'max',
  ]),
};

// Default value for props

FontIcon.defaultProps = {
  iconColor: 'initial',
  library: 'material-icons',
  size: 'md',
};
