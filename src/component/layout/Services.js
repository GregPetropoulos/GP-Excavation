import React, { useState } from 'react';
import ServicesCard from '../ServicesCard';
import { Row, Col } from 'react-bootstrap';

const Services = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Row className='parent-fliprow' >
        {/* <Col> */}
      <Col>
        <ServicesCard
          cardIcon={<i class='fas fa-ruler-combined'></i>}
          title='Trenching'
          text={
              <ul>
              <li>Utility Trenching</li>
              <li>Small Excavating</li>
              <li>Projects</li>
              <li>Repair Digs</li>
              <li>Concrete removal</li>
              <li>Light Demolition</li>
            </ul>
          }
          onMouseEnter={cardFlipped}
          onMouseLeave={!cardFlipped}
          />
      </Col>
      <Col>
        <ServicesCard
          cardIcon={<i class='fas fa-ruler-combined'></i>}
          title='Grading'
          text={
              <ul>
              <li>Utility Trenching</li>
              <li>Small Excavating</li>
              <li>Projects</li>
              <li>Repair Digs</li>
              <li>Concrete removal</li>
              <li>Light Demolition</li>
            </ul>
          }
          />
      </Col>
      <Col>
        <ServicesCard
          cardIcon={<i class='fas fa-ruler-combined'></i>}
          title='Septic Install'
          text={
              <ul>
              <li>Utility Trenching</li>
              <li>Small Excavating</li>
              <li>Projects</li>
              <li>Repair Digs</li>
              <li>Concrete removal</li>
              <li>Light Demolition</li>
            </ul>
          }
          />
      </Col>
      <Col>
        <ServicesCard
          cardIcon={<i class='fas fa-ruler-combined'></i>}
          title='Land Clearing'
          text={
              <ul>
              <li>Utility Trenching</li>
              <li>Small Excavating</li>
              <li>Projects</li>
              <li>Repair Digs</li>
              <li>Concrete removal</li>
              <li>Light Demolition</li>
            </ul>
          }
          />
      </Col>
      <Col>
        <ServicesCard
          cardIcon={<i class='fas fa-ruler-combined'></i>}
          title='Operate Machine Rental'
          text={
              <ul>
              <li>Utility Trenching</li>
              <li>Small Excavating</li>
              <li>Projects</li>
              <li>Repair Digs</li>
              <li>Concrete removal</li>
              <li>Light Demolition</li>
            </ul>
          }
          />
      </Col>

      <Col>
        <ServicesCard
          cardIcon={<i class='fas fa-ruler-combined'></i>}
          title='Compaction'
          text={
              <ul>
              <li>Utility Trenching</li>
              <li>Small Excavating</li>
              <li>Projects</li>
              <li>Repair Digs</li>
              <li>Concrete removal</li>
              <li>Light Demolition</li>
            </ul>
          }
          />
      </Col>
          {/* </Col> */}
    </Row>
  );
};

export default Services;
