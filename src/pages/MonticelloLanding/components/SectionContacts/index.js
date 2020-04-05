import types from 'prop-types';
import React from 'react';
import { Footer } from '../../../../components/Footer';
import ContactsMap from './components/ContactsMap';
import {ContactsCard} from './components/ContactsCard';
import data from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionContacts = () => {
    return (
        <section className="contacts">
            <ContactsMap />
            <ContactsCard data={data}/>
            <Footer />
        </section>
    );
};

// ----------------

// Type of props

SectionContacts.propTypes = {
    prop: types.string,
};

// Default value for props

SectionContacts.defaultProps = {};
