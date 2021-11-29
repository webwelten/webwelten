import React from 'react';

import Section from '../../components/Section';

import image from './assets/michael-abt-foto.256x256.jpg';

const Profile = Section.extend`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(1rem * var(--base-margin));

  background-color: var(--secondary-color);
  color: var(--secondary-text);

  @media(min-width: 34em) { 
    grid-template-columns: 1fr 3fr;
  }
  
  @media(min-width: 1200px) { 
    width: 102%;
  }
`;

export default () => (
  <Profile id="profile" shadow>

    <div>
      <img src={image} className="responsive" alt="" />
    </div>

    <div>
      <h2 className="">Hey, my name is Michael Abt</h2>
      <h3>My passion is Web development with focus on frontend, usability and UX with 10 years of professional experience.</h3>
      <ul className="list-inline list-unstyled mb-0">
        <li><a href="https://www.xing.com/profile/Michael_Abt7">XING</a></li>
        <li><a href="https://github.com/webwelten">Github</a></li>
        <li><a href="https://stackoverflow.com/users/5339853/webwelten">Stackoverflow</a></li>
      </ul>
    </div>

  </Profile>
);
