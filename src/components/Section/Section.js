import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: calc(1rem * var(--base-margin));

  @media(min-width: 40em) {
    padding: 3rem;
  }

  box-shadow: ${props => (props.shadow ? '0px 1px 5px 0px rgba(0, 0, 0, .4)' : '')};
`;

export default Section;
