import React from 'react';
import Banner from '../Banner/Banner';
import PopularPhone from '../PopularPhone/PopularPhone';
import Review from '../Review/Review';
import About from './About/About';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularPhone></PopularPhone>
             <Review></Review>
             <About></About>
        </div>
    );
};

export default Home;