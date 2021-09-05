import React from 'react';
import { Link } from 'react-router-dom';




export const MobileMenu = ({onClick})=> {

    return (
        

<div className='show-mobile-nav' onClick={onClick} >
   
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
               <Link to='/service' className='mobile-links'>
                 Services
               </Link>
             </li>
             <li>
               <Link to='/projects' className='mobile-links'>
                 Projects
               </Link>
             </li>
             <li>
               <Link to='/license' className='mobile-links'>
                 License
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
