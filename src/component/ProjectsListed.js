import React from 'react';
// import ProjectList from'./layout/Projects';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const ProjectsListed = ({ title, projectImage, description, children }) => {
  return (
    <Row className='photo-grid-row-projects'>
      <Col className='photo-grid-col-projects'>
        {/* <h2>{title}</h2> */}
        <img src={projectImage} alt='greg-projects' className='avt-trench' />
        {/* <p className='description-projects'>{description}</p> */}
        {/* {children} */}
      </Col>
    </Row>
  );
};

export default ProjectsListed;
