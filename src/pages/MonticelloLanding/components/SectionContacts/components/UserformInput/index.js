import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const UserformInput = ({
  placeholder,
  name,
  type,
}) => {

  return (
    <div className="userform__wrapper">
    <input
      placeholder={placeholder}
      className="userform"
      type={type}
      autoComplete="none"
    />
    </div>
  );
};

// ----------------

// Type of props

UserformInput.propTypes = {
  placeholder: types.string,
  name: types.string.isRequired,
};

// Default value for props

UserformInput.defaultProps = {
  placeholder: 'Enter',
  type: 'text',
};
