import React from 'react';
import ProjectList from'../ProjectList';
import AppleValleyTrench from '../../images/apple-valley-utility-trench.jpeg'
import { Link } from 'react-router-dom';


// import AppleValleyTrench from '../../images/avtrench.jpeg'

const Projects = () => {
    return (
   <Link to ='/quote-form'>

 <ProjectList 
image={AppleValleyTrench}
title='Apple Valley Utility Trench'
description='GP Excavation hard at work for the Utility company.
Safety is always our first concern prior to breaking ground.'
//     <a
//       href='https://google.com'
//       target='_blank'
//       rel='noreferrer'
//       className='project-links'
//     ></a>

>
    </ProjectList> 
        </Link> 
    
    )
}

export default Projects;
