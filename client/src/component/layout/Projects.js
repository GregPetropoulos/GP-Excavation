import React from 'react';
import {Row} from 'react-bootstrap';
import ProjectsListed from '../ProjectsListed';

import appleValleyTrench from '../../images/apple-valley-utility-trench.jpeg';
import bobcat from '../../images/bobcat.jpeg';
import septic from '../../images/septic.jpeg';
import compaction from '../../images/compaction.jpeg';
import grading from '../../images/grading.jpeg';
import rental from '../../images/rental.jpeg';
import landClearing from '../../images/land-clearing.jpeg';
// import Carousel from '../Carousel'
const Projects = ({ items }) => {
  return (
    <>
      {/* <Carousel items={items}/> */}
      <Row className='main-photo-row-projects'>
        <ProjectsListed
          title='Utility Trench Work'
          projectImage={appleValleyTrench}
          description='GP Excavation hard at work for the Utility company.
          Safety is always our first concern prior to breaking ground.'
        />
        <ProjectsListed
          title='Equipment'
          projectImage={grading}
          description='Sit Lorem sint tempor et irure ad ea mollit
                      minim quis velit mollit adipisicing.Quis sint in ea proident. 
                      Nulla velit adipisicing elit'
        />
        <ProjectsListed
          title='Compaction'
          projectImage={septic}
          description='Sit Lorem sint tempor et irure ad ea mollit
          minim quis velit mollit adipisicing.Quis sint in ea proident. 
          Nulla velit adipisicing elit'
        />
      </Row>
      <Row className='main-photo-row-projects'>
        {/* <Col> */}
        <ProjectsListed
          title='Septic Install'
          projectImage={landClearing}
          description='Sit Lorem sint tempor et irure ad ea mollit
          minim quis velit mollit adipisicing.Quis sint in ea proident. 
          Nulla velit adipisicing elit'
        />
        <ProjectsListed
          title='Compaction'
          projectImage={rental}
          description='Sit Lorem sint tempor et irure ad ea mollit
          minim quis velit mollit adipisicing.Quis sint in ea proident. 
          Nulla velit adipisicing elit'
        />
        <ProjectsListed
          title='Compaction'
          projectImage={compaction}
          description='Sit Lorem sint tempor et irure ad ea mollit
          minim quis velit mollit adipisicing.Quis sint in ea proident. 
          Nulla velit adipisicing elit'
        />
        <ProjectsListed
          title='Compaction'
          projectImage={bobcat}
          description='Sit Lorem sint tempor et irure ad ea mollit
          minim quis velit mollit adipisicing.Quis sint in ea proident. 
          Nulla velit adipisicing elit'
        />
      </Row>
    </>
  );
};

export default Projects;
