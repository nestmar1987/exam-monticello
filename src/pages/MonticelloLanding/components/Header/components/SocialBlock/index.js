import types from 'prop-types';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

// Styles

import './styles.scss';


// ----------------

export const SocialBlock = () => {
  // Render

        return (
          <div className="social-block">
          <a
            className={`social-icon__wrapper-facebook`}
            target="_blank"
            href={'https://www.facebook.com/'}
            rel="noopener noreferrer"
            key={1}
          >
            <FaFacebookF className= {`social-icon__facebook`} />
          </a>

          <a
            className={`social-icon__wrapper-twitter`}
            target="_blank"
            href={'https://www.twitter.com/'}
            rel="noopener noreferrer"
            key={2}
          >
            <FaTwitter className= {`social-icon__twitter`} />
          </a>

          <a
            className={`social-icon__wrapper-instagram`}
            target="_blank"
            href={'https://www.instagram.com/'}
            rel="noopener noreferrer"
            key={2}
          >
            <FaInstagram className= {`social-icon__instagram`} />
          </a>
    </div>
  );
};

// ----------------

// Type of props

SocialBlock.propTypes = {
  links: types.array.isRequired,
};

// Default value for props

SocialBlock.defaultProps = {};
