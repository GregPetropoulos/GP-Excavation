import React, { Fragment } from 'react';
import Hero from '../Hero';
import Footer from '../Footer';
import Counter from '../Counter';
import MeetExpert from '../MeetExpert';
import FlipCard from '../FlipCard';
import { Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Counter />
      <Row className='expert-spacer'></Row>
      <MeetExpert />
      <FlipCard />
      <Footer />
    </Fragment>
  );
};

export default Home;
