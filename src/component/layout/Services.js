import React, { useState } from 'react';
import ServicesCard from '../ServicesCard';
import { Row, Col } from 'react-bootstrap';

const Services = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Row className='service-card-container' >
    <h1>Services</h1>
        <Row className='service-card-row1'>
      <Col className ='service-card-column'>
        <ServicesCard
          cardIcon={<img src="https://img.icons8.com/ios-filled/50/000000/road-worker.png" alt='construction worker digging'/>}

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
        cardIcon={<i className='fas fa-ruler-combined'></i>}

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
          cardIcon={<img src="https://img.icons8.com/ios-filled/50/000000/tiffin.png" alt='septic tank'/>}
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
      </Row>
      <Row className='service-card-row2'>

      <Col>
        <ServicesCard
          cardIcon={<img src="https://img.icons8.com/ios-filled/50/000000/demolition-excavator.png" alt='wrecking ball'/>}
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
          cardIcon={< img src="https://img.icons8.com/ios-filled/50/000000/jackhammer.png" alt='jackhammer'/>}
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
          cardIcon={ <img src="https://img.icons8.com/ios-glyphs/50/000000/asphalt-paver.png" alt='paver'/>}
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
          </Row>
          {/* </Col> */}
    </Row>
  );
};

export default Services;
