import React from 'react';
import MeetExpert from '../MeetExpert';
import { Col, Row } from 'react-bootstrap';
import Contact from './Contact';
import desert from '../../images/desert.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Row className='about-wrapper'>
      <Col className='col-meet-expert-on-about-pg'>
        <MeetExpert />
        <Col className='quote-col'>
        <Link to='/quote'>
        <button className='free-quote-btn-global'>Free Quote</button>
      </Link>
        </Col>
      </Col>
      <Col className='about-col1'>
        <h2>About Us</h2>
        <p>
          loremCillum nostrud quis sit eu elit ea velit non. Sunt id quis qui
          aliqua. Ut officia cupidatat duis non eiusmod ea eiusmod sunt esse
          nulla aliqua incididunt ad laboris. Lorem sint ullamco adipisicing
          elit fugiat Lorem ea amet ea proident laboris ullamco amet. Officia
          pariatur id pariatur velit. Ipsum eiusmod consectetur in nostrud
          proident irure incididunt excepteur ad irure in Lorem ut. Labore enim
          nulla incididunt aliqua. Non irure culpa amet quis. Exercitation sint
          reprehenderit sunt laboris consequat. Reprehenderit nostrud minim
          commodo excepteur sunt fugiat. Dolore ipsum aliqua amet ut
          exercitation culpa magna excepteur voluptate non ex minim dolore.
        </p>
        <h2>Our History</h2>
        <p>
          loremCillum nostrud quis sit eu elit ea velit non. Sunt id quis qui
          aliqua. Ut officia cupidatat duis non eiusmod ea eiusmod sunt esse
          nulla aliqua incididunt ad laboris. Lorem sint ullamco adipisicing
          elit fugiat Lorem ea amet ea proident laboris ullamco amet. Officia
          pariatur id pariatur velit. Ipsum eiusmod consectetur in nostrud
          <img className='desert' src={desert} alt='desert' />
          proident irure incididunt excepteur ad irure in Lorem ut. Labore enim
          nulla incididunt aliqua. Non irure culpa amet quis. Exercitation sint
          reprehenderit sunt laboris consequat. Reprehenderit nostrud minim
          commodo excepteur sunt fugiat. Dolore ipsum aliqua amet ut
          exercitation culpa magna excepteur voluptate non ex minim dolore.
        </p>
        <h2>Mission & Vision</h2>
        <p>
          loremCillum nostrud quis sit eu elit ea velit non. Sunt id quis qui
          aliqua. Ut officia cupidatat duis non eiusmod ea eiusmod sunt esse
          nulla aliqua incididunt ad laboris. Lorem sint ullamco adipisicing
          elit fugiat Lorem ea amet ea proident laboris ullamco amet. Officia
          pariatur id pariatur velit. Ipsum eiusmod consectetur in nostrud
          proident irure incididunt excepteur ad irure in Lorem ut. Labore enim
          nulla incididunt aliqua. Non irure culpa amet quis. Exercitation sint
          reprehenderit sunt laboris consequat. Reprehenderit nostrud minim
          commodo excepteur sunt fugiat. Dolore ipsum aliqua amet ut
          exercitation culpa magna excepteur voluptate non ex minim dolore.
        </p>
        <div className='about-spacer'></div>
      <Col>
        <Contact />
      </Col>
      </Col>
    </Row>
  );
};

export default About;
