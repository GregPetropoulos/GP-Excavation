import React, {Fragment} from 'react';
import Hero from '../Hero';
import Footer from '../Footer';
import Counter from '../Counter';
import Services from '../Services';
import MeetExpert from '../MeetExpert';




const Home = () => {
    return (
        <Fragment>
   <Hero/>
   <Counter/>
   <MeetExpert/>
   <Services/>
   <Footer/>
   </Fragment>
    )
}


export default Home
