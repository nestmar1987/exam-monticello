import React from 'react';

// Components

import { SectionHero } from './components/SectionHero';
import { SectionNews } from './components/SectionNews';
import { Header } from './components/Header';
import { SectionProjects } from './components/SectionProjects';
import { SectionGallery } from './components/SectionGallery';
import { SectionContacts } from './components/SectionContacts';
import {ButtonUp} from '../../components/ButtonUp';

// Styles

import './styles.scss';


// --------------------

export const MonticelloLanding = () => {
  return (
    <div className="landing">
      <Header />
      <SectionHero />
      <SectionProjects />
      <SectionNews />
      <SectionGallery />
      <SectionContacts />
      <div className="landing__button-up-wrapper"> 
        <ButtonUp />
      </div>
    </div>
  );
};
