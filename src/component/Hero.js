import React from 'react';
import ReactPlayer from 'react-player';
// import heroVideo from './HeroVideo.mp4'
import heroVideo from '../videos/HeroVideo.mp4';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Hero = () => {
  const HideDesktopHero = styled.div`
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return (
    <HideDesktopHero>
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
              <p className='hero-message' style={{ fontSize: '1rem' }}>
              Why Choose Us?
From residential back yards , to sub division utility excavation. Every project is finished safely in a timely manner. 
              </p>
            </div>
            <Link to='/projects'>
              <button className='discover-button'>Discover</button>
            </Link>
          </div>
        </div>
      </section>
    </HideDesktopHero>
  );
};

export default Hero;
