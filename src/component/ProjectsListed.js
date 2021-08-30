import React from 'react';
// import ProjectList from'./layout/Projects';
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'react-bootstrap';

const ProjectsListed = ({ title, projectImage, description, children }) => {
  return (
    // <Row className='photo-grid-row-projects'>
    //   <Col className='photo-grid-col-projects'>
    //     <div className='project-image-wrapper'>
    //       <div className='overlay-project'>
    //         <div className='overlay-on-hover'>
    //           <h2>{title}</h2>
    //           <p className='description-projects'>{description}</p>
    //         </div>
    //       </div>
    //       <img src={projectImage} style={{width:'100%'}}alt='greg-projects' className='projectImage' />
    //       {/* {children} */}
    //     </div>
    //   </Col>
    // </Row>
    <Container className='photo-container'>
<div className='project-row'>

<div className="container">
  <img  src={projectImage} alt="construction-projects" className="image"/>
  <div className="middle">
    <div className="text">{description}</div>
  </div>
</div>

</div>
    </Container>
  );
};

export default ProjectsListed;
