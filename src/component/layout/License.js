import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
const License = () => {
  const ResponsiveTable = styled.div`
    @media (max-width: 395px) {
      .table-state-col,
      .table-name-col {
        font-size: 0.8rem;
      }
    }
  `;
  return (
    <ResponsiveTable>
      <h1 style={{ textAlign: 'center' }}>License</h1>
      <Row className='row1-license'>
        <Col className='license-col1'>
          <Col>#</Col>
          <Col className='table-row-number'>1</Col>
          <Col className='table-row-number'>2</Col>
          <Col className='table-row-number'>3</Col>
        </Col>
        <Col className='license-col2'>
          <Col>
            <h3>Name</h3>
          </Col>
          <Col className='table-name-col'>C-12 Earthwork & Paving</Col>
          <Col className='table-name-col'>General Building License</Col>
          <Col className='table-name-col'>Class A Drivers 
          License</Col>
        </Col>
        <Col className='license-col3'>
          <Col>
            <h3>State</h3>
          </Col>
          <Col className='table-state-col'>California</Col>
          <Col className='table-state-col'>California</Col>
          <Col className='table-state-col'>California</Col>
        </Col>
        <Col className='license-col4'>
          <Col>
            <h3>License</h3>
          </Col>
          <Col className='table-name-col'>1077426</Col>
          <Col className='table-name-col'>1061001</Col>
          <Col className='table-name-col' >xxx300</Col>
        </Col>
      </Row>
      <h1 style={{ textAlign: 'center' }}>Certifications</h1>
      <Row className='row1-license'>
        <Col className='license-col1'>
          <Col>#</Col>
          <Col className='table-row-number'>1</Col>
          <Col className='table-row-number'>2</Col>
        </Col>
        <Col className='license-col2'>
          <Col>
            <h3>Name</h3>
          </Col>
          <Col className='table-name-col'>OSHA 30 Hour</Col>
          <Col className='table-name-col'>OSHA Trench & Excavation</Col>
        </Col>
        <Col className='license-col3'>
          <Col>
            <h3>State</h3>
          </Col>
          <Col className='table-state-col'>California</Col>
          <Col className='table-state-col'>California</Col>
        </Col>
        <Col className='license-col4'>
          <Col>
            <h3>License</h3>
          </Col>
          <Col className='table-name-col'>xxxxxx</Col>
          <Col className='table-name-col'>xxxxxx</Col>
        </Col>
      </Row>
        <p style={{ textAlign: 'center' }}>**Certificate of insurance available upon request per accepted work</p>
    </ResponsiveTable>
  );
};

export default License;
