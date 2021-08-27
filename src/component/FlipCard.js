import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FlipCard = () => {
  return (
    <>
      <Row className='service-card-container'>
        <h1 style={{ textAlign: 'center' }}>Services</h1>
        <Row className='flipcard-row1'>
          <Col>
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
                  <h1>GP Excavation</h1>
                  <p>Utility Trenching</p>
                  <button>quote</button>
                </div>
              </div>
            </div>
          </Col>
          {/* card2 */}
          <Col>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  {/* <img src="img_avatar.png" alt="Avatar" style={{width:'300px', height:'300px'}}/> */}
                  <i className='fas fa-ruler-combined fa-2x'></i>
                  <p>Grading</p>
                </div>
                <div className='flip-card-back'>
                  <h1>GP Excavation</h1>
                  <p>Grading</p>
                  <button>quote</button>
                </div>
              </div>
            </div>
          </Col>
          {/* card3 */}
          <Col>
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
                  <h1>GP Excavation</h1>
                  <p>Septic Install</p>
                  <button>quote</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='flipcard-row2'>
          {/* card4 */}
          <Col>
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
                  <h1>GP Excavation</h1>
                  <p>Land Clearing</p>
                  <button>quote</button>
                </div>
              </div>
            </div>
          </Col>
          {/* card5 */}
          <Col>
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
                  <h1>GP Excavation</h1>
                  <p>Operate Machine Rental</p>
                  <button>quote</button>
                </div>
              </div>
            </div>
          </Col>
          {/*card6 */}
          <Col>
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
                  <h1>GP Excavation</h1>
                  <p>Compaction</p>
                  <button>quote</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Col> */}
      </Row>
    </>
  );
};

export default FlipCard;
