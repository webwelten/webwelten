import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: calc(1rem * var(--base-margin));
  text-align: center;
`;

export default () => (
  <Footer>
    <small>
      <h5 className="mb-0">Angaben gemäß § 5 TMG</h5>
      Michael Abt, Heinz-Galinski-Str. 16, 
      13347 Berlin<br />
      <a href="mailto:&#109;&#046;&#097;&#098;&#116;&#064;&#119;&#101;&#098;&#119;&#101;&#108;&#116;&#101;&#110;&#046;&#099;&#111;&#109;">
        &#109;&#046;&#097;&#098;&#116;&#064;&#119;&#101;&#098;&#119;&#101;&#108;&#116;&#101;&#110;&#046;&#099;&#111;&#109;
      </a>
    </small>
  </Footer>
);
