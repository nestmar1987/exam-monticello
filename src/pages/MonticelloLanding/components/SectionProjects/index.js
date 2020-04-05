import types from 'prop-types';
import React from 'react';
import { SectionTitle } from '../../../../components/SectionTitle';
import { ContentContainer } from '../../../../components/ContentContainer';
import { firstProject, secondProject } from './data';
import { Project } from './components/Project';


import './styles.scss';

export const SectionProjects = () => {
  return (
    <section className="about">
      <ContentContainer maxWidth="1600">
        <div className="about__content">
          <SectionTitle
            className="about__title"
            fluidWidth
            color="secondary"
            title="What We Do"
          />
          <Project data={firstProject} />
          <Project columReverse firstOrder secondOrder data={secondProject} />
        </div>
      </ContentContainer>
    </section>
  );
};

// ----------------

// Type of props

SectionProjects.propTypes = {
  prop: types.string,
};

// Default value for props

SectionProjects.defaultProps = {};
