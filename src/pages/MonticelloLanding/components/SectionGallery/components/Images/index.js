import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';



export const Images = ({images, imgrevers}) => {

  const modify = classNames({
    "images-wrapper-revers": imgrevers,
  });

  return <div className={`images-wrapper ${modify}`}>
    <div className="image--big" style={{backgroundImage:`url(${images.firstImg})`, backgroundPosition:'center'}}>
      <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.fourthImg})`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.secondImg })`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.fifthImg})`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
    <div className="image" style={{backgroundImage:`url(${images.thirdImg})`}}>
    <div className="image__add-button">
        <div></div>
        <div></div>
        <div>360&deg;</div>
      </div>
    </div>
  </div>;
};



// Type of props

Images.propTypes = {
  prop: types.string,
};

// Default value for props

Images.defaultProps = {};
