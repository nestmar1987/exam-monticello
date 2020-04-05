import types from 'prop-types';
import React from 'react';
import Button from '../../../../../../components/Button';
import { SectionTitle } from '../../../../../../components/SectionTitle';
import { UserformInput } from '../UserformInput';

// Styles

import './styles.scss';

// ----------------

export const ContactsCard = ({ data }) => {
    return (
        <div className="contacts-card">
            <SectionTitle
                className="contacts__title"
                fluidWidth
                color="secondary"
                title="Get In Touch"
            />
            <div className="contacts-card__common-wrap">
                <div className="contacts-card__data-wrap">
                <div className="contacts-card__contact-wrap">
                    <div>
                        <i className="material-icons">location_on</i>
                    </div>
                    <span>{data.adress}</span>
                </div>
                <div className="contacts-card__contact-wrap">
                    <div>
                        <i className="material-icons">phone</i>
                    </div>
                    <span>{data.phone}</span>
                </div>
                <div className="contacts-card__contact-wrap">
                    <div>
                        <i className="material-icons">drafts</i>
                    </div>
                    <span>{data.email}</span>
                </div>
                <div className="contacts-card__contact-wrap">
                    <div>
                        <i className="material-icons">query_builder</i>
                    </div>
                    <span>{data.timetable}</span>
                </div>
                </div>
                <div className="contacts-card__form-wrap">
                    <UserformInput 
                     placeholder="Username"
                     name="Username"
                     type="Username"/>
                    <UserformInput 
                     placeholder="Email"
                     name="Email"
                     type="Email"/>
                <div className="contacts-card__btn-wrap">
                    <Button withBorder borderColor smallSize>
                        Submit
                    </Button>
                </div>
                </div>
            </div>
        </div>
    );
};

// ----------------

// Type of props

ContactsCard.propTypes = {
    data: types.array.isRequired,
};

// Default value for props

ContactsCard.defaultProps = {};
