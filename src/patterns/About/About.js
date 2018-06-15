import React from 'react';
import styled from 'styled-components';

import Section from '../../components/Section';

const About = Section.extend`
  background: var(--primary-gradient);
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: calc(1rem * var(--base-margin));

  margin-bottom: 0;

  color: var(--secondary-color);

  & ul {
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default () => (
  <About id="about">

    <SkillsList className="list-unstyled">
      <li>
        <h4>Frontend</h4>
        <ul className="list-unstyled">
          <li>HTML</li>
          <li>CSS (BEM)</li>
          <li>Javascript (ES6)</li>
          <li>Wordpress</li>
        </ul>
      </li>

      <li>
        <h4>Native Apps</h4>
        <ul className="list-unstyled">
          <li>React Native</li>
          <li>Redux</li>
        </ul>
      </li>

      <li>
        <h4>UX & Usability</h4>
        <ul className="list-unstyled">
          <li>Pen & paper</li>
          <li>Wireframes</li>
          <li>Browser Prototyping</li>
        </ul>
      </li>

      <li>
        <h4>Stack</h4>
        <ul className="list-unstyled">
          <li>Webpack</li>
          <li>Git</li>
          <li>Node/npm</li>
        </ul>
      </li>

    </SkillsList>
  </About>
);

