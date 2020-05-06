import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';

// Styles

import './styles.scss';
import { HeroSlider } from './components/HeroSlider';
import {description} from './data'
import { HeroCard } from './components/HeroCard';
import {FontIcon} from '../../../../components/FontIcon';
import { Link } from 'react-scroll';



// ----------------

export const SectionHero = props => {
  // Render

  return (
    <section className="hero">
      <ContentContainer maxWidth="1600">
        <div className="hero__content">
          <HeroSlider className="hero__slider">
            {description.map(item => {
              return (
                <HeroCard title={item.title} subtitle={item.subtitle} key={item.id}/>
              )
            })}
          </HeroSlider>
          
            <div className="btn-scroll-down">
              <Link to='about' smooth={true}>
            <FontIcon icon="keyboard_arrow_down" size={'sm'}/>
           </Link> 
           </div>
         
          </div>
      </ContentContainer>
    </section>
  );
};

// ----------------

// Type of props

SectionHero.propTypes = {
  prop: types.string,
};

// Default value for props

SectionHero.defaultProps = {};
