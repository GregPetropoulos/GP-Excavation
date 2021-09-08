import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const FlipCard = () => {
  const ResponsiveFlipCard = styled.div`

  @media (max-width: 700px) {
    .services-title
    .service-card-container {
width:100vw;
display:flex;
justify-content:center;
    }
    .flipcard-row1 {
    display: flex;
    flex-direction:column;
    justify-content: center;

    }
    .flipcard-row2{
      display: flex;
    flex-direction:column;
    justify-content: center;
    }
    .flip-card-col{
      display:flex;
      justify-content:center;
align-items:center;
    }
  }`;
  return (
    <>
    <ResponsiveFlipCard>

      <Row className='service-card-container'>
        <h1  className= 'services-title' style={{ textAlign: 'center' }}>Services</h1>
        <Row className='flipcard-row1'>
          <Col className='flip-card-col'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  {/* <img src="img_avatar.png" alt="Avatar" style={{width:'300px', height:'300px'}}/> */}
                  <img
                    src='https://img.icons8.com/ios-filled/50/000000/road-worker.png'
                    alt='construction worker digging'
                    />
                  <p>Trenching</p>
                </div>
                <div className='flip-card-back'>
                  <h1 style={{ lineHeight: '.9' }}>GP Excavation</h1>
                  <p>Utility Trenching</p>
                  <Col className='quote-col'>
                    <Link to='/quote'>
                      <button className='free-quote-btn-global'>
                        Free Quote
                      </button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
          {/* card2 */}
          <Col className='flip-card-col'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <i className='fas fa-ruler-combined fa-2x'></i>
                  <p>Grading</p>
                </div>
                <div className='flip-card-back'>
                  <h1 style={{ lineHeight: '.9' }}>GP Excavation</h1>
                  <p>Grading</p>
                  <Col className='quote-col'>
                    <Link to='/quote'>
                      <button className='free-quote-btn-global'>
                        Free Quote
                      </button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
          {/* card3 */}
          <Col className='flip-card-col'>
            {' '}
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img
                    src='https://img.icons8.com/ios-filled/50/000000/tiffin.png'
                    alt='septic tank'
                    />
                  <p>Septic Install</p>
                </div>
                <div className='flip-card-back'>
                  <h1 style={{ lineHeight: '.9' }}>GP Excavation</h1>
                  <p>Septic Install</p>
                  <Col className='quote-col'>
                    <Link to='/quote'>
                      <button className='free-quote-btn-global'>
                        Free Quote
                      </button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='flipcard-row2'>
          {/* card4 */}
          <Col className='flip-card-col'>
            {' '}
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img
                    src='https://img.icons8.com/ios-filled/50/000000/demolition-excavator.png'
                    alt='wrecking ball'
                    />
                  <p>Land Clearing</p>
                </div>
                <div className='flip-card-back'>
                  <h1 style={{ lineHeight: '.9' }}>GP Excavation</h1>
                  <p>Land Clearing</p>
                  <Col className='quote-col'>
                    <Link to='/quote'>
                      <button className='free-quote-btn-global'>
                        Free Quote
                      </button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
          {/* card5 */}
          <Col className='flip-card-col'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img
                    src='https://img.icons8.com/ios-filled/50/000000/jackhammer.png'
                    alt='jackhammer'
                    />
                  <p>Operate Machine Rental</p>
                </div>
                <div className='flip-card-back'>
                  <h1 style={{ lineHeight: '.9' }}>GP Excavation</h1>
                  <p>Operate Machine Rental</p>
                  <Col className='quote-col'>
                    <Link to='/quote'>
                      <button className='free-quote-btn-global'>
                        Free Quote
                      </button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
          {/*card6 */}
          <Col className='flip-card-col'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img
                    src='https://img.icons8.com/ios-glyphs/50/000000/asphalt-paver.png'
                    alt='paver'
                    />
                  <p>Compaction</p>
                </div>
                <div className='flip-card-back'>
                  <h1 style={{ lineHeight: '.9' }}>GP Excavation</h1>
                  <p>Compaction</p>
                  <Col className='quote-col'>
                    <Link to='/quote'>
                      <button className='free-quote-btn-global'>
                        Free Quote
                      </button>
                    </Link>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Col> */}
      </Row>
                    </ResponsiveFlipCard>
    </>
  );
};

export default FlipCard;
