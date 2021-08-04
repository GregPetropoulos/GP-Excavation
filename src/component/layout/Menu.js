import React from 'react';
import { Link } from 'react-router-dom';


export const Menu = () => {
    return (
        
            <div className='show-mobile-nav'>
   
           <ul className='mobile-link-items'>
             <li>
               <Link to='/home' className='mobile-links'>
                 Home
               </Link>
             </li>
             <li>
               <Link to='/about' className='mobile-links'>
                 About
               </Link>
             </li>
             <li>
               <Link to='/services' className='mobile-links'>
                 Services
               </Link>
             </li>
             <li>
               <Link to='/projects' className='mobile-links'>
                 Projects
               </Link>
             </li>
             <li>
               <Link to='/blog' className='mobile-links'>
                 Blog
               </Link>
             </li>
             <li>
               <Link to='/contact' className='mobile-links'>
                 Contact
               </Link>
             </li>
           </ul>
         </div>
    
    )
}
