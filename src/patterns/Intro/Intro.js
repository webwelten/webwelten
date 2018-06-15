import React from 'react';
import styled from 'styled-components';

import Section from '../../components/Section';

const Intro = Section.extend`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: rgb(245, 250, 255);
  background: var(--primary-gradient);
  color: var(--secondary-color);

  height: 100vh;
`;

const IntroBlockquote = styled.blockquote`
  font-size: var(--fontSize-40);
  color: #CCC;

  & footer {
    margin-left: calc(1rem * var(--base-margin));
    opacity: .5;
    font-size: var(--fontSize-50);
  }
`;

export default () => (
  <Intro>
    <IntroBlockquote>
      <p>
        „You see things; and you say 'Why?'<br />
        But I dream things that never were; and I say 'Why not?'”
      </p>
      <footer>
        —&nbsp;
        <cite>
          George Bernard Shaw
        </cite>
      </footer>
    </IntroBlockquote>
  </Intro>
);
