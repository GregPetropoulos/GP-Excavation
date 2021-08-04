import React from 'react';
import ReactPlayer from 'react-player';
// import heroVideo from './HeroVideo.mp4'
import heroVideo from '../../videos/HeroVideo.mp4';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className='hero-section'>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
      <div className='hero-overlay'>
        <div className='hero-wrapper-box'>
          <p>
            Build Your <span className='dream'>Dream</span>
          </p>
          <div>

          <p className='hero-message' style={{fontSize:'1rem'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          </div>

          <Link to='/projects'>
            <Button className='discover-button'>Discover</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
