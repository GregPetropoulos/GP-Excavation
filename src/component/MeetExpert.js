import React from 'react'
import Expert from '../images/expert.jpg';
const MeetExpert = () => {
    return (
        <div className='profile-image-wrapper'>
            <img className='profile-image' src={Expert} alt='greg-profile'></img>
            <p> Hi my name is Greg and I enjoy digging holes, don't throw your money down another money pit.</p>

        </div>
    )
}

export default MeetExpert
