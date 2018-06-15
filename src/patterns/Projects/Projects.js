import React from 'react';
import styled from 'styled-components';

import Section from '../../components/Section';

import projects from './data';

const Projects = Section.extend`
  background-color: rgb(245, 250, 255);
  color: #444;

  @media (min-width: 44em) {
    width: 102%;
  }
`;

export default () => (
  <Projects id="projects" shadow>
    <h2>Projects</h2>

    <ProjectsContainer>
      {projects.map(project => (
        <ProjectItem key={`project-${project.id}`} {...project} />
      ))}
    </ProjectsContainer>
  </Projects>
);

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: calc(4rem * var(--base-margin));
`;

const Item = styled.div`
  margin-bottom: calc(1.5rem * var(--base-margin));

  h3 {
    color: var(--primary-color);
  }

  p {
    line-height: calc(1.1rem * var(--base-height));
  }

  .gallery {
    position: relative;
  
    display: flex;
    align-items: flex-end;
    margin-bottom: calc(1rem * var(--base-height));
  
    border-radius: 4px;
    background: transparent;
  }

  @media(min-width: 32em) {
    .gallery {
      height: 280px;
    }
  }
  
  .gallery:before {
    content: "${props => (props.mobile ? 'App' : 'Web')}";
    position: absolute;
    bottom: 0;
    left: 0;
    padding: .6rem 1rem;
    z-index: 1;

    background: var(--primary-color);
    color: var(--secondary-color);
    font-size: var(--fontSize-80);
  }

  .gallery--muted img {
    filter: saturate(.1);
    transition: all .4s;
  }
  
  .gallery--muted img:hover {
    filter: none;
    transform: scale(1.02);
  }
  
  .gallery img {
    max-width: 100%;
    max-height: ${props => (props.mobile ? '260px' : '200px')};
    margin-right: 5px;
    border-radius: 4px;
  }

  ul {
    font-size: var(--fontSize-80);
  }

  ul * {
    white-space: nowrap;
  }
`;

const Tag = styled.span`
  padding: .2rem .4rem;
  background-color: #AAA;
  color: #FFF;
  border-radius: 4px;
`;

const pathToProjects = require.context('../../assets', true);

const ProjectItem = props => (
  <Item {...props}>
    <div className="gallery gallery--muted">
      {props.image.map(image => (
        <img alt="" src={pathToProjects('./'+image)} key={props.name + image} />
      ))}
    </div>

    <h3>{props.name}</h3>

    <ul className="list-inline list-unstyled">
      {props.tags.map(tag => (
        <li>
          <Tag key={`tag-${tag}`}>{tag}</Tag>
        </li>
      ))}
    </ul>

    <p>{props.desc}</p>
  </Item>
);
