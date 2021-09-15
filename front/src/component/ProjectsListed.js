import React from 'react';
// import ProjectList from'./layout/Projects';
import { Container } from 'react-bootstrap';

const ProjectsListed = ({ title, projectImage, description, children }) => {
  return (
    <Container className='photo-container'>
      <div className='project-row'>
        <div className='container'>
          <img
            src={projectImage}
            alt='construction-projects'
            className='image'
          />
          <div className='middle'>
            <div className='text'>{description}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectsListed;
