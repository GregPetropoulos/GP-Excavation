import React from 'react';
import Expert from '../images/expert.jpg';
// import Gpeowner from '../images/gpe-owner.jpeg';
import FieldImage from './FieldImage';

import SocialIcons from './SocialIcons';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
const MeetExpert = () => {
  const ResponsiveExpert = styled.div`
    @media (max-width: 768px) {
    }
  `;
  return (
    <ResponsiveExpert>
      <Row className='expert-row'>
        <Col className='profile-image-wrapper'>
          <img
            className='profile-image'
            src={Expert}
            alt='greg-petropoulos-profile'
          ></img>
          <div className='profile-overlay-icons'>
            <div className='profile-icons-hover'>
              {' '}
              <SocialIcons />
            </div>
          </div>
          <h2> Founder/Owner and Operator.</h2>
          <p className='founder-info'>
            I am Greg Petropoulos loremVoluptate laboris in consectetur laboris
            ut aliqua non fugiat mollit ipsum.
          </p>
        </Col>
        {/* <FieldImage/> */}
      </Row>
    </ResponsiveExpert>
  );
};

export default MeetExpert;
