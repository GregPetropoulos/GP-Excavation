import React from 'react';
import MeetExpert from '../MeetExpert';
import { Col, Container, Row } from 'react-bootstrap';
import desert from '../../images/desert.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const About = () => {
  const ResponsiveAbout = styled.div`
  @media (max-width:620px){
display:flex;
flex-direction:column;
justify-content;center;
width:100vw;
.about-middle-row{
  display:flex;
  flex-direction:column-reverse;
  width:100vw;
}
.desert{
  // margin-right:20px;
}
.history-col{
  // width:100vw;
}
  }`;
  return (
    <ResponsiveAbout>
      <Container>
        <Row className='about-wrapper'>
          <Row className='about-toprow'>
            <Col>
              <h2>About Us</h2>
              <p>
                loremCillum nostrud quis sit eu elit ea velit non. Sunt id quis
                qui aliqua. Ut officia cupidatat duis non eiusmod ea eiusmod
                sunt esse nulla aliqua incididunt ad laboris. Lorem sint ullamco
                adipisicing elit fugiat Lorem ea amet ea proident laboris
                ullamco amet. Officia pariatur id pariatur velit. Ipsum eiusmod
                consectetur in nostrud proident irure incididunt excepteur ad
                irure in Lorem ut. Labore enim nulla incididunt aliqua. Non
                irure culpa amet quis. Exercitation sint reprehenderit sunt
                laboris consequat. Reprehenderit nostrud minim commodo excepteur
                sunt fugiat. Dolore ipsum aliqua amet ut exercitation culpa
                magna excepteur voluptate non ex minim dolore.
              </p>
            </Col>
          </Row>
          <Row className='about-middle-row'>
            <Col className='col-meet-expert-on-about-pg'>
              <MeetExpert />
            </Col>
            {/* <Col className='about-col-spacer'>width maker</Col> */}
            <Col className='history-col'>
              <h2>Our History</h2>
              <p>
                loremCillum nostrud quis sit eu elit ea velit non. Sunt id quis
                qui aliqua. Ut officia cupidatat duis non eiusmod ea eiusmod
                sunt esse nulla aliqua incididunt ad laboris. Lorem sint ullamco
                adipisicing elit fugiat Lorem ea amet ea proident laboris
                ullamco amet. Officia pariatur id pariatur velit. Ipsum eiusmod
                consectetur in nostrud
                <img className='desert' src={desert} alt='desert' />
                proident irure incididunt excepteur ad irure in Lorem ut. Labore
                enim nulla incididunt aliqua. Non irure culpa amet quis.
                Exercitation sint reprehenderit sunt laboris consequat.
                Reprehenderit nostrud minim commodo excepteur sunt fugiat.
                Dolore ipsum aliqua amet ut exercitation culpa magna excepteur
                voluptate non ex minim dolore.
              </p>
            </Col>
          </Row>
          <Row className='about-bottom-row'>
            <Col>
              <h2>Mission & Vision</h2>
              <p>
                loremCillum nostrud quis sit eu elit ea velit non. Sunt id quis
                qui aliqua. Ut officia cupidatat duis non eiusmod ea eiusmod
                sunt esse nulla aliqua incididunt ad laboris. Lorem sint ullamco
                adipisicing elit fugiat Lorem ea amet ea proident laboris
                ullamco amet. Officia pariatur id pariatur velit. Ipsum eiusmod
                consectetur in nostrud proident irure incididunt excepteur ad
                irure in Lorem ut. Labore enim nulla incididunt aliqua. Non
                irure culpa amet quis. Exercitation sint reprehenderit sunt
                laboris consequat. Reprehenderit nostrud minim commodo excepteur
                sunt fugiat. Dolore ipsum aliqua amet ut exercitation culpa
                magna excepteur voluptate non ex minim dolore.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </ResponsiveAbout>
  );
};

export default About;
