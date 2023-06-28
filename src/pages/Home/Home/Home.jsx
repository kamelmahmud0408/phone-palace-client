import React from 'react';
import Banner from '../Banner/Banner';
import PopularPhone from '../PopularPhone/PopularPhone';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularPhone></PopularPhone>
             <Review></Review>
        </div>
    );
};

export default Home;