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
