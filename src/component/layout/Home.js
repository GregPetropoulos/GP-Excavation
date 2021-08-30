import React, { Fragment } from 'react';
import Hero from '../Hero';
import Counter from '../Counter';
import MeetExpert from '../MeetExpert';
import FlipCard from '../FlipCard';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Counter />
      <Row className='expert-spacer'></Row>
      <MeetExpert />
      <FlipCard />
    </Fragment>
  );
};

export default Home;
