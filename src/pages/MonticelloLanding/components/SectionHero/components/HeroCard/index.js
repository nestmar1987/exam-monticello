import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const HeroCard = ({
  title,
  subtitle
  
}) => {
  
  return (
    <div className='hero-card'>
          <div className="hero-card__title">{title}</div>
          <div className="hero-card__subtitle">{subtitle}</div>    
      </div>
  );
};

// ----------------

// Type of props

HeroCard.propTypes = {
  title: types.string,
  subtitle: types.string,
};

// Default value for props

HeroCard.defaultProps = {};
