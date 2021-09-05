import React from 'react';
import Expert from '../images/expert.jpg';
import { Col, Row } from 'react-bootstrap';
import SocialIcons from './SocialIcons';
const MeetExpert = () => {
  return (
    <>
    <div className='profile-image-wrapper'>

      <img className='profile-image' src={Expert} alt='greg-profile'></img>
      <div className='profile-overlay-icons'>
        <div className='profile-icons-hover'>
          {' '}
          {/* <Col className='navbar-icons'>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-linkedin'></i>
          </Col> */}
          <SocialIcons/>
        </div>
      </div>
      <h2> Founder/Owner and Operator.</h2>
      <section>
        I am Greg Petropoulos loremVoluptate laboris in consectetur laboris ut aliqua non fugiat
        mollit ipsum.
      </section>
      {/* </Col> */}
      {/* </Row> */}
    </div>
    </>
  );
};

export default MeetExpert;
