import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectsListed from '../ProjectsListed';
import Contact from './Contact';

import appleValleyTrench from '../../images/apple-valley-utility-trench.jpeg';
import bobcat from '../../images/bobcat.jpeg';
import septic from '../../images/septic.jpeg';
import compaction from '../../images/compaction.jpeg';
import grading from '../../images/grading.jpeg';
import rental from '../../images/rental.jpeg';
import landClearing from '../../images/land-clearing.jpeg';

const Projects = () => {
  return (
    <>
      <Row className='main-photo-row-projects'>
        {/* <Col> */}
          <ProjectsListed
            title='Utility Trench Work'
            projectImage={appleValleyTrench}
            description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
          />
        {/* </Col> */}
        {/* <Col> */}
          <ProjectsListed
            title='Equipment'
            projectImage={grading}
            description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
          />
        {/* </Col> */}
        {/* <Col> */}
          <ProjectsListed
            title='Compaction'
            projectImage={septic}
            description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
          />
        {/* </Col> */}
      </Row>
      <Row className='main-photo-row-projects'>
        {/* <Col> */}
          <ProjectsListed
            title='Septic Install'
            projectImage={landClearing}
            description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
          />
        {/* </Col> */}
        {/* <Col> */}
          <ProjectsListed
            title='Compaction'
            projectImage={rental}
            description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
          />
        {/* </Col> */}
        {/* <Col> */}
          <ProjectsListed
            title='Compaction'
            projectImage={compaction}
            description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
          />
        {/* </Col> */}
      </Row>
    </>
  );
};

export default Projects;
