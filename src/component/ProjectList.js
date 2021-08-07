import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProjectList = ({ image, title, description, children }) => {
  return (
    <Row>
      <Col>
        <h1 className='project-title'>{title}</h1>
      </Col>
      <img src={image} alt='apple valley trench' />
      <Col></Col>

      <p description={description}></p>
      {children}
    </Row>
  );
};

export default ProjectList;
