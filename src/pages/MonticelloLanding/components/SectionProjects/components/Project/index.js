import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';
import { CustomCollapse } from '../../../../../../components/CustomCollapse';

// ----------------

export const Project = ({ data, firstOrder, secondOrder, columReverse }) => {
    const modify = classNames({
      'project__data-block--first-order': firstOrder,
    });
    const modification = classNames({
        'project__image-wrap--second-order': secondOrder ,
      });
    columReverse = classNames({
        'project__common-wrapper--column-reverse': columReverse ,
      });

    return (
        <div className={`project__common-wrapper ${columReverse}`}>
            <div className={`project__image-wrap ${modification}`}>
                <div
                    className="project__image"
                    style={{ backgroundImage: `url(${data.image})` }}>
                </div>
            </div>
            <div className={`project__data-block ${modify}`}>
                <div className="project__title">{data.title}</div>
                <div className="project__subtitle">{data.subtitle}</div>
                <div className="project__text">{data.text}</div>
                <CustomCollapse>{data.hiddenText}</CustomCollapse>
                <div className="project__adress">
                    <i className="material-icons">location_on</i>
                    {data.adress}
                </div>
            </div>
        </div>
    );
};

// ----------------

// Type of props

Project.propTypes = {
    prop: types.string,
};

// Default value for props

Project.defaultProps = {};
